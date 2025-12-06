import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import Challages from "@/components/case-study-details/Challages";
import DetailsHero from "@/components/case-study-details/DetailsHero";
import Feedback from "@/components/case-study-details/Feedback";
import NextPrevNavigation from "@/components/case-study-details/NextPrevNavigation";
import ParallaxDivider2 from "@/components/case-study-details/ParallaxDivider2";
import Solutions from "@/components/case-study-details/Solutions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Project Details || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function CaseStudyDetailsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <DetailsHero />
        <ParallaxDivider2 />
        <div className="mxd-section mxd-project overflow-hidden">
          <div className="mxd-container grid-container">
            <Challages />
            <Solutions />
            <Feedback />
            <NextPrevNavigation />
          </div>
        </div>
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
