"use client";

import pricing from "@/data/pricing.json";
import data from "@/data/data.json";
import { PricingItem } from "@/types/pricing";

export default function Pricing() {
  const head = data?.preview?.pricingHeadline;

  return (
    <>
      <div className="mxd-section mxd-section-inner-headline padding-headline-pre-grid">
        <div className="mxd-container grid-container">

          <div className="mxd-block ">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* HEADLINE LABEL LEFT */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name name-inner-headline ">
                    <p className="mxd-point-subtitle">

                      {/* SVG REMAINS STATIC */}
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill="currentColor"
                          d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6
                          ..."
                        />
                      </svg>

                      <span>{head?.label}</span>
                    </p>
                  </div>
                </div>

                {/* HEADLINE RIGHT CONTENT */}
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">

                      {/* TITLE */}
                      <h1 className="inner-headline__title headline-img-before headline-img-01">
                        {head?.title}
                      </h1>

                      {/* OPTIONAL DESCRIPTION IF YOU ENABLE IT */}
                      {head?.description && (
                        <p className="inner-headline__text t-large t-bright">
                          {head.description}
                        </p>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Pricing Cards — NO CHANGE */}
      <div className="mxd-section padding-grid-pre-mtext">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-pricing-table ">
              <div className="container-fluid p-0">
                <div className="row g-0">

                  {pricing.map((p: PricingItem, idx: number) => (
                    <div
                      key={idx}
                      className="col-12 col-xl-4 mxd-pricing-table__item mxd-grid-item animate-card-3"
                    >
                      <div className={`mxd-pricing-table__inner ${p.best ? "best-choice" : ""}`}>

                        {p.tag && (
                          <div className="mxd-pricing-table__tag">
                            <span className={`tag ${p.tagClass || ""}`}>{p.tag}</span>
                          </div>
                        )}

                        <div className="mxd-pricing-table__data">
                          <div className="pricing-data__header">
                            {p.title && (
                              <h4 className="pricing-header__title anim-uni-in-up">
                                {p.title}
                              </h4>
                            )}
                            {p.descr && (
                              <p className="pricing-header__descr anim-uni-in-up">
                                {p.descr}
                              </p>
                            )}
                          </div>

                          <div className="pricing-data__info">
                            {p.amount && (
                              <div className="pricing-data__price">
                                <div className="pricing-data__num anim-uni-in-up">
                                  {p.currency && (
                                    <span className="pricing-data__currency">{p.currency}</span>
                                  )}
                                  <span className="pricing-data__amount">{p.amount}</span>
                                  {p.period && (
                                    <span className="pricing-data__period">{p.period}</span>
                                  )}
                                </div>

                                {p.timeline && (
                                  <p className="t-small t-muted t-140 anim-uni-in-up">
                                    {p.timeline}
                                  </p>
                                )}
                              </div>
                            )}

                            <div className="pricing-data__btnholder anim-uni-in-up">
                              <a
                                className="btn btn-anim btn-default btn-opposite btn-fullwidth slide-right-up"
                                href={p.btnHref || "contact.html"}
                              >
                                <span className="btn-caption">{p.btnText || "Start Project"}</span>
                                <i className="ph-bold ph-arrow-up-right" />
                              </a>
                            </div>

                            <div className="pricing-data__divider anim-uni-in-up" />
                          </div>
                        </div>

                        {p.features && (
                          <div className="mxd-pricing-table__plan">
                            <p className="pricing-plan__caption t-semibold t-bright anim-uni-in-up">
                              What's included:
                            </p>
                            <ul className="mxd-check-list">
                              {p.features.map((f, fIdx) => (
                                <li key={fIdx} className="anim-uni-in-up">
                                  <i className="ph ph-check" />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="mxd-pricing-table__link anim-uni-in-up">
                          <a href={p.linkHref || "contact.html"}>
                            {p.linkText || "Need more info? Let's talk."}
                          </a>
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
    </>
  );
}
