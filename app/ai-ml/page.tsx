import Hero from "@/components/ai-ml/Hero";
import ServicesStack from "@/components/ai-ml/ServicesStack";
import PageTitle from "@/components/ai-ml/PageTitle";
import ContactForm from "@/components/ai-ml/ContactForm";

import Footer2 from "@/components/footers/Footer2";

import MarqueeSlider from "@/components/common/MarqueeSlider";
import Experiences from "@/components/common/Experiences";
import Facts from "@/components/common/Facts";
import Cta from "@/components/common/Cta";


export default function aiml() {
  return (
    <>
    <main
            id="mxd-page-content"
            className="mxd-page-content inner-page-content"
          >
            <Hero/>
            <Facts/>
            <ServicesStack/>
            <Experiences/>
            <MarqueeSlider/>
            <PageTitle />
            <ContactForm/>
          <Cta/>
          </main>
          <Footer2 />
    </>
  );
}
