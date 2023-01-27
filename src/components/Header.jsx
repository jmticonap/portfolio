import React from 'react';
import './css/Header.css'
import NavigatorBar from './NavigatorBar';
import IconLinkedin from '@mui/icons-material/LinkedIn'
import IconGitHub from '@mui/icons-material/GitHub'
import IconEmail from '@mui/icons-material/EmailRounded'
import imgProgrammer from '../assets/img/yo_1_x_1.png'

const Header = ({ name, linkedinPath, githubPath, email }) => {

    const themeSocials = {
        fontSize: '4rem',
        color: 'var(--hight-light)'
    }

    return (
        <header className="page-cover">
            {/* <NavigatorBar /> */}
            <div className="page-cover__title">
                <h1 className="page-cover__title__h1">Juan Ticona</h1>
                <div className="page-cover__title__div">
                    <p>
                        I am a full stack developer,
                        with a continius effots to get new skills and knowledge an I have
                        <span className="highlight"> +1 year of experience.</span><br />
                    </p>
                    <div className="page-cover__socials">
                        <div>
                            <a href={linkedinPath} target='_blank'>
                                <IconLinkedin sx={themeSocials} />
                            </a>
                        </div>
                        <div>
                            <a href={githubPath} target="_blank" >
                                <IconGitHub sx={themeSocials} />
                            </a>
                        </div>
                        <div>
                            <a href={`mailto:${email}`}>
                                <IconEmail sx={themeSocials} />
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    className="page-cover__title__img"
                    src={imgProgrammer} alt={`${name} - Photo`}
                    title={name} />
            </div>
        </header>
    )
}

export default Header;