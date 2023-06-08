import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import Slider from "../Components/Home/Slider";
import Whatsapp from "../Partial/Whatsapp";
import Images from "../Components/Home/Images";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Images />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default Home;
