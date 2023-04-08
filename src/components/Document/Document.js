import React from "react";
import "../Document/Document.scss";
import borusan from "../../assets/brandLogos/borusanBrand.svg";
import university from "../../assets/brandLogos/uniBrand.svg";
import BookMyShowLogo from "../../assets/brandLogos/bookBrand.svg";
import akbank from "../../assets/brandLogos/akbankBrand.svg";
import tumugor from "../../assets/brandLogos/tumugorBrand.svg";
import akcan from "../../assets/brandLogos/akcanBrand.svg";
import aktas from "../../assets/brandLogos/aktasBrand.svg";
import ola from "../../assets/brandLogos/olaBrand.svg";
import amazon from "../../assets/brandLogos/amazonBrand.svg";
import "../../assets/style/scss/global/_global.scss";
const socialMediaLogos = [
  {
    col: 1,
    img: ["borusanBrand"],
  },
  {
    col: 2,
    img: ["uniBrand", "bookBrand"],
  },
  {
    col: 3,
    img: ["akbankBrand", "akcanBrand", "tumugorBrand"],
  },
  {
    col: 4,
    img: ["aktasBrand", "olaBrand"],
  },
  {
    col: 5,
    img: ["amazonBrand"],
  },
];
function Document() {
  return (
    <>
      <div className="document">
        <div className="document__container container">
          <div className="document__container-header">Referanslarımız</div>
          <div className="document__container-desc">
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </div>
          <div className="document__container-logos">
            <div className="show-logos">
              {socialMediaLogos.map((logo, index) => (
                <div className="col">
                  {logo.img.map((img, index) => (
                    <div className="logo">
                      <img
                        src={require(`../../assets/brandLogos/${img}.svg`)}
                      ></img>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;
