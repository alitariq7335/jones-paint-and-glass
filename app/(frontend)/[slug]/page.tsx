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
  params: Promise<{ slug: string }>;  // ✅ Now a Promise
}) {
  const { slug } = await params;  // ✅ Await it

  const payload = await getPayload({ config });

  const { docs } = await (payload as any).find({
    collection: "pages",
    where: { slug: { equals: slug } },  // ✅ Use destructured slug
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