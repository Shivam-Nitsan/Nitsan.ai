

import Image from "next/image";
import AnimatedButton from "@/components/animation/AnimatedButton";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import data from "@/data/data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Page Not Found || Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};

export default function NotFoundPage() {
  const pageData = data?.notFoundPage || {};
  const floatingImage = pageData.floatingImage;
  const errorContent = pageData.errorContent;
  const marquee = pageData.marquee;

  return (
    <>
      {/* Floating Image Background Start */}
      {floatingImage && (
        <div className="mxd-floating-img floating-bg">
          <div className="mxd-floating-img__item mxd-move">
            <Image
              alt={floatingImage.alt || "Floating Image"}
              src={floatingImage.src}
              width={floatingImage.width}
              height={floatingImage.height}
            />
          </div>
        </div>
      )}
      {/* Floating Image Background End */}

      {/* Page Content Start */}
      <main id="mxd-page-content" className="mxd-page-content">
        {/* Section - 404 Error Start */}
        <div className="mxd-section mxd-section-fullscreen">
          <div className="mxd-container grid-container fullwidth-container fullscreen-container loading-wrap">
            {/* Block - 404 Error Content Start */}
            <div className="mxd-block fullscreen-block">
              <div className="mxd-error floating-cards">
                <div className="mxd-error__descr">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="mxd-error__caption loading__fade">
                          <p className="t-large t-medium t-120 t-bright">
                            {errorContent?.title || "This page doesn't exist"}
                          </p>
                          <p className="t-large t-medium t-120 t-muted">
                            {errorContent?.subtitle || "Sorry."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mxd-error__controls loading__fade">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        {errorContent?.button && (
                          <AnimatedButton
                            className={errorContent.button.class}
                            text={errorContent.button.text}
                            href={errorContent.button.href}
                          >
                            {errorContent.button.iconClass && (
                              <i className={errorContent.button.iconClass} />
                            )}
                          </AnimatedButton>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - 404 Error Content End */}

            {/* Block - 404 Error Marquee Start */}
            {marquee?.items?.length > 0 && (
              <div className="mxd-block absolute-centered-block loading__item">
                <VelocityMarquee className={marquee.className}>
                  <div className="marquee__toright">
                    {marquee.items.map((item, index) => (
                      <div
                        key={index}
                        className="marquee__item item-regular item-regular-xl text"
                      >
                        <p className="marquee__text text-xl">
                          {item.text}
                        </p>
                        {item.svg && (
                          <div className="marquee__image image-xl">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 80 80"
                              fill="currentColor"
                            >
                              <path
                                fill="currentColor"
                                d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4c-2-1.2-3.5-3.2-4.7-4.8
                                c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4
                                c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
                                C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8c2.3,0.6,4.3,0.8,6.3,2.4
                                c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6
                                s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4
                                c1.8-0.3,5.1-0.7,7.1-0.8c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4C78.4,38.4,78.4,38.4,78.4,38.4z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </VelocityMarquee>
              </div>
            )}
            {/* Block - 404 Error Marquee End */}
          </div>
        </div>
        {/* Section - 404 Error End */}
      </main>
      {/* Page Content End */}
    </>
  );
}
