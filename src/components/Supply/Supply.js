import React from "react";
import "../Supply/Supply.scss";
function Supply() {
  return (
    <>
      <div className="supply">
        <div className="supply__container">
          <div className="supply__container-header">
            Test Yönetimiyle Neler Sağlıyoruz?
          </div>
          <div className="supply__container-desc">IoT Destekli Çözümler</div>
          <div className="supply__container-content">
            <div className="content-desc">Yazılım Kalitesini Arttırıyoruz</div>
            <img
              className="next-icon"
              src={require("../../assets/next.png")}
            ></img>
            <div className="content-desc">
              Olası Hataları Önceden Belirliyoruz
            </div>
            <img
              className="next-icon"
              src={require("../../assets/next.png")}
            ></img>
            <div className="content-desc">Oluşabilecek Riskleri Önlüyoruz</div>
            <img
              className="next-icon"
              src={require("../../assets/next.png")}
            ></img>
            <div className="content-desc">
              Zaman ve Maliyetten Tasarruf Sağlıyoruz
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supply;
