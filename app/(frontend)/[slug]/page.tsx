import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";
import DiySlider from "@/app/components/Diyslider";

const blockMap: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  diySlider: DiySlider,
};

export default async function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const payload = await getPayload({ config });

  // Cast to 'any' to bypass stale types until generate:types works
  const { docs } = await (payload as any).find({
    collection: "pages",
    where: { slug: { equals: params.slug } },
    depth: 2,
    limit: 1,
  });

  const page = docs[0];
  if (!page) return notFound();

  return (
    <>
      {(page.blocks ?? []).map((block: any, i: number) => {
        const Component = blockMap[block.blockType];
        if (!Component) return null;
        return <Component key={i} {...block} />;
      })}
    </>
  );
}