import React from "react";
import "./footer.css";
import logo from "../assets/images/LOGO-M-WEB.gif";
function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start">
        <section className="d-flex justify-content-between p-4 text-white social">
          <div className="me-5 txt">
            <span className="text-dark">Get connected with us:</span>
          </div>
          <div className="d-flex icon">
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f" style={{ color: "black" }}></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google" style={{ color: "black" }}></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram" style={{ color: "black" }}></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={logo} className="logo" alt="" />
                <h6 className="text-uppercase fw-bold">Masti Cricket</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  {/* Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. */}
                </p>
              </div>

              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="/" className="text-dark">
                    Apple
                  </a>
                </p>
                <p>
                  <a href="/products/b&o" className="text-dark">
                    B&O
                  </a>
                </p>
                <p>
                  <a href="/products/rollingSquare" className="text-dark">
                    Rolling Square
                  </a>
                </p>
                <p>
                  <a href="/products/keychron" className="text-dark">
                    Keychron
                  </a>
                </p>
              </div> */}

              <div className="col-md-4 col-lg-4 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p>
                  <a href="/" className="text-dark ">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/products" className="text-dark">
                    About Us{" "}
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-dark">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  //   style="width: 60px; background-color: #7c4dff; height: 2px"
                />
                <p style={{ color: "black" }}>
                  <i
                    className="fas fa-home mr-3"
                    style={{ color: "black" }}
                  ></i>{" "}
                  Ahemdabad
                </p>
                <p>
                  <a href="emailstring" style={{ color: "black" }}>
                    <i className="fas fa-envelope mr-3"></i>{" "}
                    masticricket@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    className=""
                    style={{ color: "black" }}
                    href="tel:+9189806000052"
                  >
                    <i
                      className="fas fa-phone mr-3"
                      style={{ color: "black" }}
                    ></i>
                    +91 89806000052
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 copyright">
          © Masti Cricket 2023 Copyright
        </div>
      </footer>
    </>
  );
}

export default Footer;
