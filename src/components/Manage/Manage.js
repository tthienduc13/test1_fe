import React from "react";
import "../Manage/Manage.scss";
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
            {/* 1 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/file.jpg")}
              ></img>
              <p className="item-name">Döküman Analizi</p>
              <p className="item-desc">
                Ante vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
            {/* 2 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/star.jpg")}
              ></img>
              <p className="item-name">Kabul ve Değerlendirme</p>
              <p className="item-desc">
                Ante vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
            {/* 3 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/crown.jpg")}
              ></img>
              <p className="item-name">İş Kuralları Analizi</p>
              <p className="item-desc">
                AAnte vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
            {/* 4 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/ChartBar.jpg")}
              ></img>
              <p className="item-name">Akış Diyagramları</p>
              <p className="item-desc">
                AAnte vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
            {/* 5 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/ChartPieSlice.jpg")}
              ></img>
              <p className="item-name">Paydaş Analizi</p>
              <p className="item-desc">
                AAnte vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
            {/* 6 */}
            <div className="content-item">
              <img
                className="item-img"
                src={require("../../assets/FigmaLogo.jpg")}
              ></img>
              <p className="item-name">Prototipleme</p>
              <p className="item-desc">
                AAnte vulputate ut at accumsan et. Feugiat at tempus, est
                senectus amet, elementum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
