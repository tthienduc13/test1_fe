import React from "react";
import "../Header/Header.scss";
import "@style/_global.scss";
const navbarItem = [
  { name: "Çözüm ve Hizmetler" },
  { name: "Ürünler" },
  { name: "İnsan Kaynakları" },
  { name: "Kurumsal" },
];
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
              {navbarItem.map((item, index) => (
                <li>{item.name}</li>
              ))}
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
