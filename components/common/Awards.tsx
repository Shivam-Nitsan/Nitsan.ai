"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import awardsFile from "@/data/data.json";
import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";

type HoverState = {
  activeIndex: number | null;
  x: number;
};

export default function Awards() {
  const awards = awardsFile?.awards || []; // <-- fully dynamic

  const [hoverState, setHoverState] = useState<HoverState>({
    activeIndex: null,
    x: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, index: number) => {
    setHoverState({
      activeIndex: index,
      x: e.clientX,
    });
  };

  const handleMouseLeave = () => {
    setHoverState((pre) => ({
      activeIndex: null,
      x: pre.x,
    }));
  };

  return (
    <div className="mxd-section overflow-hidden padding-default mobile-title">
      <div className="mxd-container grid-container">
        
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle anim-uni-in-up">
                    <RevealText as="h2" className="reveal-type">
                      Awards &amp;<br />publications
                    </RevealText>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin" />

                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols pre-title anim-uni-in-up">
                    <AnimatedButton
                      text="View More"
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={`/about-us`}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Awards List */}
        <div className="mxd-block">
          <div className="mxd-awards-list hover-reveal">

            {awards.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                className="mxd-awards-list__item hover-reveal__item"
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
              >

                <div className="mxd-awards-list__border anim-uni-in-up" />

                {/* Hover Image */}
                <div
                  className="hover-reveal__content overflow-visible hover-reveal-260x260"
                  style={{
                    opacity: hoverState.activeIndex === idx ? 1 : 0,
                    transform: "translate(-80%, -50%)",
                    left: hoverState.x,
                    pointerEvents: "none",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Image
                    className="hover-reveal__image"
                    alt="Preview"
                    src={item.image}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    style={{
                      transform:
                        hoverState.activeIndex === idx
                          ? "scale(1,1)"
                          : "scale(1,1.4)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="mxd-awards-list__inner">
                  <div className="container-fluid px-0">
                    <div className="row gx-0">

                      {/* Title */}
                      <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__title anim-uni-in-up">
                          <div className="mxd-awards-list__icon">
                            <i className="ph ph-arrow-right" />
                          </div>
                          <p>{item.title}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__tagslist">
                          <ul>
                            {item.tags.map((tag, tIndex) => (
                              <li key={tIndex} className="anim-uni-in-up">
                                <p className="t-small">{tag}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                        <div className="mxd-awards-list__date anim-uni-in-up">
                          <p className="t-small">{item.date}</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mxd-awards-list__border anim-uni-in-up" />
              </a>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
