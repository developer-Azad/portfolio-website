import { Typography } from '@mui/material';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="aboutme">
             <Typography sx={{textAlign: 'center', marginBottom: "15px", fontSize: '35px', fontWeight: 'bolder', padding: '30px' }}><span className="color">About</span> Me </Typography>
            <Typography sx={{fontSize: '15px', marginLeft: '10%', marginRight: '10%'}}>I am not only passionate and interest but also a dedicated web developer. I love to learn more and more new and want to make me perfect
                    one in the web development career. I am not a fast learner but I never give up any difficulties without trying my best at all way. I Always try to contain good behaviors and never compromise with my personality.
                    <p>Love Truthfulness, Like to be dutyful, Hate promise-breaker.</p>
                    <p>If you think I am right, if your mind says I can make something new for you then you can move forward to hire me.</p>
                    <br />
                    <p style={{fontSize: '20px'}}><span className='color'>I use to build websites</span> with the following technologies:</p>
                    <p><b className='color'>Front-End Technologies: </b>JavaScript, ES6, Rest API, React, React Router, React Hook, SPA,  HtML5, CSS3, Bootstrap, React Bootstrap, Tailwind, React tailwind, Material UI.</p>
                    <p><b className='color'>Back-End Technologies: </b>Node.js, Express.js, Firebase, MongoDB.</p>
                    <p><b className='color'>Tools: </b>Git, Github, VS Code, Chrome Dev Tools, Heroku, Netlify, Figma.</p>
                    <p style={{fontSize: '20px'}}><span className='color'>On Learning </span> following technologies:</p>
                    <p>D3.js, Redux, React native, TypeScript</p>
            </Typography>
        
            <div style={{textAlign: 'center', padding: '20px'}} >
            <Typography><b className='color'>Email:</b> akalamazad@gmail.com</Typography>
            <Typography><b className='color'>Residence:</b> Bangladesh</Typography>
            <Typography><b className='color'>Home town:</b> Bogra</Typography>
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