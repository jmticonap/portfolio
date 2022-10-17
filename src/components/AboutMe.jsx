import React from 'react';
import './css/AboutMe.css'
import iconAcademlo from '../assets/img/logo_academlo 5.png'
import iconFreecodecamp from '../assets/img/freecodecamp_logo.svg'

const AboutMe = () => {
    return (
        <section id="about" className="about">
            <h2 className="about__h1">About me</h2>
            <p className="about__p">
                I'm a full-stack developer width 1 year,
                I'm a Web full-stack developer with knowledge in; HTML5, 
                CSS3, JavaScript, React.JS, Java, Spring Boot, Python, Django, 
                PostgreSQL. I think programming is the tool for give solutions 
                and help client to improve methods in it's work flow. I'm a fast
                learnner who can demostrate in the variety of tecnologies
                that I use on my personal projects.
            </p>
            <article className="about-studies">
                <div className="about-studies__itm">
                    <img className="about-studies__icon" src={iconFreecodecamp} alt="FreeCodeCamp - Logo" />
                    <h4 className="about-studies__title">FreeCodeCamp</h4>
                    <p>2022</p>
                </div>
                <div className="about-studies__itm">
                    <img className="about-studies__icon" src={iconAcademlo} alt="Academlo - Logo" />
                    <h4 className="about-studies__title">Academlo</h4>
                    <p>2022 - today</p>
                </div>


            </article>
        </section>
    )
}

export default AboutMe;