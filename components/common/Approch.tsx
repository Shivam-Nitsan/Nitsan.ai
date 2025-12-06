import Image from "next/image";
import data from "@/data/data.json";
import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Approch() {
  const section = data.approach; 
  const list = section.approach1;

  return (
    <div className="mxd-section padding-pre-grid mobile-grid-s">
      <div className="mxd-container grid-container">

        {/* ⭐ Dynamic Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">

                {/* Title */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      {section.title}
                    </RevealText>
                  </div>
                </div>

                {/* Subtitles */}
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    {section.subtitles.map((sub, idx) => (
                      <p key={idx} className="anim-uni-in-up">{sub}</p>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text={section.button.text}
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={section.button.link}
                    >
                      <i className={section.button.icon} />
                    </AnimatedButton>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ⭐ Dynamic Approach List */}
        <div className="mxd-block">
          <div className="mxd-approach-list">
            {list.map((item, idx) => (
              <div className="mxd-approach-list__item" key={idx}>
                <div className="mxd-approach-list__border anim-uni-in-up" />

                <div className="mxd-approach-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">

                      {/* Icon */}
                      <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__image anim-uni-in-up">
                          <Image
                            alt={item.title}
                            src={item.icon}
                            width={210}
                            height={210}
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__title anim-uni-in-up">
                          <h6>{item.title}</h6>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-approach-list__descr anim-uni-in-up">
                          <p>{item.description}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mxd-approach-list__border anim-uni-in-up" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
