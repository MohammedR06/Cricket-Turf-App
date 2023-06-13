import React from "react";
import img1 from "../../assets/images/turf1.jpg";
import "./games.css";

function Games() {
  return (
    <>
      <div className="text-center my-5">
        <span className="text-center txt1">
          Sports We <span className="text-dark">Play Here</span>{" "}
        </span>
      </div>

      <div className="container row col-lg-12 my-5 justify-content-center ">
        <div className="col-lg-6 img-box img1">
          <img src={img1} alt="" height={350} width={600} />
        </div>
        <div className="col-lg-6 ">
          <h2 className="ms-5 text-center">
            <u>Cricket</u>
          </h2>

          <p className="ms-5 text-dark" style={{ fontWeight: 500 }}>
            Playing cricket on a turf ground offers a unique and thrilling
            experience for both players and spectators. Turf grounds are known
            for their well-maintained, lush green surfaces, which provide a
            consistent bounce and pace for the ball. Here's some information
            about playing cricket on a turf ground:
          </p>
          <ul>
            <li className="ms-5">Pitch Quality</li>
            <li className="ms-5">Ball Behavior</li>
            <li className="ms-5">Fielding Conditions</li>
            <li className="ms-5">Pitch Maintenance</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container row col-lg-12 my-5 mt-4 mb-5 justify-content-center ">
        <div className="col-lg-6 ">
          <h2 className=" text-center">
            <u>Football</u>
          </h2>

          <p className=" text-dark" style={{ fontWeight: 500 }}>
            Playing football on a turf ground provides a dynamic and fast-paced
            experience for players. Turf grounds, also known as artificial or
            synthetic turf, offer several advantages over natural grass fields.
            Here's some information about playing football on a turf ground:
          </p>
          <ul>
            <li className="">Consistent Playing Surface</li>
            <li className="">All-Weather Playability</li>
            <li className="">Speed and Ball Control</li>
            <li className="">Reduced Injury Risk</li>
            <li className="">Lower Maintenance</li>
          </ul>
        </div>
        <div className="col-lg-6 img-box img1 ">
          <img className="ms-5" src={img1} alt="" height={350} width={600} />
        </div>
      </div>
    </>
  );
}

export default Games;
