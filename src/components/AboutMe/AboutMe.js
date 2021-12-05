import { Typography } from '@mui/material';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutme">
             <Typography sx={{textAlign: 'center', marginBottom: "15px", fontSize: '35px', fontWeight: 'bolder', padding: '30px' }}><span className="color">About</span> Me </Typography>
            <Typography sx={{fontSize: '15px', marginLeft: '10%'}}>I am very interested and dedicated to my work. I like to learn something new and want to make me perfect
                    in the web development. I am a hard-working and fast learner with a good communication skills.
                    <p>I can build websites with following technologies:</p>
                    <p><b>Front-End Technologies: </b>JavaScript, ES6, Rest API, React, React Router, React Hook, SPA,  HtML5, CSS3, Bootstrap, React Bootstrap, Tailwind, React tailwind, Material UI.</p>
                    <p><b>Back-End Technologies: </b>Node.js, Express.js, Firebase, MongoDB.</p>
                    <p><b>Tools: </b>Git, Github, VS Code, Chrome Dev Tools, Heroku, Netlify, Figma.</p>
            </Typography>
            

            <div style={{textAlign: 'center', padding: '20px'}} >
            <Typography><b>Email:</b> akalamazad@gmail.com</Typography>
            <Typography><b>Residence:</b> Bangladesh</Typography>
            <Typography><b>Home town:</b> Bogra</Typography>
            <br />
                <a href="https://www.facebook.com/abul.abul.712161" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                        <FaFacebook className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                    <a target="_blank" href="https://github.com/developer-Azad" rel="noreferrer" style={{ color: 'white' }}>
                        <FaGithub className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/abul-kalam-azad-837151227/" rel="noreferrer" style={{ color: 'white' }}>
                        <FaLinkedinIn className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                   
                </div>

        </div>
    );
};

export default AboutMe;