"use client";

import data from "@/data/data.json";

export default function Locations() {
  const locationData = data?.contactUs?.locations || { sectionTitle: "", description: "", offices: [] };

  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0">
              <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                <div className="mxd-block__name">
                  <h2 className="reveal-type anim-uni-in-up">
                    {locationData.sectionTitle}
                  </h2>
                </div>
              </div>
              <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__paragraph">
                    <p className="t-large t-bright anim-uni-in-up">
                      {locationData.description}
                    </p>
                    <div className="mxd-paragraph__lists">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          {locationData.offices.map((office, idx) => (
                            <div
                              key={idx}
                              className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item"
                            >
                              <div className="mxd-paragraph__lists-title">
                                <p className="t-large t-bright t-caption anim-uni-in-up">
                                  {office.name}
                                </p>
                              </div>
                              <ul>
                                <li className="anim-uni-in-up">
                                  <a
                                    className="anim-uni-in-up"
                                    href={office.mapLink}
                                    target="_blank"
                                  >
                                    {office.address.split(",").map((line, i) => (
                                      <span key={i}>
                                        {line}
                                        <br />
                                      </span>
                                    ))}
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li className="anim-uni-in-up">
                                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                                </li>
                                <li className="anim-uni-in-up">
                                  <a
                                    href={`mailto:${office.email}?subject=Message%20from%20your%20site`}
                                  >
                                    {office.email}
                                  </a>
                                </li>
                              </ul>
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
        {/* Block - Text Block with H2 Title, Paragraph and Contact Lists End */}
      </div>
    </div>
  );
}
