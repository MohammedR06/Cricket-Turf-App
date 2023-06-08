import React from "react";
import img from "../../assets/images/images1.png";
import "./images.css";
function Images() {
  return (
    <div className="conatiner my-5 mx-5">
      <h2 className="text-center my-3 text">Cricket Turf Images</h2>
      <hr className="mb-5" />
      <div className="row col-lg-12">
        <div className="col-lg-4">
          <div className="box">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
