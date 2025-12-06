"use client";

import Image from "next/image";
import data from "@/data/data.json";

export default function Services() {
  const items = data?.preview?.servicesCardsSmall || [];

  return (
    <div className="mxd-section overflow-hidden padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-services-cards-s">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* CARD 1 — AI-powered solutions */}
                <div className="col-12 col-xl-8 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner justify-between bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up"
                        dangerouslySetInnerHTML={{ __html: items[0]?.title }}
                      />
                    </div>

                    <div className="mxd-services-cards-s__info width-50">
                      <div className="mxd-services-cards-s__tags">
                        {items[0]?.tags?.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="anim-uni-in-up">{items[0]?.desc}</p>
                    </div>

                    <div className="mxd-services-cards-s__image image-right">
                      <Image alt="Illustration" {...items[0].image} />
                    </div>
                  </div>
                </div>

                {/* CARD 2 — Fintech */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-accent radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">{items[1]?.title}</h3>
                    </div>

                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        {items[1]?.tags?.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="t-opposite anim-uni-in-up">{items[1]?.desc}</p>
                    </div>

                    <div className="mxd-services-cards-s__image image-top-right">
                      <Image className="mxd-move" alt="Illustration" {...items[1].image} />
                    </div>
                  </div>
                </div>

                {/* CARD 3 — Blockchain */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-right">
                  <div className="mxd-services-cards-s__inner bg-additional radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">{items[2]?.title}</h3>
                    </div>

                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        {items[2]?.tags?.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="t-bright anim-uni-in-up">{items[2]?.desc}</p>
                    </div>

                    <div className="mxd-services-cards-s__image image-bottom">
                      <Image className="mxd-rotate-slow" alt="Illustration" {...items[2].image} />
                    </div>
                  </div>
                </div>

                {/* CARD 4 — Cybersecurity */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in">
                  <div className="mxd-services-cards-s__inner bg-base-opp radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="opposite anim-uni-in-up">{items[3]?.title}</h3>
                    </div>

                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        {items[3]?.tags?.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline-opposite anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="t-opposite anim-uni-in-up">{items[3]?.desc}</p>
                    </div>

                    <div className="mxd-services-cards-s__image image-bottom image-bottom-2">
                      <Image alt="Illustration" {...items[3].image} />
                    </div>
                  </div>
                </div>

                {/* CARD 5 — Gaming */}
                <div className="col-12 col-xl-4 mxd-services-cards-s__item mxd-grid-item anim-uni-scale-in-left">
                  <div className="mxd-services-cards-s__inner justify-end bg-base-tint radius-l padding-4">
                    <div className="mxd-services-cards-s__title">
                      <h3 className="anim-uni-in-up">{items[4]?.title}</h3>
                    </div>

                    <div className="mxd-services-cards-s__info">
                      <div className="mxd-services-cards-s__tags">
                        {items[4]?.tags?.map((tag, i) => (
                          <span key={i} className="tag tag-default tag-outline anim-uni-in-up">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="anim-uni-in-up">{items[4]?.desc}</p>
                    </div>

                    <div className="mxd-services-cards-s__image image-top">
                      <Image alt="Illustration" {...items[4].image} />
                    </div>
                  </div>
                </div>

              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
