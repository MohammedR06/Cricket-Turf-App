import React from "react";
import whatsappbtn from "../assets/images/whatsapp.png";
import "./whatsapp.css";

function Whatsapp() {
  return (
    <div className="containerfloat">
      <a href="https://wa.me/+919892558564" target="_blank" rel="noreferrer">
        <img
          src={whatsappbtn}
          alt="/"
          width="50px"
          className="whatsapp_float_btn float"
        />
      </a>
    </div>
  );
}

export default Whatsapp;
