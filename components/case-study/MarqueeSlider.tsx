import VelocityMarquee from "../animation/VelocityMarquee";
import data from "../../data/data.json";

export default function MarqueeSlider() {
  const marqueeData = data?.caseStudy?.marqueeSlider;

  if (!marqueeData || !marqueeData.items) return null;

  return (
    <div className="mxd-section padding-mtext">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <VelocityMarquee
            className={`marquee marquee-right--gsap ${marqueeData?.className || ""}`}
          >
            {marqueeData.items.map((item, index) => (
              <div key={index} className="marquee__item one-line item-regular text">
                <p className="marquee__text">{item.text}</p>

                <div
                  className="marquee__image"
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                />
              </div>
            ))}
          </VelocityMarquee>
        </div>
      </div>
    </div>
  );
}
