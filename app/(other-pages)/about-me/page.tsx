import Approch from "@/components/common/Approch";
import Education from "@/components/common/Education";
import Experiences from "@/components/common/Experiences";
import Facts from "@/components/common/Facts";

import Hero from "@/components/about/Hero";
import ProjectsMarqueeSlider from "@/components/about/ProjectsMarqueeSlider";
import Techstack from "@/components/about/Techstack";

import MarqueeSlider from "@/components/about/MarqueeSlider";
import Testimonials from "@/components/other-pages/Testimonials";
import ParallaxBackround from "@/components/about/ParallaxBackround";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "About Me || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function AboutMePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <ProjectsMarqueeSlider />
        <Approch />
        <Facts />
        <Experiences />
        <Techstack />
        <Education />
        <MarqueeSlider />
        <Testimonials />
        <ParallaxBackround />
        <Blogs title="My journal" />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
