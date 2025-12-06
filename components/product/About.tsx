"use client";

import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";
import data from "@/data/data.json";

export default function About() {
  const about = data?.product?.about;

  return (
    <div className="mxd-section padding-pre-grid">
      <div className="mxd-container grid-container">
        {/* Block - About Description with H2 Title and Paragraph Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              
              {/* LEFT Title */}
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <RevealText as="h2" className="reveal-type anim-uni-in-up">
                    {about?.title}
                  </RevealText>
                </div>
              </div>

              {/* RIGHT Content */}
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">

                    {/* Dynamic Paragraphs */}
                    {about?.paragraphs?.map((p, index) => (
                      <p
                        key={index}
                        className={
                          index === 0
                            ? "t-large t-bright anim-uni-in-up"
                            : "anim-uni-in-up"
                        }
                      >
                        {p}
                      </p>
                    ))}

                    {/* Dynamic Button */}
                    <div className="mxd-paragraph__controls anim-uni-in-up">
                      <AnimatedButton
                        text={about?.button?.text}
                        className="btn btn-anim btn-default btn-outline slide-right-up"
                        href={about?.button?.href}
                      >
                        <i className="ph-bold ph-arrow-up-right" />
                      </AnimatedButton>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Block - About Description with H2 Title and Paragraph End */}
      </div>
    </div>
  );
}
