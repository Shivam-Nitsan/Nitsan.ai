
import Approch from "@/components/common/Approch";
import Cta from "@/components/common/Cta";
import Experiences from "@/components/common/Experiences";
import MarqueeSlider from "@/components/common/MarqueeSlider";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/consultation/Hero";



export default function ConsultationPage() {
  return (
    <>
    <main
            id="mxd-page-content"
            className="mxd-page-content inner-page-content"
          >
            <Hero/>
            <Approch />
            <Experiences/>
            <MarqueeSlider/>
            <Cta/>
          </main>
          <Footer2 />
    </>
  );
}
