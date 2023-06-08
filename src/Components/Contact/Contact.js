import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <section>
      <div id="container">
        <h1>DON'T HESITATE TO CONTACT US</h1>
        <div id="row">
          <div id="form">
            <form>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  className="name"
                  pattern="\d+"
                  placeholder="Full Name"
                  formControlName="name"
                />
                <input
                  type="text"
                  name="email"
                  className="email"
                  pattern="\d+"
                  placeholder="E-mail Adress"
                  formControlName="email"
                />
              </div>
              <input
                type="text"
                name="subject"
                className="subject"
                pattern="\d+"
                placeholder="Subject"
                formControlName="subject"
              />
              <textarea
                placeholder="Message"
                type="text"
                name="message"
                className="text-area"
                pattern="\d+"
                formControlName="message"
              ></textarea>
              <br />
              <button>Send Message</button>
            </form>
          </div>
          <div className="info">
            <div className="address">
              <h4>Address</h4>
              <p>
                Masti Box Cricket
                <br />
                Riverfront road between jamalpur to danilimda <br />
                Ahmedabad - IND
              </p>
            </div>
            <hr />
            <div className="contact">
              <h4>Contact Info</h4>
              <p>
                <i
                  className="fas fa-envelope mr-3"
                  style={{ color: "black" }}
                ></i>{" "}
                <a
                  href="mailto:mastiboxcricket@gmail.com"
                  style={{ color: "black" }}
                >
                  {" "}
                  mastiboxcricket@gmail.com
                </a>
                <br />
                <a className="text-dark" href="tel:+971508065253">
                  <i
                    className="fas fa-phone mr-3"
                    style={{ color: "black" }}
                  ></i>
                  +91 89806000052
                </a>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
