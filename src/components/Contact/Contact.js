import React from "react";
import "../Contact/Contact.scss";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact__container">
          <img
            className="contact__container-logo"
            src={require("../../assets/users.png")}
          ></img>
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
