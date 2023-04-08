import React from "react";
import "../Header/Header.scss";
import "../../style/scss/global/_global.scss";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container container">
          <div className="burger">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="header__container-navbar">
            <ul>
              <li>Çözüm ve Hizmetler</li>
              <li>Ürünler</li>
              <li>İnsan Kaynakları</li>
              <li>Kurumsal</li>
            </ul>
            <button>İletişim</button>
          </div>
          <div className="header__container-content">
            <h2>Bilgi Teknolojilerinde 23 Yıllık Tecrübe</h2>
            <p>
              Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
              farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
              Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
            </p>
            <form>
              <input placeholder="Mail bültenimize kayıt ol"></input>
              <button>Kayıt Ol</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
