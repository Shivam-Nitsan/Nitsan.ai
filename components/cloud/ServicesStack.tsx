import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import data from "@/data/data.json";

export default function ServicesStack() {
  const services = data?.cloudPage?.servicesStrack || [];

  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">

              {services.map((s) => (
                <div
                  key={s.id}
                  className={`mxd-services-stack__inner justify-between ${s.bgClass}`}
                >
                  {/* Controls */}
                  <div className="mxd-services-stack__controls">
                    <Link
                      className={`btn btn-round btn-round-large ${s.btnClass} slide-right-up anim-no-delay`}
                      href={`/services`}
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </div>

                  {/* Title */}
                  <div className="mxd-services-stack__title width-60">
                    <h3 className={s.titleClass}>{s.title}</h3>
                  </div>

                  {/* Tags + Description */}
                  <div className="mxd-services-stack__info width-60">
                    <div className="mxd-services-cards__tags">
                      {s.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`tag tag-default ${
                            s.titleClass ? "tag-outline-opposite" : "tag-outline"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className={`t-small-mobile ${s.pClass}`}>
                      {s.description}
                    </p>
                  </div>

                  {/* Images */}
                  <div className="services-stack__image">
                    <Image
                      className="service-img service-img-s"
                      alt="Service Image"
                      src={s.images.small}
                      width={800}
                      height={800}
                    />
                    <Image
                      className="service-img service-img-m"
                      alt="Service Image"
                      src={s.images.medium}
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
