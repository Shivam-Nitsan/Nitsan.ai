import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import { Metadata } from "next";
import Hero from "@/components/case-study/Hero";
import Testimonials from "@/components/common/Testimonials";
import MarqueeSlider from "@/components/case-study/MarqueeSlider";
import CaseStudy1 from "@/components/case-study/CaseStudy1";
import CaseStudyList from "@/components/case-study/CaseStudyList";
import CaseStudyMansory from "@/components/case-study/CaseStudyMansory";
export const metadata: Metadata = {
  title:
    "Project Details || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function CaseStudyPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
       <CaseStudy1/>
       <CaseStudyList/>
    <CaseStudyMansory/>
        <MarqueeSlider/>
        <Testimonials/>
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
