import Link from "next/link";
import Image from "next/image";
import StackCards from "@/components/animation/StackCards";

import data from "@/data/data.json";

export default function ServicesStack() {
  const services = data?.aboutUs?.services
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`mxd-services-stack__inner justify-between ${service.bgClass}`}
                >
                  {/* Button */}
                  <div className="mxd-services-stack__controls">
                    <Link
                      className={service.buttonClass}
                      href="/services"
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>

                  {/* Title */}
                  <div className="mxd-services-stack__title width-60">
                    <h3
                      className={service.titleClass || ""}
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                  </div>

                  {/* Info Content */}
                  <div className="mxd-services-stack__info width-60">
                    {/* Tags */}
                    <div className="mxd-services-cards__tags">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={service.tagClass}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className={service.descClass}>
                      {service.description}
                    </p>
                  </div>

                  {/* Images */}
                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="Service/Feature Image"
                      src={service.imageSmall}
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="Service/Feature Image"
                      src={service.imageLarge}
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
