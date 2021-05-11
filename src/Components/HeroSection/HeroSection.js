import React from "react";
import "../../App.css";
import Button from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Хамгийн хялбар үйлчилгээ</h1>
      <p>Unleash Best </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Бүртгүүлэх & Нэвтрэх
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Бидний тухай <i class="fas fa-city" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
