import React from "react";
import "../Document/Document.scss";
import borusan from "../../assets/borusan.svg";
import university from "../../assets/university.svg";
import BookMyShowLogo from "../../assets/BookMyShowLogo.svg";
import akbank from "../../assets/akbank.svg";
import tumugor from "../../assets/tumugor.svg";
import akcan from "../../assets/akcan.svg";
import aktas from "../../assets/aktas.svg";
import ola from "../../assets/ola.svg";
import amazon from "../../assets/amazon.svg";

function Document() {
  return (
    <>
      <div className="document">
        <div className="document__container">
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
