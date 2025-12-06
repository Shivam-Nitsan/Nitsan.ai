import RevealText from "../animation/RevealText";
import BackgroundParallax from "../animation/BackgroundParallax";
import data from "../../data/data.json"
export default function Solutions() {
  const {
    sectionName,
    headlineTitle,
    description,
    imageClass,
  } = data?.caseStudyDetails?.solutions;

  return (
    <>
      {/* Project Block - Dynamic Solution Section Start */}
      <div className="mxd-project__block">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            {/* Left Title Section */}
            <div className="col-12 col-xl-5 mxd-grid-item no-margin">
              <div className="mxd-project__subtitle">
                <RevealText as="h2" className="reveal-type anim-uni-in-up">
                  {sectionName}
                </RevealText>

                {headlineTitle?.length > 0 &&
                  headlineTitle.map((text, index) => (
                    <RevealText
                      key={index}
                      as="h3"
                      className="reveal-type anim-uni-in-up"
                    >
                      {text}
                    </RevealText>
                  ))}
              </div>
            </div>

            {/* Right Paragraph Section */}
            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
              <div className="mxd-project__content">
                <div className="mxd-project__paragraph medium-text">
                  {description?.length > 0 &&
                    description.map((paragraph, index) => (
                      <p key={index} className="anim-uni-in-up">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project Block - Dynamic Solution Section End */}

      {/* Parallax Image Dynamic Start */}
      <div className="mxd-project__block mxd-grid-item no-margin">
        <div className="mxd-divider">
          <BackgroundParallax
            scale={1.5}
            className={`mxd-divider__image ${imageClass} parallax-img`}
          />
        </div>
      </div>
      {/* Parallax Image Dynamic End */}
    </>
  );
}
