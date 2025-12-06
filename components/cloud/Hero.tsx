import AnimatedButton from "@/components/animation/AnimatedButton";
import AnimateRotation from "@/components/animation/AnimateRotation";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Image from "next/image";
import data from "@/data/data.json";

export default function Hero() {
  const hero = data?.cloudPage?.heroData;

  return (
    <div className="mxd-section">
      <div className="mxd-hero-06">
        <div className="mxd-hero-06__wrap loading-wrap">
          <div className="mxd-hero-06__top">
            <div className="mxd-hero-06__content">

              {/* Video */}
              <div className="mxd-hero-06__video">
                <video
                  className="video"
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  poster={hero.video.poster}
                >
                  <source type="video/mp4" src={hero.video.mp4} />
                  <source type="video/webm" src={hero.video.webm} />
                  <source type="video/ogv" src={hero.video.ogv} />
                </video>
                <div className="hero-06-video__cover" />
              </div>

              {/* Main Data */}
              <div className="mxd-hero-06__data">

                {/* Lists */}
                <div className="mxd-hero-06__list">
                  <div className="mxd-paragraph__lists">
                    <div className="container-fluid p-0">
                      <div className="row g-0">

                        {hero.lists.map((list, index) => (
                          <div key={index} className="col-6 col-lg-4 col-xl-2 loading__item">
                            <ul>
                              {list.items.map((item, i) => (
                                <li key={i}>
                                  <p className="t-small">{item}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>

                {/* Headline Description + Rotating Button */}
                <div className="mxd-hero-06__headline">
                  <div className="hero-06-headline__descr">
                    <p className="loading__item">{hero.headlineDescription}</p>

                    <div className="hero-06-headline__btn loading__item">
                      <a className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop" href="#">
                        <AnimateRotation
                          as="svg"
                          version="1.1"
                          id="scrollDown"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 160 160"
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
                                {hero.downloadButtonText}
                              </textPath>
                            </text>
                          </g>
                        </AnimateRotation>

                        <Image
                          className="btn-rotating__image"
                          alt="Object"
                          src={hero.downloadButtonImage}
                          width={300}
                          height={300}
                        />
                      </a>
                    </div>
                  </div>

                  {/* Headline Title */}
                  <div className="hero-06-headline__content">
                    <h1 className="hero-06-headline__title">
                      {hero.title}
                    </h1>

                    {/* Marquee */}
                    <div className="mxd-hero-06__marquee loading__item">
                      <VelocityMarquee className="marquee marquee-right--gsap permanent-desktop">
                        {hero.marquee.map((item, index) => (
                          <div key={index} className="marquee__item one-line item-regular text">
                            <p className="marquee__text">{item}</p>

                            <div className="marquee__image">
                              {/* the SVG icon (same for all items) */}
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 80 80"
                                fill="currentColor"
                              >
                                <path d="M78.4,38.4c0,0-11.8,0-15.8,0..." />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </VelocityMarquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="mxd-hero-06__bottom loading__fade">
            <div className="mxd-hero-06__mark">
              <div className="mxd-hero__mark">
                <span className="mark-icon" />
                <span className="mark-text">{hero.markText}</span>
              </div>
            </div>

            <div className="mxd-hero-06__more">
              <AnimatedButton
                text={hero.scrollButton.text}
                as="a"
                className="btn btn-line-medium btn-anim btn-anim-medium slide-down"
                href={hero.scrollButton.href}
              >
                <i className="ph-bold ph-arrow-elbow-right-down" />
              </AnimatedButton>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="mxd-hero-06__btn-mobile">
            <a className="btn-rotating btn-rotating-blur-outline ver-04 permanent-desktop" href="#">
              <AnimateRotation
                as="svg"
                version="1.1"
                viewBox="0 0 160 160"
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
                    <textPath xlinkHref="#textPath">{hero.downloadButtonText}</textPath>
                  </text>
                </g>
              </AnimateRotation>

              <Image
                className="btn-rotating__image"
                alt="Object"
                src={hero.downloadButtonImage}
                width={300}
                height={300}
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
