"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import faqs from "@/data/faqs.json";
import data from "@/data/data.json";

import { Faq } from "@/types/faq";
import AnimateRotation from "../animation/AnimateRotation";
import BackgroundParallax from "../animation/BackgroundParallax";

export default function Faqs() {
  const faqCotentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [faqContentHeights, setfaqContentHeights] = useState<number[]>([]);
  const [activeFaq, setActiveFaq] = useState(-1);

  const header = data?.preview?.faqsHeader;
  const circleText = data?.preview?.faqsParallax?.circleText;

  useEffect(() => {
    const heights = faqCotentRefs.current.map((submenu) =>
      submenu ? submenu.scrollHeight : 0
    );
    setfaqContentHeights(heights);
  }, []);

  return (
    <>
      {/* TOP HEADLINE SECTION */}
      <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-block">
        <div className="mxd-container grid-container">

          <div className="mxd-block ">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* LABEL LEFT */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline ">
                    <p className="mxd-point-subtitle">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2..."
                        />
                      </svg>
                      <span>{header?.label}</span>
                    </p>
                  </div>
                </div>

                {/* TITLE + DESCRIPTION */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">

                      <h1 className="inner-headline__title headline-img-before headline-img-02 ">
                        {header?.title}
                      </h1>

                      <p className="inner-headline__text t-large t-bright ">
                        {header?.description}
                      </p>

                    </div>
                  </div>
                </div>
                {/* END TITLE */}

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ ACCORDION SECTION */}
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />

                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-accordion">

                      {faqs.map((f: Faq, idx: number) => (
                        <div key={idx} className="mxd-accordion__item">

                          <div className="mxd-accordion__divider anim-uni-in-up" />

                          {/* Accordion title */}
                          <div
                            onClick={() => setActiveFaq((prev) => (prev === idx ? -1 : idx))}
                            className="mxd-accordion__title anim-uni-in-up"
                          >
                            <h6>{f.question}</h6>
                            <div
                              className={`mxd-accordion__arrow ${
                                idx === activeFaq ? "accordion-rotate" : ""
                              }`}
                            >
                              <i className="ph ph-plus" />
                            </div>
                          </div>

                          {/* Accordion content */}
                          <div
                            className="mxd-accordion__content"
                            style={{
                              display: "block",
                              height:
                                activeFaq === idx
                                  ? `calc(${faqContentHeights[idx]}px + 3.4rem)`
                                  : 0,
                              paddingBottom: activeFaq === idx ? "3.4rem" : 0,
                              transition: "all 0.3s ease"
                            }}
                            ref={(el) => {
                              faqCotentRefs.current[idx] = el;
                            }}
                          >
                            <p className="mxd-accordion__text">{f.answer}</p>
                          </div>

                          <div className="mxd-accordion__divider anim-uni-in-up" />
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
                {/* END FAQ CONTENT */}

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARALLAX SECTION */}

    </>
  );
}
