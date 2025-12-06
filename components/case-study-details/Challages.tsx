"use client";

import Image from "next/image";
import RevealText from "../animation/RevealText";
import data from "@/data/data.json";

export default function Challages() {
  const { title, paragraph1, paragraph2, images } = data?.caseStudyDetails?.challanges;

  return (
    <>
      {/* Challenge Section */}
      <div className="mxd-project__block pre-grid">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  {title}
                </RevealText>
              </div>
            </div>

            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph">
                  <p className="t-large t-bright anim-uni-in-up">{paragraph1}</p>
                  <p className="anim-uni-in-up">{paragraph2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="mxd-project__block no-margin">
        <div className="mxd-project-cards">
          <div className="container-fluid px-0">
            <div className="row gx-0">

              {images.map((img, index) => (
                <div
                  key={index}
                  className={`${img.class} mxd-project-cards__item mxd-grid-item anim-uni-scale-in-up`}
                >
                  <div className={img.innerClass}>
                    <Image
                      alt="Project Preview"
                      src={img.src}
                      width={img.width}
                      height={img.height}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
