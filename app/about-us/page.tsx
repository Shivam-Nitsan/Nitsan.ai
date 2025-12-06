import BackgroundParallax from "@/components/animation/BackgroundParallax";

import Awards from "@/components/common/Awards";
import Cta from "@/components/common/Cta";

import Facts from "@/components/common/Facts";
import Testimonials from "@/components/common/Testimonials";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/about/Hero";
import ServicesStack from "@/components/about/ServicesStack";

import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "About Us || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function AboutUsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
       
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <BackgroundParallax className="mxd-divider__image divider-image-8 parallax-img" />
            </div>
          </div>
        </div>
        <Awards />
    

        <Facts />
        <ServicesStack />
  <Testimonials/>
  <Cta/>
      </main>
      <Footer2 />
    </>
  );
}
