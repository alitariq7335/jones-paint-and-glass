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
import DiySupportBlog from "@/app/components/DiySupportBlog";
import JpgMedia from "@/app/components/Jpgmedia";
import VideoSlider from "@/app/components/VideoSlider";
import Diyhero from "@/app/components/Diyhero";
import Quote from "@/app/components/Quote"
import Contacthero from "@/app/components/Contacthero"
import Inquireform from "@/app/components/Inquireform"
import About from "@/app/components/About"
import Features from "@/app/components/Features";
import Aboutlocation from "@/app/components/Aboutlocation"
import QuickLinks from "@/app/components/QuickLinks"
import Faqs from '@/app/components/Faqs'
import Reviews from "@/app/components/Reviews";
import StoreLocation from "@/app/components/StoreLocation"
import { getLocationBySlug } from "@/lib/getLocations";


export const dynamic = 'force-dynamic';

const blockMap: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  diySlider: DiySlider,
  productServices: ProductServices,
  imageSlider: ImageSlider,
  contractor: Contractor,
  diySupportBlog: DiySupportBlog,
  jpgMedia: JpgMedia,
  videoSlider: VideoSlider,
  diyHero: Diyhero,
  quote: Quote,
  contactHero: Contacthero,
  inquireForm: Inquireform,
  about: About,
  features: Features,
  aboutLocation: Aboutlocation,
  quickLinks: QuickLinks,
  faqs: Faqs,
  Reviews: Reviews,
  storeLocation: StoreLocation,
  

};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const navData = await getNavigation();
  const { slug } = await params;
  const payload = await getPayload({ config });

  //  — Check Pages collection first
  const { docs } = await (payload as any).find({
    collection: "pages",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });

  const page = docs[0];

  //  — If not found in Pages, check Locations collection
  if (!page) {
    const location = await getLocationBySlug(slug)

    //  — If not found in Locations either, show 404
    if (!location) return notFound()

    //  — Render location page with its blocks
    return (
      <>
        <Navbar navData={navData} />
        {(location.blocks ?? []).map((block: any, i: number) => {
          const Component = blockMap[block.blockType]
          if (!Component) return null
          return <Component key={i} {...block} />
        })}
        <Footer />
      </>
    )
  }

  //  — Render normal page with its blocks
  return (
    <>
      <Navbar navData={navData} />
      {(page.blocks ?? []).map((block: any, i: number) => {
        const Component = blockMap[block.blockType];
        if (!Component) return null;
        return <Component key={i} {...block} />;
      })}
      <Footer />
    </>
  );
}