import React from "react";
import Navbar from "../Partial/Navbar";
import Footer from "../Partial/Footer";
import Slider from "../Components/Home/Slider";
import Whatsapp from "../Partial/Whatsapp";
import Games from "../Components/Home/Games";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Games />
      <Footer />
      <Whatsapp />
    </>
  );
}

export default Home;
