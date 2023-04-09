import React from "react";
import "../Footer/Footer.scss";
import FacebookLogo from "@icons/FacebookLogo.svg";
import TwitterLogo from "@icons/TwitterLogo.svg";
import InstagramLogo from "@icons/InstagramLogo.svg";
import LinkedinLogo from "@icons/LinkedinLogo.svg";
import MediumLogo from "@icons/MediumLogo.svg";
import "@style/_global.scss";
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

const socialMediaLogos = [
  { imgLink: "MediumLogo" },
  { imgLink: "LinkedinLogo" },
  { imgLink: "TwitterLogo" },
  { imgLink: "InstagramLogo" },
  { imgLink: "FacebookLogo" },
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
              {socialMediaLogos.map((item, indes) => (
                <img
                  className="contact-logo"
                  src={require(`../../assets/icons/${item.imgLink}.svg`)}
                ></img>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
