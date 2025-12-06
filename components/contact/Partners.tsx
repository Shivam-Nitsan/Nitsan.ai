"use client";

import Image from "next/image";
import data from "@/data/data.json";

export default function Partners() {
  const partners = data?.contactUs?.partners || [];

  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container grid-container">
        {/* Block - Partners Cards Start */}
        <div className="mxd-block">
          <div className="mxd-partners-cards">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4"
                  >
                    <a
                      className="mxd-partners-cards__inner"
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mxd-partners-cards__logo">
                        <Image
                          alt={partner.name}
                          src={partner.logo}
                          width={partner.width}
                          height={partner.height}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Partners Cards End */}
      </div>
    </div>
  );
}
