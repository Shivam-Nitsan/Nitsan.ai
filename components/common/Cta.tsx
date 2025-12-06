"use client";

import Image from "next/image";
import data from "@/data/data.json";
import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";

export default function Cta() {
  const ctaData = data?.cta || {};

  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg" />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  {ctaData.icon && (
                    <span className="mxd-promo__icon">
                      <Image
                        alt={ctaData.icon.alt || "Icon"}
                        src={ctaData.icon.src}
                        width={ctaData.icon.width}
                        height={ctaData.icon.height}
                      />
                    </span>
                  )}
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type"
                  >
                    {ctaData.title || "Let's talk about your project!"}
                  </RevealText>
                </p>

                <div className="mxd-promo__controls anim-uni-in-up">
                  {ctaData.button && (
                    <AnimatedButton
                      text={ctaData.button.text || "Contact Me"}
                      href={ctaData.button.href || "/contact"}
                      className={ctaData.button.class || "btn btn-anim btn-default btn-large slide-right-up"}
                    >
                      {ctaData.button.iconClass && (
                        <i className={ctaData.button.iconClass} />
                      )}
                    </AnimatedButton>
                  )}
                </div>
              </div>

              {/* parallax images */}
              {ctaData.images?.length > 0 && (
                <div className="mxd-promo__images">
                  {ctaData.images.map((img, idx) => (
                    <Image
                      key={idx}
                      className={img.className || ""}
                      alt={img.alt || "CTA Image"}
                      src={img.src}
                      width={img.width}
                      height={img.height}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
