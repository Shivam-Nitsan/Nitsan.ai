

import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/staff/Hero";
import Services from "@/components/staff/Services";
import Services1 from "@/components/staff/Services1";


export default function StaffPage() {

  return (

    <>

    <main id="mxd-page-content" className="mxd-page-content inner-page-content">
            <Hero/>
            <Services/>
            <Services1/>
            <Cta/>

          </main>

          <Footer2 />

    </>

  );

}