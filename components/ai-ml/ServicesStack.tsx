"use client";

import Link from "next/link";
import Image from "next/image";
import StackCards from "@/components/animation/StackCards";
import data from "@/data/data.json";

export default function ServicesStack() {
  const services = data?.aiml?.servicesStack || [];

  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {services.map((service, index) => (
                <div
                  key={index}
                  className={[
                    "mxd-services-stack__inner",
                    index === 0
                      ? "justify-between bg-base-opp"
                      : index === 1
                      ? "justify-between bg-accent"
                      : index === 2
                      ? "radius-dark justify-between bg-base-tint"
                      : "justify-between bg-base-opp"
                  ].join(" ")}
                >
                  {/* Controls Button (STATIC CSS) */}
                  <div className="mxd-services-stack__controls">
                    <Link
                      className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                      href={service.link}
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>

                  {/* Title (DYNAMIC TEXT) */}
                  <div className="mxd-services-stack__title width-60">
                    <h3
                      className={index === 2 ? "" : "opposite"}
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                  </div>

                  {/* Tags + Description (DYNAMIC CONTENT) */}
                  <div className="mxd-services-stack__info width-60">
                    <div className="mxd-services-cards__tags">
                      {service.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="tag tag-default tag-outline-opposite"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p
                      className={
                        index === 2
                          ? "t-small-mobile"
                          : "t-small-mobile t-opposite"
                      }
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Images (DYNAMIC IMAGES) */}
                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="Service/Feature Image"
                      src={service.images.small}
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="Service/Feature Image"
                      src={service.images.large}
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              ))}

            </StackCards>
          </div>
        </div>
      </div>
    </div>
  );
}
