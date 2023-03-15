import React from "react";
import "../Footer/Footer.scss";
import FacebookLogo from "../../assets/FacebookLogo.svg";
import TwitterLogo from "../../assets/TwitterLogo.svg";
import InstagramLogo from "../../assets/InstagramLogo.svg";
import LinkedinLogo from "../../assets/LinkedinLogo.svg";
import MediumLogo from "../../assets/MediumLogo.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container-row1">
            <div className="row1__item">
              <div className="row1__item-header">Çözüm ve Hizmetler</div>
              <p className="row1__item-desc">Yazılım Geliştirme</p>
              <p className="row1__item-desc">Outsourcing</p>
              <p className="row1__item-desc">Kalite ve Süreç Yönetimi</p>
              <p className="row1__item-desc">Danışmanlık</p>
              <p className="row1__item-desc">IoT Destekli Çözümler</p>
            </div>
            <div className="row1__item">
              <div className="row1__item-header">Ürünler</div>
              <p className="row1__item-desc">Eğitim Yönetim Sistemi</p>
              <p className="row1__item-desc">İnsan Sermayesi Yönetim Sistemi</p>
              <p className="row1__item-desc">
                Müşteri İlişkileri Yönetim Sistemi
              </p>
              <p className="row1__item-desc">İçerik Yönetim Sistemi</p>
            </div>
            <div className="row1__item">
              <div className="row1__item-header">Kurumsal</div>
              <p className="row1__item-desc">Hakkımızda</p>
              <p className="row1__item-desc">Belge ve Yetkinlikler</p>
              <p className="row1__item-desc">İş Ortakları</p>
            </div>
            <div className="row1__item">
              <div className="row1__item-header">İletişim</div>
              <p className="row1__item-desc">Bilgi İstek Formu</p>
              <p className="row1__item-desc">Uzman Talep Formu</p>
            </div>
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
