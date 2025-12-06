"use client";

import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import data from "@/data/data.json";

export default function ServicesStack() {
  const services = data?.preview?.servicesStack || [];

  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {services.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "mxd-services-stack__inner justify-between bg-base-opp"
                      : index === 1
                      ? "mxd-services-stack__inner justify-between bg-accent"
                      : index === 2
                      ? "mxd-services-stack__inner radius-dark justify-between bg-base-tint"
                      : "mxd-services-stack__inner justify-between bg-base-opp"
                  }
                >
                  <div className="mxd-services-stack__controls">
                    <Link
                      className={
                        index === 1
                          ? "btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                          : index === 2
                          ? "btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                          : "btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                      }
                      href={item.link}
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>

                  <div className="mxd-services-stack__title width-60">
                    <h3
                      className={index === 2 ? "" : "opposite"}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  </div>

                  <div className="mxd-services-stack__info width-60">
                    <div className="mxd-services-cards__tags">
                      {item.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className={
                            index === 2
                              ? "tag tag-default tag-outline"
                              : "tag tag-default tag-outline-opposite"
                          }
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
                      {item.desc}
                    </p>
                  </div>

                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="Service/Feature Image"
                      src={item.images.small}
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="Service/Feature Image"
                      src={item.images.large}
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
