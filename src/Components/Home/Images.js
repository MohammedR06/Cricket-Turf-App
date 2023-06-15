import React from "react";
import img1 from "../../assets/images/turf5.jpg";
import img2 from "../../assets/images/turf1.jpg";
import img3 from "../../assets/images/turf2.jpg";
import "./images.css";
function Images() {
  return (
    <div className="conatiner my-5 mx-5">
      <h2 className="text-center my-3 text"> Turf Images</h2>
      <hr className="mb-5" />
      <div className="row col-lg-12">
        <div className="col-lg-4 my-2">
          <div className="box animated bounceInDown">
            <img className="img" src={img1} alt="" height={500} width={500} />
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="box animated bounceInDown">
            <img className="img" src={img2} alt="" height={500} width={500} />
          </div>
        </div>
        <div className="col-lg-4 my-2">
          <div className="box animated bounceInDown">
            <img className="img" src={img3} alt="" height={500} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
