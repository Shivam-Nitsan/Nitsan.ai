import RevealText from "@/components/animation/RevealText";

import experienceData from "@/data/data.json";


export default function Experiences() {
  const data = experienceData?.experiences

  return (
    <div className="mxd-section padding-grid-pre-pinned">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-pinned-universal">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                
                {/* LEFT STATIC SECTION */}
                <div className="col-12 col-xl-5 mxd-pinned-universal__static">
                  <div className="mxd-pinned-universal__static-inner no-margin">
                    
                    {/* Dynamic Section Title */}
                    <div className="mxd-section-title h2-only no-margin-desktop">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12 mxd-grid-item no-margin">
                            <div className="mxd-section-title__title card-split-title">
                              <RevealText as="h2" className="reveal-type">
                               {data.sectionTitle.split(" ").map((word, i) => (
  <span key={i}>
    {word}
    <br />
  </span>
))}

                              </RevealText>
                            </div>

                            {data.sectionSubtitle && (
                              <p className="text-muted mt-2 anim-uni-in-up">
                                {data.sectionSubtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* RIGHT SCROLLABLE LIST */}
                <div className="col-12 col-xl-7 mxd-pinned-universal__scroll">
                  <div className="mxd-pinned-universal__scroll-inner mxd-grid-item no-margin">
                    <div className="mxd-res-list">
                      {data.experiences.map((item, idx) => (
                        <div className="mxd-res-list__item" key={idx}>
                          <div className="mxd-res-list__divider anim-uni-in-up" />

                          <div className="mxd-res-list__content">
                            
                            {/* TEXT CONTENT */}
                            <div className="mxd-res-list__data">
                              <div className="mxd-res-list__title">
                                <h4 className="anim-uni-in-up">{item.role}</h4>
                                <p className="mxd-res-list__source anim-uni-in-up">
                                  in the{" "}
                                  <a href={item.agencyUrl} target="_blank">
                                    {item.agency}
                                  </a>{" "}
                                  agency
                                </p>
                              </div>

                              <div className="mxd-res-list__descr">
                                <p className="anim-uni-in-up">{item.desc}</p>
                              </div>
                            </div>

                            {/* YEAR */}
                            <div className="mxd-res-list__year">
                              <p className="anim-uni-in-up">{item.year}</p>
                            </div>

                          </div>

                          <div className="mxd-res-list__divider anim-uni-in-up" />
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
    </div>
  );
}
