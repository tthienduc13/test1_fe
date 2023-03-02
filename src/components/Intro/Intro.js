import React from "react";
import "../Intro/Intro.scss";
function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro__container">
          {/* row1 */}
          <div className="intro__container-content">
            <div className="intro__container-content-desc">
              <div className="content-header">Kalite ve Süreç Yönetimi</div>
              <div className="content-desc">
                Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP®
                sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır.
                Projelerinizin yönetimine destek olmak, zayıf olduğunu
                düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği
                olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek
                için yanınızdayız.
              </div>
              <button className="content-btn">Keşfet</button>
            </div>
            <div className="intro__container-content-img">
              <img src={require("../../assets/intro1.png")}></img>
            </div>
          </div>
          {/* row2 */}
          <div className="intro__container-content">
            <div className="intro__container-content-img">
              <img src={require("../../assets/intro3.png")}></img>
            </div>
            <div className="intro__container-content-img">
              <img src={require("../../assets/intro2.png")}></img>
            </div>
            <div className="intro__container-content-desc">
              <div className="content-header">Test Yönetimi ve Analizi</div>
              <div className="content-desc">
                Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını
                önlemek amacıyla gerçekleştirdiğimiz testleri her proje
                aşamasında manuel ya da test otomasyonu ile dikkatle
                uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek
                kalitede yazılım testleri hizmeti ile baştan sona güvenli,
                kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.
              </div>
              <button className="content-btn">Keşfet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
