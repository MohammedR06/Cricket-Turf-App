import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import Slider from "../Components/Home/Slider";
import Whatsapp from "../Partial/Whatsapp";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default Home;
