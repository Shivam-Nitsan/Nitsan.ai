import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";
import data from "../../data/data.json"
export default function Cta() {
  const cta = data?.preview?.cta || {}
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container">
        {/* Block - Demo CTA Start */}
        <div className="mxd-block">
          <div className="mxd-demo-cta">
            <div className="mxd-demo-cta__caption anim-uni-in-up">
              <RevealText as="h2" className="h2-small reveal-type">
                {cta.title}
              </RevealText>
            </div>

            <div className="mxd-demo-cta__btn anim-uni-in-up">
              <AnimatedButton
                text={cta.buttonText}
                as={"a"}
                className="btn btn-anim btn-default btn-large btn-additional slide-right"
                href={cta.buttonLink}
                target="_blank"
              >
                <i className={cta.buttonIcon} />
              </AnimatedButton>
            </div>
          </div>
        </div>
        {/* Block - Demo CTA End */}
      </div>
    </div>
  );
}
