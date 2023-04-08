import React from "react";
import "../Manage/Manage.scss";
import ManagementData from "../../data/ManagementData";
import File from "../../assets/icons/File.svg";
import ChartBar from "../../assets/icons/ChartBar.svg";
import Crown from "../../assets/icons/Crown.svg";
import ChartPieSlice from "../../assets/icons/ChartPieSlice.svg";
import Star from "../../assets/icons/Star.svg";
import FigmaLogo from "../../assets/icons/FigmaLogo.svg";
import "../../style/scss/global/_global.scss";
function Manage() {
  return (
    <>
      <div className="manage">
        <div className="manage__container container">
          <div className="manage__container-header">
            Kalite ve Süreç Yönetimi
          </div>
          <div className="manage__container-desc">
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
          </div>
          <div className="manage__container-content">
            {ManagementData.map((item, index) => (
              <div className="content-item">
                <img
                  className="item-img"
                  src={require(`../../assets/icons/${item.imgLink}.svg`)}
                ></img>
                <p className="item-name">{item.name}</p>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
