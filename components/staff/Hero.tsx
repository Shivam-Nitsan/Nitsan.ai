"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import Counter from "@/components/common/Counter";
import AnimatedButton from "@/components/animation/AnimatedButton";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

// Import JSON data directly
import datas from "@/data/data.json";

gsap.registerPlugin(ScrollTrigger);

type MarqueeItem = { text: string; svg: string };
type CounterItem = { id: string; max: number; label: string };
type ScrollButton = { text: string; href: string; iconClass: string };

interface HeroData {
  heroTitle: string;
  marqueeItems: MarqueeItem[];
  heroImage: string;
  counters: CounterItem[];
  description: string;
  tagsLeft: string[];
  tagsRight: string[];
  scrollButton: ScrollButton;
  freelanceText: string;
}

export default function Hero() {
  const data: HeroData = datas?.staffPage?.Hero; // directly use JSON
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const trigger = ".mxd-hero-07__tl-trigger";

      gsap.utils.toArray<HTMLElement>(".hero-07-slide-out-scroll").forEach((el) => {
        gsap.timeline({
          scrollTrigger: { trigger, start: "top 86%", end: "top 10%", scrub: true }
        }).fromTo(el, { y: 0, scaleY: 1 }, { y: "-26rem", scaleY: 0.8, ease: "power4.out" });
      });

      gsap.utils.toArray<HTMLElement>(".hero-07-fade-out-scroll").forEach((el) => {
        gsap.timeline({
          scrollTrigger: { trigger, start: "top 70%", end: "top 40%", scrub: true }
        }).fromTo(el, { opacity: 1, y: 0 }, { opacity: 0, y: "-10rem", ease: "elastic.out(1,0.3)" });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div className="mxd-section" ref={rootRef}>
      <div className="mxd-hero-07">
        <div className="mxd-hero-07__wrap loading-wrap">
          {/* Top */}
          <div className="mxd-hero-07__top">
            <h1 className="mxd-hero-07__title">{data.heroTitle}</h1>
            <div className="mxd-hero-07__marquee loading__item">
              <VelocityMarquee className="marquee marquee-right--gsap bright">
                {data.marqueeItems.map((item, index) => (
                  <div key={index} className="marquee__item one-line item-regular text">
                    <p className="marquee__text">{item.text}</p>
                    <div className="marquee__image">
                      <Image src={item.svg} alt={item.text} width={80} height={80} />
                    </div>
                  </div>
                ))}
              </VelocityMarquee>
            </div>
          </div>

          {/* Bottom */}
          <div className="mxd-hero-07__bottom">
            <div className="mxd-hero-07__circle">
              <div className="hero-07-circle__image hero-07-slide-out-scroll loading__item">
                <Image alt="Hero Image" src={data.heroImage} width={1400} height={1400} />
              </div>

              <div className="hero-07-circle__container hero-07-fade-out-scroll">
                <div className="hero-07-circle__item item-01 loading__item">
                  <div className="mxd-hero__mark">
                    <span className="mark-icon" />
                    <span className="mark-text">{data.freelanceText}</span>
                  </div>
                </div>
              </div>

              <div className="hero-07-circle__container mobile-row hero-07-fade-out-scroll">
                {data.counters.map((counter, index) => (
                  <div key={index} className={`hero-07-circle__item item-0${index + 2} loading__item`}>
                    <div className="mxd-counter small">
                      <p id={counter.id} className="mxd-counter__number mxd-stats-number small">
                        <Counter max={counter.max} />+
                      </p>
                      <p className="mxd-counter__descr t-140 t-bright t-small">{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="mxd-hero-07__info loading__fade">
              <div className="hero-07-info__container">
                <div className="hero-07-info__descr">
                  <p className="t-large t-medium t-140 t-bright">
                    {data.description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
                <div className="hero-07-info__tags">
                  {data.tagsLeft.map((tag, i) => (
                    <span key={i} className="tag tag-default tag-outline-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hero-07-info__container">
                <div className="hero-07-info__tags right-align-desktop">
                  {data.tagsRight.map((tag, i) => (
                    <span key={i} className="tag tag-default tag-outline-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Button */}
          <div className="mxd-hero-07__more loading__fade">
            <AnimatedButton
              text={data.scrollButton.text}
              as="a"
              className="btn btn-line-default btn-anim slide-down"
              href={data.scrollButton.href}
            >
              <i className={data.scrollButton.iconClass} />
            </AnimatedButton>
          </div>

          {/* Trigger */}
          <div className="mxd-hero-07__tl-trigger" />
        </div>
      </div>
    </div>
  );
}
