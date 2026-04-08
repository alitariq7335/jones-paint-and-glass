import Image from "next/image";
import Hero from "./components/Hero";
import Productservices from "./components/Productservices";
import Contractor from "./components/Contractor";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Diyslider from "./components/Diyslider";
import Navbar from "./components/Navbar";
import { getNavigation } from "@/lib/getNavigation";


const navData = await getNavigation();

export default function Home() {
  return (
   <section>
    <Navbar navData={navData} />
    <Hero/>
    <Productservices/>
    <ImageSlider/>
    <Contractor/>
    <Diyslider/>
    <Footer/>
   </section>
  );
}
