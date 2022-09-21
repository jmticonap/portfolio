import React from 'react';
import './css/Experience.css'
import ExperienceItem from './ExperienceItem';

import iconDetourmap from '../assets/img/detourmaps_icon.svg'

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2 className="experience__h1">Experience</h2>
            <ExperienceItem 
                icon={iconDetourmap} 
                iconDescription='DetourMAPS - logo' 
                title='detourMAPS' 
                subTitle='Full-stack developer' 
                timeLap='2012 - 2013' 
                yearTimeLap='1 year' />

        </section>
    );
};

export default Experience;