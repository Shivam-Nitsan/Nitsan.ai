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

      {/* Section - Parallax Divider Start */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container">
          <div className="mxd-container__circle loading__fade">
            <Link
              className="btn-rotating btn-rotating-blur-outline ver-02"
              href={heroData.cta.href}
            >
              {/* SVG rotating text */}
              <AnimateRotation
                as="svg"
                version="1.1"
                id="scrollDown"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 160 160"
                enableBackground={"new 0 0 160 160"}
                xmlSpace="preserve"
                className="btn-rotating__text animate-rotation"
                value={360}
              >
                <defs>
                  <path
                    id="textPath"
                    d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                  />
                </defs>
                <g>
                  <use xlinkHref="#textPath" fill="none" />
                  <text>
                    <textPath xlinkHref="#textPath">
                      {heroData.cta.rotationText}
                    </textPath>
                  </text>
                </g>
              </AnimateRotation>
              {/* CTA Image */}
              {heroData.cta.image && (
                <Image
                  className="btn-rotating__image"
                  alt={heroData.cta.image.alt}
                  width={heroData.cta.image.width}
                  height={heroData.cta.image.height}
                  src={heroData.cta.image.src}
                />
              )}
            </Link>
          </div>

          {/* Parallax Divider */}
          <div className="mxd-divider loading__fade">
            <BackgroundParallax
              className={`mxd-divider__image parallax-img ${
                heroData.parallaxDivider.className || ""
              }`}
            />
          </div>
        </div>
      </div>
      {/* Section - Parallax Divider End */}
    </>
  );
}
