import React from 'react';
import '../css/Experience.css'

export const Experience = (props) => {
    return (
        <section id="experience" className="experience">
            <h2 className="experience__h1">Experience</h2>
            { props.children }
        </section>
    )
}

export const ExperienceItem = ({
    icon, 
    iconDescription, 
    title, 
    subTitle, 
    timeLap, 
    yearTimeLap}) => {
    return (
        <div className="experience__card">
            <img src={icon} alt={iconDescription} />
            <div className="experience__card__data">
                <h4>{title}</h4>
                <h6>{subTitle}</h6>
                <small>{timeLap}</small>
            </div>
            <h4>{yearTimeLap}</h4>
        </div>
    )
}