import Link from "next/link";
import Image from "next/image";

import StackCards from "../animation/StackCards";
import data from "@/data/data.json";

export default function CaseStudy1() {
  const section = data?.projects?.projects10?.caseStudyStack;
  const projects10 = section?.projects10;

  if (!section || !projects10) return null;

  return (
    <>
      {/* Section - Projects Stacking Cards Start */}
      <div className="mxd-section padding-stacked-section">
        <div className="mxd-container grid-container">

          <div className="mxd-block mxd-grid-item no-margin">
            <div className="content__block loading__fade">
              
              {/* Stacking Cards wrapper dynamic */}
              <StackCards
                stackName={section.stackName}
                className="stack-wrapper"
              >
                {projects10.map((project) => (
                  <Link
                    key={project.id}
                    className="mxd-projects-stack__inner justify-between"
                    href={project.link}
                  >
                    {/* Image */}
                    <div className="mxd-projects-stack__image">
                      <Image
                        alt={project.title}
                        src={project.image}
                        width={1920}
                        height={1080}
                      />
                    </div>

                    {/* Tags */}
                    <div className="mxd-projects-stack__tags">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="tag tag-default tag-outline-permanent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <div className="mxd-projects-stack__title no-margin">
                      <h2 className="permanent-light">{project.title}</h2>
                    </div>
                  </Link>
                ))}
              </StackCards>

            </div>
          </div>
        </div>
      </div>
      {/* Section - Projects Stacking Cards End */}
    </>
  );
}
