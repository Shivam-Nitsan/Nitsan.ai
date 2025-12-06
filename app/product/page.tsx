
import Services2 from "@/components/product/Services2";

import Hero from "@/components/product/Hero";
import About from "@/components/product/About";
import Services from "@/components/product/Services";
import Pricing from "@/components/product/Pricing";
import Testimonials from "@/components/product/Testimonials";

import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";


export default function product() {
  return (
    <>
    <main
            id="mxd-page-content"
            className="mxd-page-content inner-page-content"
          >
            <Hero/>
            <Services/>
            <Pricing/>
            <About/>
            <Services2/>
            <Testimonials/>
          <Cta/>
          </main>
          <Footer2 />
    </>
  );
}
