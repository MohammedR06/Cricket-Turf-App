import React from "react";
import whatsappbtn from "../assets/images/whatsapp.png";
import "./whatsapp.css";
import { Link } from "react-router-dom";

function Whatsapp() {
  return (
    <>
      <div className="containerfloat">
        <a href="https://wa.me/+919892558564" target="_blank" rel="noreferrer">
          <img
            src={whatsappbtn}
            alt="/"
            width="50px"
            className="whatsapp_float_btn float"
          />
        </a>
        {/* <div className="text-end">
          <Link to="/booking">
            <button className="button-50" role="button">
              Start Booking Now
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default Whatsapp;
