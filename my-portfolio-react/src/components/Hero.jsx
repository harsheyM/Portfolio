import React, { useState } from "react";
import "./Hero.css";

function Hero({ onExplore }) {
  return (
    <section className="hero full-screen">
      <div className="hero-content">
        <h1>Harshitha Mahesh</h1>
        <p>Web Developer | Analyst | Student</p>
        <button id="scrollDownBtn" onClick={onExplore}>
          Explore ↓
        </button>
      </div>
    </section>
  );
}

export default Hero;
