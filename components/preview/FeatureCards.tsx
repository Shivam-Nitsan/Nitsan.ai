import Image from "next/image";
import data from "@/data/data.json"; // adjust path

export default function FeatureCards() {
  const items = data?.preview?.featureCards || [];

  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-features-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.col} mxd-features-cards__item mxd-grid-item anim-uni-scale-in`}
                  >
                    <div className={`mxd-features-cards__inner ${item.innerClass}`}>

                      {/* GRADIENT IF ENABLED */}
                      {item.gradientEnabled && (
                        <div className="mxd-features-cards__gradient">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                            <style
                              dangerouslySetInnerHTML={{
                                __html: `.mxd-card-bg { fill: url(#${item.gradientId}); }`,
                              }}
                            />

                            <radialGradient
                              id={item.gradientId}
                              cx={600}
                              cy={600}
                              r={600}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" style={{ stopColor: item.gradientColor, stopOpacity: "0.6" }} />
                              <stop offset="1" style={{ stopColor: item.gradientColor, stopOpacity: 0 }} />
                            </radialGradient>

                            <circle className="mxd-card-bg" cx={600} cy={600} r={600} />
                          </svg>
                        </div>
                      )}

                      {/* TITLE */}
                      <div className="mxd-features-cards__title">
                        <h3 className={`${item.titleOpposite ? "opposite" : ""} anim-uni-in-up`}>
                          {item.title}
                        </h3>
                      </div>

                      {/* TAGS */}
                      <div className="mxd-features-cards__info">
                        <div className="mxd-features-cards__tags">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`tag tag-default ${
                                item.tagsOpposite ? "tag-outline-opposite" : "tag-outline"
                              } anim-uni-in-up`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* DESCRIPTION */}
                        <p
                          className={`${item.textBright ? "t-bright" : ""} ${
                            item.descriptionOpposite ? "t-opposite" : ""
                          } anim-uni-in-up`}
                        >
                          {item.description}
                        </p>
                      </div>

                      {/* IMAGE */}
                      {item?.image && (
                        <div className="mxd-features-cards__image">
                          <Image
                            alt={item.image.alt}
                            width={item.image.width}
                            height={item.image.height}
                            src={item.image.src}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* TEASER FIXED */}
                <div className="col-12 mxd-features-cards__teaser mxd-grid-item anim-uni-in-up">
                  <p className="mxd-point-subtitle anim-uni-in-up">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M19.6,9.6..." />
                    </svg>
                    <span>and much more</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M19.6,9.6..." />
                    </svg>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
