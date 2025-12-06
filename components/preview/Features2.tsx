import Image from "next/image";
import RevealText from "../animation/RevealText";
import data from "../../data/data.json"

export default function Features2() {
 const feature = data.preview?.PreviewFeature2 || {};


  return (
    <div className="mxd-section">
      <div className="mxd-container no-padding-container">
        {/* Block - Features Promo Start */}
        <div className="mxd-block">
          <div className="mxd-features-promo">
            <div className="container-fluid p-0">
              <div className="row g-0">
                
                {/* Left Side */}
                <div className="col-12 col-xl-5 mxd-features-promo__item">
                  <div className="mxd-container grid-container no-padding-right">
                    <div className="mxd-block mxd-grid-item no-margin">
                      <div className="mxd-features-promo__content">

                        <RevealText
                          as="h2"
                          className="mxd-pinned__title centered-mobile h2-small anim-uni-in-up reveal-type"
                        >
                          {feature.title}
                        </RevealText>

                        <div className="mxd-pinned__tags centered-mobile anim-uni-in-up">
                          {feature.tags?.map((tag, index) => (
                            <span key={index} className="tag tag-default tag-outline">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="anim-uni-in-up centered-mobile">
                          {feature.description}
                        </p>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side (Media) */}
                <div className="col-12 col-xl-7 mxd-features-promo__item">
                  <div className="mxd-features-promo__image anim-uni-in-up">
                    <Image
                      alt={feature.image.alt}
                      width={feature.image.width}
                      height={feature.image.height}
                      src={feature.image.src}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Block - Features Promo End */}
      </div>
    </div>
  );
}
