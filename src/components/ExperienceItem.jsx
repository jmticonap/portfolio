import React from 'react';

const ExperienceItem = ({icon, iconDescription, title, subTitle, timeLap, yearTimeLap}) => {
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
    );
};

export default ExperienceItem;