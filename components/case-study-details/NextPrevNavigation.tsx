import Link from "next/link";
import AnimatedButton from "../animation/AnimatedButton";
import data from "../../data/data.json";

export default function NextPrevNavigation() {
  const navData = data?.caseStudyDetails?.nextPrevNavigation;

  if (!navData) return null;

  const { prev, next } = navData;

  return (
    <div className="mxd-project__block no-margin">
      <div className="mxd-project__nav">
        <div className="mxd-project__divider anim-uni-in-up" />

        <div className="container-fluid p-0">
          <div className="row g-0">
            {/* PREVIOUS */}
            <div className="col-6 mxd-project__navitem left mxd-grid-item no-margin anim-uni-in-up">
              <AnimatedButton
                text={prev?.buttonLabel || "Prev"}
                className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-left"
                href={prev?.url || "#"}
              >
                <i className="ph ph-arrow-left" />
              </AnimatedButton>

              <Link
                className="mxd-project__link anim-uni-in-up"
                href={prev?.url || "#"}
              >
                <span>{prev?.title}</span>
              </Link>
            </div>

            {/* NEXT */}
            <div className="col-6 mxd-project__navitem right mxd-grid-item no-margin anim-uni-in-up">
              <AnimatedButton
                text={next?.buttonLabel || "Next"}
                className="btn btn-anim btn-line-small btn-muted anim-no-delay slide-right"
                href={next?.url || "#"}
              >
                <i className="ph ph-arrow-right" />
              </AnimatedButton>

              <Link
                className="mxd-project__link anim-uni-in-up"
                href={next?.url || "#"}
              >
                <span>{next?.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
