import React from 'react';
import './css/Skills.css'

const Skills = ({ skillsData }) => {

    return (
        <section id="skills" className="skills">
            <h2 className="skills__h1">My Skills</h2>
            <p className='skills__level'>(Junior - Middle - Profesional - Senior)</p>
            <table className="skills__table">
                <tbody>
                    {
                        skillsData?.map(skill => (
                            <tr key={skill['name']}>
                                <td className='skill_level'><span className="highlight">{skill['level']}</span></td>
                                <td>{skill['name']}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Skills;