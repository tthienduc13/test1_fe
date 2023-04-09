import React from "react";
import "../Manage/Manage.scss";
import ManagementData from "../../data/ManagementData";
import File from "@icons/File.svg";
import ChartBar from "@icons/ChartBar.svg";
import Crown from "@icons/Crown.svg";
import ChartPieSlice from "@icons/ChartPieSlice.svg";
import Star from "@icons/Star.svg";
import FigmaLogo from "@icons/FigmaLogo.svg";
import "@style/_global.scss";
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
                  src={require(`@icons/${item.imgLink}.svg`)}
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
