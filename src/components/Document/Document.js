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
import "../../style/scss/global/_global.scss";
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
              {/* col1 */}
              <div className="col">
                <div className="logo">
                  <img src={borusan}></img>
                </div>
              </div>
              {/* col2 */}
              <div className="col">
                <div className="logo">
                  <img src={university}></img>
                </div>
                <div className="logo">
                  <img src={BookMyShowLogo}></img>
                </div>
              </div>
              {/* col3 */}
              <div className="col">
                <div className="logo">
                  <img src={akbank}></img>
                </div>
                <div className="logo">
                  <img src={akcan}></img>
                </div>
                <div className="logo">
                  <img src={tumugor}></img>
                </div>
              </div>
              {/* col4 */}
              <div className="col">
                <div className="logo">
                  <img src={aktas}></img>
                </div>
                <div className="logo">
                  <img src={ola}></img>
                </div>
              </div>
              {/* col5 */}
              <div className="col">
                <div className="logo">
                  <img src={amazon}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Document;
