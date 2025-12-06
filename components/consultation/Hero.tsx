import BackgroundParallax from "@/components/animation/BackgroundParallax";
import RevealText from "@/components/animation/RevealText";
import heroData from "@/data/data.json";

export default function Hero() {
  const data = heroData?.consultation?.hero;

  return (
    <>
      {/* Section - Inner Page Headline */}
      <div className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
        <div className="mxd-container grid-container">
          <div className="mxd-block loading-wrap">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                
                {/* Left label */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline loading__item">
                    <p className="mxd-point-subtitle">
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6..."
                        />
                      </svg>
                      <span>{data.sectionName}</span>
                    </p>
                  </div>
                </div>

                {/* Headline */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title headline-img-before headline-img-06 loading__item">
                        {data.headlineTitle}
                      </h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Culture & Values Section */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-values loading__fade">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex">

                  {/* Left values list */}
                  <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin animate-card-2">
                    <div className="mxd-values__lists fullheight-xl">
                      <div className="container-fluid p-0 fullheight-xl">
                        <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">

                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              {data.valuesLeftList.map((item, index) => (
                                <li key={index}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="col-12 col-sm-6 col-xl-12 mxd-values__lists-item">
                            <ul>
                              {data.valuesRightList.map((item, index) => (
                                <li key={index}>
                                  <p className="t-small anim-uni-in-up">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left parallax image */}
                  <div className="col-12 col-xl-4 mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin animate-card-2">
                    <BackgroundParallax
                      className="mxd-values__image image-large-desktop image-values-1 parallax-img-small"
                    />
                  </div>

                  {/* Right image + description */}
                  <div className="col-12 col-xl-6 mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin animate-card-2">

                    <BackgroundParallax
                      className="mxd-values__image image-small-desktop image-values-2 parallax-img-small"
                    />

                    <div className="mxd-values__descr has-top-list anim-uni-in-up">
                      <RevealText as="p" className="t-bright t-large reveal-type">
                        {data.description}
                      </RevealText>
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
