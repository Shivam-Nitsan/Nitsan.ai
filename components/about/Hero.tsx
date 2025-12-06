import TypedText from "@/components/common/TypedText";
import aboutData from "@/data/data.json";

export default function Hero() {
  const data = aboutData?.aboutUs?.hero;

  return (
    <div className="mxd-section mxd-section-inner-headline padding-text-pre-block">
      <div className="mxd-container grid-container">
        
        <div className="mxd-block loading-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0">

              {/* LEFT SIDE TAG */}
              <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                <div className="mxd-block__name name-inner-headline loading__item">
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
                    <span>{data.sectionTag}</span>
                  </p>
                </div>
              </div>

              {/* TYPED TEXT + DESCRIPTION */}
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__inner-headline">

                    <h1 className="inner-headline__title animated-type loading__item">
                      <TypedText strings={data.typedTexts} />
                    </h1>

                    <p className="inner-headline__text t-large t-bright loading__item">
                      {data.titlePrefixEmoji} {data.description}
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
