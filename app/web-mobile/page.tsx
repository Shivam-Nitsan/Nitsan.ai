

import Expertise from "@/components/web-mobile/Expertise";

import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/web-mobile/Hero";
import ServicesStack from "@/components/web-mobile/ServicesStack";
import Services from "@/components/web-mobile/Services";
import TechStacks from "@/components/web-mobile/TechStacks";





export default function WebMobilePage() {

  return (

    <>
    <main id="mxd-page-content" className="mxd-page-content inner-page-content"

          >
            <Hero/>
            <ServicesStack/>
            <Services/>
            <Expertise/>
            <TechStacks/>
            <Cta/>
    </main>

          <Footer2 />

    </>

  );

}