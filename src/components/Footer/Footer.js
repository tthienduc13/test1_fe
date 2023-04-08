import React from "react";
import "../Footer/Footer.scss";
import FacebookLogo from "../../assets/icons/FacebookLogo.svg";
import TwitterLogo from "../../assets/icons/TwitterLogo.svg";
import InstagramLogo from "../../assets/icons/InstagramLogo.svg";
import LinkedinLogo from "../../assets/icons/LinkedinLogo.svg";
import MediumLogo from "../../assets/icons/MediumLogo.svg";
import "../../style/scss/global/_global.scss";
const items = [
  {
    header: "Çözüm ve Hizmetler",
    descriptions: [
      "Yazılım Geliştirme",
      "Outsourcing",
      "Kalite ve Süreç Yönetimi",
      "Danışmanlık",
      "IoT Destekli Çözümler",
    ],
  },
  {
    header: "Ürünler",
    descriptions: [
      "Eğitim Yönetim Sistemi",
      "İnsan Sermayesi Yönetim Sistemi",
      "Müşteri İlişkileri Yönetim Sistemi",
      "İçerik Yönetim Sistemi",
    ],
  },
  {
    header: "Kurumsal",
    descriptions: ["Hakkımızda", "Belge ve Yetkinlikler", "İş Ortakları"],
  },
  {
    header: "İletişim",
    descriptions: ["Bilgi İstek Formu", "Uzman Talep Formu"],
  },
];

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container container">
          <div className="footer__container-row1">
            {items.map((item, index) => (
              <div key={index} className="row1__item">
                <div className="row1__item-header">{item.header}</div>
                {item.descriptions.map((description, index) => (
                  <p key={index} className="row1__item-desc">
                    {description}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="footer__container-row2">
            <div className="copyright">© Copyright 2010-2021 - Can Çevik</div>
            <div className="contact">
              <img className="contact-logo" src={MediumLogo}></img>
              <img className="contact-logo" src={LinkedinLogo}></img>
              <img className="contact-logo" src={TwitterLogo}></img>
              <img className="contact-logo" src={InstagramLogo}></img>
              <img className="contact-logo" src={FacebookLogo}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
