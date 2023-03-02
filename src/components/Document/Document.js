import React from "react";
import "../Document/Document.scss";
function Document() {
  return (
    <>
      <div className="document">
        <div className="document__container">
          <div className="document__container-header">Referanslarımız</div>
          <div className="document__container-desc">
            Bize güvenen ve beraber çalıştığımız iş ortaklarımız
          </div>
          <img
            className="document__container-logos--desktop"
            src={require("../../assets/Logos-desktop.png")}
          ></img>
          <img
            className="document__container-logos--mobile"
            src={require("../../assets/Logos-mobile.png")}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Document;
