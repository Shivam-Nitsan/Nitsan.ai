"use client";

import Link from "next/link";
import Image from "next/image";

import AnimatedButton from "@/components/animation/AnimatedButton";
import data from "@/data/data.json";

export default function Hero() {
  const hero = data?.product?.hero05;

  return (
    <div className="mxd-section mxd-hero-section padding-grid-pre-mtext">
      <div className="mxd-hero-05">
        <div className="mxd-hero-05__wrap loading-wrap">
          <div className="mxd-hero-05__top">
            <div className="mxd-hero-05__headline">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column flex-xl-row">

                  {/* LEFT TITLE */}
                  <div className="col-12 col-xl-8 col-xxl-10 order-2 order-xl-1 mxd-grid-item no-margin">
                    <h1 className="hero-05-title">

                      {hero?.titleRows?.map((row, i) => (
                        <span key={i} className="hero-05-title__row loading__item">
                          {row.map((part, j) => (
                            <em
                              key={j}
                              className={
                                j === 1 && i === 1
                                  ? "hero-05-title__item"
                                  : "hero-05-title__item"
                              }
                              dangerouslySetInnerHTML={{ __html: part }}
                            />
                          ))}
                        </span>
                      ))}

                    </h1>
                  </div>

                  {/* RIGHT AVATARS */}
                  <div className="col-12 col-xl-4 col-xxl-2 order-1 order-xl-2 mxd-grid-item no-margin">
                    <div className="hero-05-headline__avatars loading__fade">
                      <div className="mxd-avatars-group align-right">
                        <div className="mxd-avatars align-right">
                          
                          <div className="mxd-avatars__item small">
                            <Image
                              alt="Avatar"
                              src={hero?.avatars?.left}
                              width={300}
                              height={300}
                            />
                          </div>

                          {/* Star Icon (STATIC — DO NOT TOUCH) */}
                          <div className="mxd-avatars__item small bg-base-opp">
                            <svg
                              className="mxd-avatars__icon small"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="60px"
                              height="60px"
                              viewBox="0 0 60 60"
                            >
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html: `
                                    .icon-star { fill: var(--additional); }
                                  `
                                }}
                              />
                              <path
                                className="icon-star"
                                d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7..."
                              />
                            </svg>
                          </div>

                          <div className="mxd-avatars__item small">
                            <Image
                              alt="Avatar"
                              src={hero?.avatars?.right}
                              width={300}
                              height={300}
                            />
                          </div>

                        </div>

                        <div className="mxd-avatars-group__text">
                          <p>
                            Trusted by
                            <br />
                            <a href="#">{hero?.avatars?.customersText}</a>
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mxd-hero-05__bottom mxd-grid-item no-margin">

            {/* WORKS BLOCK */}
            <div className="mxd-hero-05__worksblock loading__item">
              <Image
                className="mxd-move"
                alt="Hero image"
                src={hero?.worksBlock?.image}
                width={800}
                height={800}
              />
              <div className="hero-05-worksblock__descr">
                <p className="t-large t-caption t-bright">
                  {hero?.worksBlock?.caption}
                </p>
                <AnimatedButton
                  text={hero?.worksBlock?.buttonText}
                  className="btn btn-anim btn-default btn-outline slide-right-up"
                  href={hero?.worksBlock?.buttonHref}
                >
                  <i className="ph-bold ph-arrow-up-right" />
                </AnimatedButton>
              </div>
            </div>

            {/* VIDEO BLOCK */}
            <div className="mxd-hero-05__videoblock loading__item">
              <div className="mxd-hero-05-videoblock__video">
                <video
                  preload="auto"
                  autoPlay
                  loop
                  muted
                  poster={hero?.videoBlock?.poster}
                >
                  <source type="video/mp4" src={hero?.videoBlock?.mp4} />
                  <source type="video/webm" src={hero?.videoBlock?.webm} />
                  <source type="video/ogv" src={hero?.videoBlock?.ogv} />
                </video>
              </div>
              <div className="mxd-hero-05-videoblock__descr">
                <p className="t-large t-caption t-bright">
                  {hero?.videoBlock?.caption}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
