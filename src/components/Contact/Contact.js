import React from "react";
import "../Contact/Contact.scss";
import Users from "../../assets/Users.svg";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact__container">
          <div className="contact__container-logo">
            <img src={Users}></img>
            <div></div>
          </div>
          <div className="contact__container-header">Bize Ulaşın</div>
          <div className="contact__container-desc">
            Çözüm, hizmet ve ürünlerimiz hakkında detaylı bilgi için bizimle
            irtibata geçin.
          </div>
          <button className="contact__container-button">Bize Ulaşın</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
