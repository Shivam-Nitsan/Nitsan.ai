import Link from "next/link";
import Image from "next/image";
import factsData from "@/data/data.json";
import Counter from "@/components/common/Counter";
import AnimatedButton from "../animation/AnimatedButton";
import React from "react";
import data from "../../data/data.json"
export default function Facts() {

  const factData = data?.facts
  return (
    <div className="mxd-section padding-grid-pre-mtext overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-stats-cards">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {factsData.facts.map((item, idx) => (
                  <div className={item.colClass} key={idx}>
                    <div className={item.cardClass}>

                      {/* Avatars (Dynamic) */}
                      {item.avatars && (
                        <div className="mxd-stats-cards__btngroup">
                          <div className="mxd-avatars">

                            {item.avatars.map((avatar, aIdx) => (
                              avatar.svg ? (
                                <div
                                  className="mxd-avatars__item bg-base-opp"
                                  key={aIdx}
                                >
                                  {/* Dynamic SVG Avatar */}
                                  <svg
                                    className="mxd-avatars__icon"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="60"
                                    height="60"
                                    viewBox="0 0 60 60"
                                  >
                                    <style
                                      dangerouslySetInnerHTML={{
                                        __html: `
                                          .icon-star {
                                            fill: var(--additional);
                                          }
                                        `
                                      }}
                                    />
                                    <path
                                      className="icon-star"
                                      d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5..."
                                    />
                                  </svg>
                                </div>
                              ) : (
                                <div className="mxd-avatars__item" key={aIdx}>
                                          <Image
            alt={avatar.alt ?? "Avatar"}
            src={avatar.src ?? "/img/default-avatar.png"} 
            width={avatar.width ?? 60}
            height={avatar.height ?? 60}
          />

                                </div>
                              )
                            ))}

                          </div>
                        </div>
                      )}

                      {/* Counter + Description */}
                      <div
                        className={
                          item.counterId.includes("2")
                            ? "mxd-counter align-end"
                            : "mxd-counter"
                        }
                      >
                        <p id={item.counterId} className={item.numberClass}>
                          <Counter
                            max={item.number}
                            parentClass={item.numberClass}
                          />
                          {item.suffix}
                        </p>

                        <p className={item.descrClass}>
                          {item.description.split("\n").map((line, i, arr) => (
                            <React.Fragment key={i}>
                              {line}
                              {i !== arr.length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>

                      {/* Button (Optional) */}
                      {item.button && (
                        <div className="mxd-stats-cards__btngroup">
                          <AnimatedButton
                            text={item.button.text}
                            className={item.button.btnClass}
                            href={item.button.href}
                          >
                            <i className={item.button.iconClass} />
                          </AnimatedButton>
                        </div>
                      )}

                      {/* Image */}
                      <div className={item.imageClass}>
                        <Image
                          alt="Illustration"
                          src={item.image}
                          width={item.imageWidth}
                          height={item.imageHeight}
                        />
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
