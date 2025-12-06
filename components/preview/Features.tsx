import Image from "next/image";
import RevealText from "../animation/RevealText";
import data from "../../data/data.json"
export default function Features() {

const features = data.preview?.PreviewFeature1 || {};


  return (
    <div className="mxd-section">
      <div className="mxd-container no-padding-container">
        <div className="mxd-block">
          <div className="mxd-resp-promo">
            <div className="container-fluid p-0">
              <div className="row g-0">

                {/* Left Side */}
                <div className="col-12 col-xl-6 mxd-resp-promo__item">
                  <div className="mxd-container grid-container">
                    <div className="mxd-block mxd-grid-item no-margin">
                      <div className="mxd-resp-promo__content">

                        <div className="mxd-resp-promo__manifest anim-uni-in-up">
                          <RevealText as="p" className="reveal-type">
                            {features?.description}
                          </RevealText>
                        </div>

                        {/* Dynamic Device Icons */}
                        <div className="mxd-demo-cards__icons justify-start-desktop">
                          {features?.devices?.map((device, index) => (
                            <div className="demo-icons__item animate-card-4" key={index}>
                              <div className="demo-icons__icon transparent">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
                                  <path d="M54.8,28c0,10.6-2.8,26.8-26.8,26.8S1.2,38.6,1.2,28,4,1.2,28,1.2s26.8,16.2,26.8,26.8Z" />
                                </svg>
                                <i className={`ph ${device.icon}`} />
                              </div>

                              <p className="demo-icons__caption">{device.label}</p>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side Image Dynamic */}
                <div className="col-12 col-xl-6 mxd-resp-promo__item">
                  <div className="mxd-resp-promo__image anim-uni-in-up">
                    <Image
                      alt="Rayo Image"
                      width={1200}
                      height={767}
                      src={features?.image}
                    />
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
