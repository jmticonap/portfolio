import React from "react";
import imgLogoPlano from "../assets/img/jmtp_logo_plano.svg";

const NavigatorBar = () => {
  return (
    <nav className="desktop__nav new-nav">
      <img src={imgLogoPlano} alt="JMTP - logo" />
      {/* <section>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            
            </section> */}
      <div className="nav-btn">
        <a href="#">Home</a>
        <a href="#about">About me</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default NavigatorBar;
