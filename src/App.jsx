import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import { Experience, ExperienceItem } from './components/Experience'
import Skills from './components/Skills'
import { Projects, ProjectItem } from './components/Projects'
import img1 from './assets/img/eCommerce.png'
import imgRickAndMorty from './assets/img/rick_and_morty.png'
import imgProductStore from './assets/img/produc_store_api.png'
import imgWeatherApp from './assets/img/weather_app.png'
import imgUserCRUD from './assets/img/user_crud.png'

import iconDetourmap from './assets/img/detourmaps_icon.svg'


function App() {
    const skillsData = [
        { name: 'HTML', level: 'Profesional' },
        { name: 'CSS', level: 'Profesional' },
        { name: 'JavaScript', level: 'Profesional' },
        { name: 'React.JS', level: 'Middle' },
        { name: 'Java Core', level: 'Middle' },
        { name: 'Spring Boot', level: 'Middle' },
        { name: 'Python', level: 'Profesional' },
        { name: 'Django Project', level: 'Middle' },
        { name: 'SQL', level: 'Profesioanl' },
        { name: 'Git', level: 'Profesioanl' },
        { name: 'DB Modelling', level: 'Profesioanl' }
    ]

    return (
        <div className="App">

            <Header
                name='Juan Manuel Ticona Pacheco'
                linkedinPath='https://www.linkedin.com/in/juan-ticona-pe/'
                githubPath='https://github.com/jmticonap'
                email='jm.ticona.p@gmail.com' />
            <main>
                <AboutMe />
                <Experience>
                    <ExperienceItem
                        icon={iconDetourmap}
                        iconDescription='DetourMAPS - logo'
                        title='detourMAPS'
                        subTitle='Full-stack developer'
                        timeLap='2012 - 2013'
                        yearTimeLap='1 year' />
                </Experience>
                <Skills skillsData={skillsData} />
                <Projects>
                    <ProjectItem
                        image={img1}
                        alt='img1'
                        name='E-commerce' />
                    <ProjectItem
                        image={imgRickAndMorty}
                        alt='Rick & Morty App Client'
                        name='Rick & Morty App client' />
                    <ProjectItem
                        image={imgProductStore}
                        alt='Product store Rest API'
                        name='Product store Rest API' />
                    <ProjectItem
                        image={imgWeatherApp}
                        alt='Simple weather app'
                        name='Simple Weather App' />
                    <ProjectItem
                        image={imgUserCRUD}
                        alt='User CRUD App'
                        name='User CRUD App' />
                </Projects>
            </main>
        </div>
    )
}

export default App
