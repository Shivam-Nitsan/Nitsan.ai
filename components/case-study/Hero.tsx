import Link from "next/link";
import Image from "next/image";
import AnimateRotation from "@/components/animation/AnimateRotation";
import BackgroundParallax from "@/components/animation/BackgroundParallax";
import data from "@/data/data.json";

export default function Hero() {
  const heroData = data?.teamPage?.heroSection || {};

  return (
    <>
      {/* Section - Inner Page Headline Start */}
      <div className="mxd-section mxd-section-inner-headline padding-text-pre-block">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {/* Inner Headline Name Start */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="mxd-point-subtitle">
                      {heroData.subtitle.icon && (
                        <Image
                          src={heroData.subtitle.icon}
                          width={20}
                          height={20}
                          alt="Subtitle Icon"
                        />
                      )}
                      <span>{heroData.subtitle.text}</span>
                    </p>
                  </div>
                </div>
                {/* Inner Headline Content Start */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-05 loading__item">
                        {heroData.title}
                      </h1>
                      <p className="inner-headline__text t-large t-bright loading__item">
                        {heroData.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Inner Headline Content End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section - Inner Page Headline End */}

 
    </>
  );
}
