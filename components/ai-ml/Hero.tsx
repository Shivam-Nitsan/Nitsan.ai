"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VideoModalButton from "@/components/common/VideoModalButton";
import data from "@/data/data.json";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = data.aiml.hero;

  const fadeOutRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scaleOutRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    fadeOutRefs.current.forEach((el) => {
      if (!el) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".mxd-hero-08__tl-trigger",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        })
        .fromTo(
          el,
          { transform: "translate3d(0, 0, 0)", opacity: 1 },
          { transform: "translate3d(0, -5rem, 0)", opacity: 0 }
        );
    });

    scaleOutRefs.current.forEach((el) => {
      if (!el) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".mxd-hero-08__tl-trigger",
            start: "top 40%",
            end: "top 10%",
            scrub: true,
          },
        })
        .fromTo(
          el,
          { transform: "translate3d(0, 0, 0)", scaleY: 1, opacity: 1 },
          { transform: "translate3d(0, -5rem, 0)", scaleY: 1.2, opacity: 0 }
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="mxd-section">
      <div className="mxd-hero-08">
        <div className="mxd-hero-08__wrap loading-wrap">
          <div className="mxd-hero-08__center">
            <div className="mxd-hero-08__headline">
              <div className="mxd-container">
                <div className="hero-08-headline__image">
                  <Image
                    className="mxd-rotate-slow"
                    alt={hero.image.alt}
                    src={hero.image.src}
                    width={hero.image.width}
                    height={hero.image.height}
                  />
                </div>

                <div
                  className="hero-08-headline__title hero-08-slide-out-scroll loading__item"
                  ref={(el: HTMLDivElement | null) => {
                    fadeOutRefs.current[0] = el;
                  }}
                >
                  <h1>{hero.title}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-hero-08__bottom">
            <div
              className="mxd-hero-08__data-wrap hero-08-scale-out-scroll"
              ref={(el: HTMLDivElement | null) => {
                scaleOutRefs.current[1] = el;
              }}
            >
              <div className="mxd-hero__mark loading__item">
                <span className="mark-icon" />
                <span className="mark-text">{hero.bottomBadge}</span>
              </div>

              <div className="mxd-hero-08__descr loading__item">
                <p className="t-large t-bright t-medium t-120">
                  {hero.description}
                </p>
              </div>
            </div>

            <div
              className="mxd-hero-08__video-wrap hero-08-scale-out-scroll loading__item"
              ref={(el: HTMLDivElement | null) => {
                scaleOutRefs.current[0] = el;
              }}
            >
              <video
                className="mxd-hero-08__video"
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

              <div className="mxd-hero-08__video-btn">
                <VideoModalButton
                  videoSrc={hero.video.modal}
                  iconClassName="ph-fill ph-play"
                  buttonClassName="btn btn-round btn-round-medium btn-accent slide-right anim-no-delay showreel-trigger"
                />
              </div>
            </div>
          </div>

          <div className="mxd-hero-08__tl-trigger" />
        </div>
      </div>
    </div>
  );
}
