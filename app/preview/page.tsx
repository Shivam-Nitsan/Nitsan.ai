import Hero from "@/components/preview/Hero";
import Pricing from "@/components/preview/Pricing";
import ServicesStack from "@/components/preview/ServicesStack";
import Services from "@/components/preview/Services";
import Projects from "@/components/preview/Projects";
import MarqueeSlider from "@/components/preview/MarqueeSlider";
import Facts from "@/components/homes/home-software-development-company/Facts";
import Techstack from "@/components/preview/Techstack";
import ParallaxBanner from "@/components/preview/ParallaxBanner";
import Testimonials from "@/components/preview/Testimonials";
import Faqs from "@/components/preview/Faqs";
import Partners from "@/components/preview/Partners";

import { Metadata } from "next";


import Cta from "@/components/common/Cta";
import Blogs from "@/components/common/Blogs";

import Footer2 from "@/components/footers/Footer2";


export const metadata: Metadata = {
  title:
    "Preview || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function PreviewPage() {
  return (
    <>
      <main id="mxd-page-content" className="mxd-page-content">
        <Hero />
        <ServicesStack/>
        <Services/>
        <Projects/>
        <MarqueeSlider/>
        <Pricing />
        <Facts/>
        <Techstack/>
        <ParallaxBanner />
        <Faqs/>
        <Partners/>
        <Testimonials />
        <Blogs/>
        
        <Cta/>
      </main>
      <Footer2 />
    </>
  );
}