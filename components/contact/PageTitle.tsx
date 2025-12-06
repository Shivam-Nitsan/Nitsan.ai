"use client";

import data from "@/data/data.json";

export default function PageTitle() {
  const pageTitleData = data?.contactUs?.pageTitleData;

  // Destructure for cleaner mapping
  const {
    sectionName,
    headlineTitle,
    email,
    emailSubject,
    description
  } = pageTitleData;

  return (
    <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
      <div className="mxd-container grid-container">
        
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">

              {/* Left Title */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-inner-headline">
                  <p className="mxd-point-subtitle">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6..." />
                    </svg>
                    <span>{sectionName}</span>
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline loading__item">

                    {/* Dynamic Headline */}
                    <h1 className="inner-headline__title">
                      {headlineTitle?.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== headlineTitle.length - 1 && <br />}
                        </span>
                      ))}
                    </h1>

                    {/* Email Button */}
                    <a
                      className="btn btn-line-headline slide-right-up anim-no-delay"
                      href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}`}
                    >
                      <span className="btn-caption">{email}</span>
                      <i className="ph-bold ph-arrow-up-right" />
                    </a>

                    {/* Description */}
                    <p className="inner-headline__text t-large t-bright loading__item">
                      {description}
                    </p>

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
