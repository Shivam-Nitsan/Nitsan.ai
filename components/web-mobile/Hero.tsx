import Counter from "@/components/common/Counter";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/data.json";

export default function Hero() {
  const heroData = data?.webPage?.hero || {};

  return (
    <>
      {/* Section - Inner Page Headline */}
      <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
        <div className="mxd-container grid-container">

          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* Left Name */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="mxd-point-subtitle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M19.6,9.6c0,...Z" />
                      </svg>
                      <span>{heroData.sectionName}</span>
                    </p>
                  </div>
                </div>

                {/* Right Title */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-04 loading__item">
                        {heroData.title}
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Statistics Section */}
      <div className="mxd-section mxd-section-inner-stats overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                <div className="col-12 col-xl-2 mxd-grid-item no-margin" />

                <div className="col-12 col-xl-10">
                  <div className="mxd-block__content">

                    <div className="mxd-block__inner-stats">
                      <div className="mxd-stats-cards loading__fade">
                        <div className="container-fluid px-0">
                          <div className="row gx-0">

                            {heroData.stats.map((item) => (
                              <div
                                key={item.id}
                                className={`col-12 col-xl-${
                                  item.id === 1 ? "7" : "5"
                                } mxd-stats-cards__item mxd-grid-item`}
                              >
                                <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">

                                  <div className="mxd-counter">
                                    <p className="mxd-counter__number mxd-stats-number">
                                      <Counter max={item.counter} />
                                      {item.suffix}
                                    </p>

                                    <p className="mxd-counter__descr t-140 t-bright whitespace-pre-line">
                                      {item.description}
                                    </p>
                                  </div>

                                  <div className="mxd-stats-cards__btngroup">
                                    <Link
                                      className="btn btn-anim btn-default btn-outline slide-right-up"
                                      href={item.buttonLink}
                                    >
                                      <span className="btn-caption">
                                        {item.buttonText}
                                      </span>
                                      <i className="ph-bold ph-arrow-up-right" />
                                    </Link>
                                  </div>

                                  <div className="mxd-stats-cards__image">
                                    <Image
                                      alt="Illustration"
                                      src={item.image}
                                      width={800}
                                      height={800}
                                    />
                                  </div>

                                </div>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
