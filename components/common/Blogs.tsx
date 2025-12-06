"use client";
import Link from "next/link";
import Image from "next/image";
import data from "@/data/data.json";
import RevealText from "../animation/RevealText";
import BackgroundParallax from "../animation/BackgroundParallax";
import AnimatedButton from "../animation/AnimatedButton";

// ✅ add this type
type BlogsProps = {
  title?: string;
  desc?: string;
};

// ✅ accept props here
export default function Blogs({ title, desc }: BlogsProps) {
  const section = data?.teamPage?.blog?.section;
  const blogs = data?.teamPage?.blog?.blogs ?? [];

  // ✅ use props if provided, otherwise fallback to JSON data
  const sectionTitle = title ?? section?.title ?? "";
  const sectionDesc = desc ?? section?.desc ?? "";

  return (
    <div className="mxd-section padding-blog">
      <div className="mxd-container grid-container">
        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <RevealText as="h2" className="reveal-type anim-uni-in-up">
                      {/* 🔁 use sectionTitle */}
                      {sectionTitle}
                    </RevealText>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    {/* 🔁 use sectionDesc */}
                    <p className="anim-uni-in-up">{sectionDesc}</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    {section?.button && (
                      <AnimatedButton
                        text={section.button.text}
                        className={section.button.class}
                        href={section.button.href}
                      >
                        {section.button.iconClass && (
                          <i className={section.button.iconClass} />
                        )}
                      </AnimatedButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {blogs.map((item: any) => (
                  <div
                    key={item.id}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3"
                  >
                    <Link
                      className="mxd-blog-preview__media"
                      href={item.link}
                    >
                      <BackgroundParallax
                        className={`mxd-blog-preview__image ${item.imageClass} parallax-img-small`}
                      />
                      <div className="mxd-preview-hover">
                        <i className="mxd-preview-hover__icon">
                          <Image
                            alt="Eye Icon"
                            src="/img/icons/icon-eye.svg"
                            width={38}
                            height={21}
                          />
                        </i>
                      </div>
                      <div className="mxd-blog-preview__tags">
                        {item.tags?.map((tag: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="tag tag-default tag-permanent"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    <div className="mxd-blog-preview__data">
                      <Link className="anim-uni-in-up" href={item.link}>
                        {item.title.before ?? ""}{" "}
                        {item.title.highlight ? (
                          <span>{item.title.highlight}</span>
                        ) : null}{" "}
                        {item.title.after ?? ""}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
