import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import "./bookingForm.css";

function BookingForm() {
  window.onload = function disablePastDate() {
    //from ww  w . j  a  va2s. c  o  m
    var today = new Date().toISOString().split("T")[0];
    document.getElementsByName("setTodaysDate")[0].setAttribute("min", today);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>Booking Portal</h2>
        <form>
          <div className="booking-box mx-5 my-3">
            <div className="row mb-4 col-lg-12 mx-3 mt-3 justify-content-center">
              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                    placeholder="Example: Rahul"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    className="form-control"
                    placeholder="Example: Shah"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-4 col-lg-12 mx-3 mt-3 justify-content-center">
              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="123-45-678"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Sport
                  </label>
                  <select
                    class="select"
                    id="form6Example2"
                    className="form-control"
                  >
                    <option value="1">Cricket</option>
                    <option value="2">Football</option>
                    <option value="3">PickleBall</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mb-4 col-lg-12 mx-3 mt-3 justify-content-center">
              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    Date Field
                  </label>
                  <input
                    type="date"
                    id="inputdate"
                    className="form-control"
                    name="setTodaysDate"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Time Slot
                  </label>
                  <select
                    class="select"
                    id="form6Example2"
                    className="form-control"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                    <option value="7">Seven</option>
                    <option value="8">Eight</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-end">
              <button>Book Now</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BookingForm;
