import React from "react";
import "./slider.css";

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="img d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1679917489462-460aed6990b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            className="img d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1679917489462-460aed6990b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sss"
          />
        </div>
        <div className="carousel-item">
          <img
            className="img d-block w-100"
            src="https://plus.unsplash.com/premium_photo-1679917489462-460aed6990b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JpY2tldHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sss"
          />
        </div>
      </div>
      {/* <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button> */}
      {/* <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}

export default Slider;
