import Link from "next/link";
import Image from "next/image";
import AnimatedButton from "@/components/animation/AnimatedButton";
import data from "@/data/data.json";

export default function Teammembers() {
  const section = data?.teamPage?.teamSection;

  // Split team members for layout like original (2 + 2)
  const firstRow = section.teamMembers.slice(0, 2);
  const secondRow = section.teamMembers.slice(2, 4);

  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Team Full Start */}
        <div className="mxd-block">
          <div className="mxd-team-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {/* Section Title */}
                <div className="col-12 col-xl-4 mxd-team-cards__item mxd-grid-item no-margin no-padding-bottom animate-card-3">
                  <div className="mxd-team-cards__h2-block left-block">
                    <div className="mxd-section-title pre-grid">
                      <div className="container-fluid p-0">
                        <div className="row g-0">
                          <div className="col-12">
                            <div className="mxd-section-title__title">
                              <h2 className="reveal-type">{section.title}</h2>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="mxd-section-title__descr">
                              <p className="anim-uni-in-up">{section.description}</p>
                            </div>
                          </div>
                          <div className="col-12">
                            {section.button && (
                              <div className="mxd-section-title__controls anim-uni-in-up">
                                <AnimatedButton
                                  className={section.button.class}
                                  text={section.button.text}
                                  href={section.button.href}
                                >
                                  {section.button.iconClass && (
                                    <i className={section.button.iconClass} />
                                  )}
                                </AnimatedButton>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Cards Rows */}
                {[firstRow, secondRow].map((row, rowIndex) => (
                  <div className="col-12 col-xl-8" key={rowIndex}>
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        {row.map((member) => (
                          <div key={member.id} className={member.layout.classes}>
                            <div className="mxd-team-cards__media anim-uni-in-up">
                              <div className="mxd-team-cards__photo">
                                <Image
                                  alt={member.image.alt}
                                  width={member.image.width}
                                  height={member.image.height}
                                  src={member.image.src}
                                />
                              </div>
                              <div className="mxd-team-cards__socials">
                                {member.socials.map((social, index) => (
                                  <AnimatedButton
                                    key={index}
                                    className="btn btn-anim tag tag-default tag-permanent"
                                    as={"a"}
                                    text={social.name}
                                    href={social.url}
                                    target="_blank"
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="mxd-team-cards__info">
                              <p className="mxd-team-cards__name t-large t-bright t-caption">
                                {member.name}
                              </p>
                              <p className="mxd-team-cards__position t-small t-medium t-140">
                                {member.position}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Career Block */}
                {section.careerBlock && (
                  <div className={section.careerBlock.layoutClasses}>
                    <div className="mxd-team-cards__media no-margin overflow-visible anim-uni-in-up">
                      <Link href={section.careerBlock.href} className="mxd-team-cards__career">
                        <div className="career__image">
                          <Image
                            alt={section.careerBlock.image.alt}
                            width={section.careerBlock.image.width}
                            height={section.careerBlock.image.height}
                            src={section.careerBlock.image.src}
                          />
                        </div>
                        <div className="career__caption">
                          <p className="mxd-team-cards__name t-large t-bright t-caption">
                            {section.careerBlock.title}
                          </p>
                          <p className="mxd-team-cards__position t-small t-medium t-140">
                            {section.careerBlock.subtitle}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Team Full End */}
      </div>
    </div>
  );
}
