"use client";

import Image from "next/image";
import data from "@/data/data.json";

export default function Partners() {
  const partners = data?.preview?.partners || [];

  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          <div className="mxd-partners-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">

                {partners.map((p, idx) => (
                  <div
                    key={idx}
                    className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4"
                  >
                    <a className="mxd-partners-cards__inner" href="#">
                      <div className="mxd-partners-cards__logo">
                        <Image
                          alt="Partner Logo"
                          src={p.src}
                          width={
                            idx === 0 ? 984 :
                            idx === 1 ? 700 :
                            idx === 2 ? 2499 :
                            idx === 3 ? 917 :
                            idx === 4 ? 223 :
                            idx === 5 ? 631 :
                            idx === 6 ? 700 :
                            idx === 7 ? 2854 : 500
                          }
                          height={
                            idx === 0 ? 235 :
                            idx === 1 ? 169 :
                            idx === 2 ? 464 :
                            idx === 3 ? 258 :
                            idx === 4 ? 34 :
                            idx === 5 ? 237 :
                            idx === 6 ? 169 :
                            idx === 7 ? 1199 : 200
                          }
                        />
                      </div>
                    </a>
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
