import React from "react";
import "../Manage/Manage.scss";
import ManagementData from "../../data/ManagementData";
import File from "../../assets/File.svg";
import ChartBar from "../../assets/ChartBar.svg";
import Crown from "../../assets/Crown.svg";
import ChartPieSlice from "../../assets/ChartPieSlice.svg";
import Star from "../../assets/Star.svg";
import FigmaLogo from "../../assets/FigmaLogo.svg";

function Manage() {
  return (
    <>
      <div className="manage">
        <div className="manage__container">
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
                  src={require(`../../assets/${item.imgLink}.svg`)}
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
