import React from 'react';
import imgLogoPlano from '../assets/img/jmtp_logo_plano.svg'

const NavigatorBar = () => {
    return (
        <nav className="desktop__nav">
            <img src={imgLogoPlano} alt="JMTP - logo" />
            <section>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <input id="input_toggle" type="checkbox" />
                <label htmlFor="input_toggle" id="btn_toggle">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </label>
            </section>
        </nav>
    );
};

export default NavigatorBar;