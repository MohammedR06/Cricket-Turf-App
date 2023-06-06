import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import ContactUs from "../Components/Contact/Contact";
import Whatsapp from "../Partial/Whatsapp";

function Contact() {
  return (
    <>
      <Navbar />
      <ContactUs />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Contact;
