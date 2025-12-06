"use client";

import { useState } from "react";
import Image from "next/image";

import data from "@/data/data.json";
import RevealText from "@/components/animation/RevealText";
import AnimatedButton from "@/components/animation/AnimatedButton";
import { type Expertise } from "@/types/expertice";

type HoverState = {
  activeIndex: number | null;
  x: number;
};

export default function Expertise() {
  // Load JSON section
  const section = data?.cloudPage?.expertiseSection;
  const expertise: Expertise[] = section?.expertise || [];

  const [hoverState, setHoverState] = useState<HoverState>({
    activeIndex: null,
    x: 0,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
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
    <div className="mxd-section overflow-hidden padding-default">
      <div className="mxd-container grid-container">
        {/* Section Title Block */}
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0">
                
                {/* Title */}
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type">
                      {section?.title}
                    </RevealText>
                  </div>
                </div>

                <div className="col-12 col-xl-3 mxd-grid-item no-margin"></div>

                {/* Button */}
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <AnimatedButton
                      text={section?.buttonText}
                      className="btn btn-anim btn-default btn-outline slide-right-up"
                      href={section?.buttonLink}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </AnimatedButton>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Expertise List */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 mxd-grid-item no-margin">
                <div className="mxd-cpb-list">

                  {expertise.map((item, idx) => (
                    <div
                      className="mxd-cpb-list__item hover-reveal__item"
                      onMouseMove={(e) => handleMouseMove(e, idx)}
                      onMouseLeave={handleMouseLeave}
                      key={idx}
                    >
                      <div className="mxd-cpb-list__divider anim-uni-in-up" />

                      {/* Hover Image */}
                      <div
                        className="hover-reveal__content hover-reveal-280x340"
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
                          alt={item.title}
                          src={item.hoverImage}
                          width={600}
                          height={730}
                          style={{
                            transform:
                              hoverState.activeIndex === idx
                                ? "scale(1,1)"
                                : "scale(1,1.4)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>

                      {/* Main Content */}
                      <div className="mxd-cpb-list__content anim-uni-in-up">
                        <h6 className="mxd-cpb-list__title">{item.title}</h6>
                        <div className="mxd-cpb-list__num">
                          <span>{item.num}</span>
                        </div>
                      </div>

                      {/* Main Image */}
                      <div className="mxd-cpb-list__image anim-uni-in-up">
                        <Image
                          alt={item.title}
                          src={item.mainImage}
                          width={1200}
                          height={800}
                        />
                      </div>

                      <div className="mxd-cpb-list__divider anim-uni-in-up" />
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Expertise List End */}
      </div>
    </div>
  );
}
