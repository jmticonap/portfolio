import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { Experience, ExperienceItem } from './components/Experience'
import { Projects, ProjectItem } from './components/Projects'

import iconDetourmap from './assets/img/detourmaps_icon.svg'

import appDb from './assets/db/appDb'

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
        { name: 'SQL', level: 'Profesional' },
        { name: 'Git', level: 'Profesional' },
        { name: 'DB Modelling', level: 'Profesional' }
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
                <Skills skillsData={appDb.skills} />
                <Projects>
                    {
                        appDb.projects.map((project, i) => (
                            <ProjectItem key={`prject_${i}`}
                                image={project.image}
                                alt={project.name}
                                name={project.name}
                                url={project.url}
                                repo={project.repo} />
                        ))
                    }
                </Projects>
                <Contact />
            </main>
            <Footer /> 
        </div>
    )
}

export default App
