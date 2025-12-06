"use client";

import Image from "next/image";
import VelocityMarquee from "@/components/animation/VelocityMarquee";
import data from "@/data/data.json";
import { type Techstack } from "@/types/techStack";

export default function Techstack() {
  const techstack: Techstack[] = data?.techstack || [];

  return (
    <div className="mxd-section padding-grid-pre-pinned">
      <div className="mxd-container fullwidth-container">
        {/* Block - Tech Stack Marquee One Line Start */}
        <div className="mxd-block">
          <VelocityMarquee className="marquee marquee-right--gsap">
            <div className="marquee__toright">
              
              {techstack.map((t: Techstack, idx: number) => (
                <div key={idx} className="marquee__item one-line item-regular">
                  <div className="mxd-tech-stack-cards__item">
                    <div className="mxd-tech-stack-cards__inner-v3">
                      
                      <div className="mxd-tech-stack-cards__icon">
                        <Image
                          alt="Tech Stack Icon"
                          src={t.icon}
                          width={120}
                          height={90}
                        />
                      </div>

                      <div className="mxd-tech-stack-cards__title">
                        <p className="t-bright t-caption">{t.name}</p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          </VelocityMarquee>
        </div>
        {/* Block - Tech Stack Marquee One Line End */}
      </div>
    </div>
  );
}
