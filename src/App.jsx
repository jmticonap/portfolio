import React, { useState } from 'react'
import './App.css'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import { Experience, ExperienceItem } from './components/Experience'
import Skills from './components/Skills'
import { Projects, ProjectItem } from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
                    
                    {/* <ProjectItem
                        image={appDb.projects[0].image}
                        alt={appDb.projects[0].name}
                        name={appDb.projects[0].name}
                        url={appDb.projects[0].url} />
                    <ProjectItem
                        image={imgPokedex}
                        alt='Pokedex Web client'
                        name='Pokedex Web client'
                        url='https://euphonious-beijinho-981c50.netlify.app/' />
                    <ProjectItem
                        image={imgRickAndMorty}
                        alt='Rick & Morty App Client'
                        name='Rick & Morty App client'
                        url='https://classy-raindrop-f73165.netlify.app/' />
                    <ProjectItem
                        image={imgProductStore}
                        alt='Product store Rest API'
                        name='Product store Rest API'
                        url='https://jmtpproductstore.herokuapp.com/' />
                    <ProjectItem
                        image={img1}
                        alt='img1'
                        name='E-commerce'
                        url='https://jmticonap.github.io/jmtp-ecommerce.github.io/' />
                    <ProjectItem
                        image={imgWeatherApp}
                        alt='Simple weather app'
                        name='Simple Weather App'
                        url='https://polite-sable-e21494.netlify.app/' />
                    <ProjectItem
                        image={imgUserCRUD}
                        alt='User CRUD App'
                        name='User CRUD App'
                        url='https://user-crud-delta.vercel.app/' /> */}

                </Projects>
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
