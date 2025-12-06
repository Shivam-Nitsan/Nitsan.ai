import Image from "next/image";
import VelocityMarquee from "../animation/VelocityMarquee";
import RevealText from "../animation/RevealText";
import data from "../../data/data.json"

export default function PagesMarquee() {
const marquee = data.preview?.prewiewPageMarquee || {};


  return (
    <div
      className="mxd-section"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          
          {/* Top Marquee */}
          <VelocityMarquee direction="left" className="marquee__toleft">
            {marquee.marqueeTop?.map((img, index) => (
              <div
                key={index}
                className="marquee__item overflow-visible one-line item-regular text"
              >
                <div className="marquee__component">
                  <Image
                    alt="Rayo Image"
                    width={800}
                    height={502}
                    src={img}
                  />
                </div>
              </div>
            ))}
          </VelocityMarquee>

          {/* Center Block */}
          <div className="mxd-container">
            <div className="mxd-demo-components">

              {/* Floating Images */}
              <div className="mxd-demo-components__objects">
                {marquee.objects?.map((obj, index) => (
                  <div
                    key={index}
                    className={`mxd-demo-components__object obj-0${index + 1} anim-uni-in-up`}
                  >
                    <Image
                      className={obj.class}
                      alt="Rayo Image"
                      width={700}
                      height={730}
                      src={obj.src}
                    />
                  </div>
                ))}
              </div>

              {/* Title */}
              <div className="mxd-demo-components__title anim-uni-in-up">
                <RevealText as="span" className="reveal-type">
                  {marquee.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </RevealText>
              </div>

            </div>
          </div>

          {/* Bottom Marquee */}
          <VelocityMarquee className="marquee__toright">
            {marquee.marqueeBottom?.map((img, index) => (
              <div
                key={index}
                className="marquee__item overflow-visible one-line item-regular text"
              >
                <div className="marquee__component">
                  <Image
                    alt="Rayo Image"
                    width={800}
                    height={502}
                    src={img}
                  />
                </div>
              </div>
            ))}
          </VelocityMarquee>

        </div>
      </div>
    </div>
  );
}
