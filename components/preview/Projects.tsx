"use client";

import Link from "next/link";

import { projects1 } from "@/data/projects.json";
import data from "@/data/data.json";

import RevealText from "@/components/animation/RevealText";
import BackgroundParallax from "@/components/animation/BackgroundParallax";
import AnimatedButton from "@/components/animation/AnimatedButton";

export default function Projects() {
  const text = data?.preview?.projectsPinnedTexts;

  return (
    <div className="mxd-section padding-pre-grid mobile-grid-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pinned-projects">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* LEFT STATIC AREA */}
                <div className="col-12 col-xl-5 mxd-pinned-projects__static">
                  <div className="mxd-pinned-projects__static-inner no-margin">
                    <div className="mxd-section-title no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title">
                              <RevealText as="h2" className="reveal-type">
                                {text?.title}
                              </RevealText>
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__descr">
                              <p
                                className="anim-uni-in-up"
                                dangerouslySetInnerHTML={{ __html: text?.description }}
                              />
                            </div>
                          </div>

                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__controls anim-uni-in-up">
                              <AnimatedButton
                                text={text?.buttonText}
                                href={text?.buttonHref}
                                className="btn btn-anim btn-default btn-outline slide-right-up"
                              >
                                <i className="ph-bold ph-arrow-up-right" />
                              </AnimatedButton>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT PROJECT LIST (unchanged) */}
                <div className="col-12 col-xl-7 mxd-pinned-projects__scroll">
                  <div className="mxd-pinned-projects__scroll-inner mxd-grid-item no-margin">
                    {projects1.slice(0, 5).map((project, index) => (
                      <div key={index} className="mxd-project-item">

                        <Link
                          className={`mxd-project-item__media ${project.anim}`}
                          href={`/project-details`}
                        >
                          <BackgroundParallax
                            className={`mxd-project-item__preview ${project.previewClass} parallax-img-small`}
                          />
                          <div className="mxd-project-item__tags">
                            {project.tags.map((tag, i) => (
                              <span key={i} className="tag tag-default tag-permanent">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>

                        <div className="mxd-project-item__promo">
                          <div className="mxd-project-item__name">
                            <Link className={project.anim} href={`/project-details`}>
                              <span>{project.title}</span> {project.description}
                            </Link>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
