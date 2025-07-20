import React from "react";
import "./TrustedBy.css";

const TrustedBy = () => {
  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsWefAqk4VP679TtSolAVEA4K_Xsy1Ll_Wg&s",
    "https://www.agency21.com.pk/images/agency_new_logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnmdb4g_VgYWUYANLRBUV4pBRaHIfTg_K0A&s",
    "https://news-cdn.zameen.com/wp-content/uploads/2020/01/Zameen-Logo-1.jpg",
    "https://s.rozee.pk/company_logos/92/29099949788220.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zk83xpDNe1yoaQhHUYOzwZAGnit1lJJmsg&s",
    "https://media.licdn.com/dms/image/v2/D560BAQHWOmA7JWri-g/company-logo_200_200/company-logo_200_200/0/1692250340718/square_nine_international_logo?e=2147483647&v=beta&t=Nmdk71OH84KJvEq0HALgjNkj9qrkuOCaswvGB86vDC4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6Iz06L5S-AuYJAWZy-cMWn-LEZlWmoy9Yw&s",
  ];

  return (
    <div className="trusted-by-container">
      <h3>Trusted by Industry Leaders</h3>
      <div className="trusted-by-marquee">
        <div className="trusted-by-marquee-inner">
          {logos.map((logo, index) => (
            <div className="trusted-by-logo" key={index}>
              <img src={logo} alt={`Trusted company ${index + 1}`} />
            </div>
          ))}
          {/* Duplicate for seamless looping */}
          {logos.map((logo, index) => (
            <div className="trusted-by-logo" key={`dup-${index}`}>
              <img src={logo} alt={`Trusted company ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
