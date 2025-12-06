"use client";

import AnimatedButton from "../animation/AnimatedButton";
import data from "@/data/data.json";

export default function DetailsHero() {
  const {
    button,
    title,
    description,
    dataList,
    tags
  } = data?.caseStudyDetails?.hero;

  return (
    <div className="mxd-section mxd-section-inner-headline padding-default">
      <div className="mxd-container grid-container">
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              {/* Left Button */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-project-link loading__fade">
                  <AnimatedButton
                    text={button.text}
                    as="a"
                    className={button.class}
                    href={button.href}
                  >
                    {button.iconClass && <i className={button.iconClass}></i>}
                  </AnimatedButton>
                </div>
              </div>

              {/* Title */}
              <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">
                    <h1 className="inner-headline__title">{title}</h1>
                  </div>
                </div>
              </div>

              <div className="col-12" />

              {/* Description + Data */}
              <div className="row g-0">
                <div className="col-12 col-xl-2" />

                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  {/* Description */}
                  <div className="inner-headline__paragraph loading__item">
                    <p>{description}</p>
                  </div>

                  {/* Data List */}
                  <div className="inner-headline__data">
                    <div className="mxd-data-list">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          {dataList.map((item, index) => (
                            <div
                              key={index}
                              className="col-12 col-md-6 col-xl-5 mxd-data-list__column loading__item"
                            >
                              <div className="mxd-data-list__item">
                                <p className="mxd-data-list__name">{item.name}</p>
                                <p className="mxd-data-list__content">{item.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="inner-headline__tags loading__fade">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="tag tag-default tag-outline-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* END Description + Data */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
