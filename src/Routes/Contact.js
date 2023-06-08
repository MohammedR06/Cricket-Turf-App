import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import ContactUs from "../Components/Contact/Contact";
import Whatsapp from "../Partial/Whatsapp";
import Map from "../Components/Contact/Map";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Whatsapp />
      <Map />
      <Footer />
    </>
  );
}

export default Contact;
