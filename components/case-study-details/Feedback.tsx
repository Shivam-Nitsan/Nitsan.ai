import RevealText from "../animation/RevealText";
import data from "../../data/data.json";

export default function Feedback() {
  const feedbackData = data?.caseStudyDetails?.feedback;

  if (!feedbackData) return null;

  const {
    sectionName,
    feedbackText,
    clientName,
    clientPosition,
    clientCompany,
    clientCompanyLink,
  } = feedbackData;

  return (
    <div className="mxd-project__block">
      <div className="container-fluid px-0">
        <div className="row gx-0">
          {/* Left Title */}
          <div className="col-12 col-xl-5 mxd-grid-item no-margin">
            <div className="mxd-project__subtitle">
              <RevealText as="h2" className="reveal-type anim-uni-in-up">
                {sectionName?.line1}
                <br />
                {sectionName?.line2}
              </RevealText>
            </div>
          </div>

          {/* Right Feedback */}
          <div className="col-12 col-xl-6 mxd-grid-item no-margin">
            <div className="mxd-project__content">
              <div className="mxd-project__paragraph medium-text">
                <p className="anim-uni-in-up">{feedbackText}</p>

                <div className="mxd-project__client anim-uni-in-up">
                  <h5 className="anim-uni-in-up">{clientName}</h5>
                  <p className="t-small anim-uni-in-up">
                    {clientPosition} in{" "}
                    <a className="" href={clientCompanyLink} target="_blank">
                      {clientCompany}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
