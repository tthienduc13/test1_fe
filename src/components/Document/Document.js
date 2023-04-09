import React from "react";
import "../Document/Document.scss";
import borusan from "@brandLogos/borusanBrand.svg";
import university from "@brandLogos/uniBrand.svg";
import BookMyShowLogo from "@brandLogos/bookBrand.svg";
import akbank from "@brandLogos/akbankBrand.svg";
import tumugor from "@brandLogos/tumugorBrand.svg";
import akcan from "@brandLogos/akcanBrand.svg";
import aktas from "@brandLogos/aktasBrand.svg";
import ola from "@brandLogos/olaBrand.svg";
import amazon from "@brandLogos/amazonBrand.svg";
import "@style/_global.scss";
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
                      <img src={require(`@brandLogos/${img}.svg`)}></img>
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
