import Hero from "@/components/homes/home-freelancer-portfolio/Hero";

import Expertise from "@/components/cloud/Expertise";





import TechStacks from "@/components/cloud/TechStacks";





import Cta from "@/components/common/Cta";

import Footer2 from "@/components/footers/Footer2";
import Services from "@/components/cloud/Services";
import ServicesStack from "@/components/cloud/ServicesStack";
import Facts from "@/components/cloud/Facts";





export default function product() {

  return (

    <>

    <main

            id="mxd-page-content"

            className="mxd-page-content inner-page-content"

          >

            <Hero/>

            <Services/>

            <ServicesStack/>

            <Expertise/>

            <TechStacks/>

            <Facts/>

          <Cta/>

          </main>

          <Footer2 />

    </>

  );

}