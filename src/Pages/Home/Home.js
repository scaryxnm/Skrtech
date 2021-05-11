import "../../App.css";
import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
