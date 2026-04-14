import { getPayload } from "payload";
import config from "@/payload.config";
import { notFound } from "next/navigation";
import Hero from "@/app/components/Hero";
import DiySlider from "@/app/components/Diyslider";
import Navbar from "@/app/components/Navbar";
import { getNavigation } from "@/lib/getNavigation";
import Footer from "@/app/components/Footer";
import ProductServices from "@/app/components/Productservices";
import ImageSlider from "@/app/components/ImageSlider";
import Contractor from "@/app/components/Contractor";

const navData = await getNavigation();

const blockMap: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  diySlider: DiySlider,
  productServices: ProductServices,
  imageSlider:ImageSlider,
  Contractor:Contractor,
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
    <Navbar navData={navData} />
      {(page.blocks ?? []).map((block: any, i: number) => {
        const Component = blockMap[block.blockType];
        if (!Component) return null;
        return <Component key={i} {...block} />;
      })}
      <Footer/>
    </>
  );
}