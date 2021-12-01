import React, { useRef } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import HomeIcon from '@mui/material/SvgIcon';
// import { BiMailSend } from 'react-icons/bi';
// import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
    

// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';
// import './ContactMe.css';


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3ohn96t', 'template_3gb777f', form.current, 'user_CyfkPVlFYczj3eHjNp2ka')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

        return (

            <div className="contact-form">
            <div className="container">
                <h1 style={{textAlign: 'center' }}>!! <span className="color" style={{ fontWeight: 'bolder' }}>Get In</span> Touch !!</h1>
                <h5><span style={{ fontWeight: 'bolder', fontSize: '150%' }}>Find me on</span> Social media or <br /> send me a message.</h5><br />

                {/* <div>
                    <a target="_blank" href="https://github.com/mahfuz42726" rel="noreferrer" style={{ color: 'white' }}>
                        <FaGithubSquare className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/md-mahmudul-hasan-171398227/" rel="noreferrer" style={{ color: 'white' }}>
                        <FaLinkedin className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100006979148737" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
                        <FaFacebookSquare className="icon" style={{ fontSize: '30px', marginRight: '10px' }} />
                    </a>
                </div> */}
                <br />

                {/* text-start */}
                
                <div>
                    <div className="form w-100">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    required
                                    name="user_name"
                                    className="form-control input"
                                    placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    required
                                    name="user_email"
                                    className="form-control input"
                                    placeholder="Your email" />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    required
                                    name="subject"
                                    className="form-control input"
                                    placeholder="Subject (optional)" />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    className="form-control input"
                                    rows="3"
                                    required
                                    name="message"
                                    placeholder="Type Message"
                                ></textarea>
                            </div>
                            <button type="submit" className="bgColor button contact-btn"> Send </button>
                        </form>
                        <HomeIcon color="success"/>
                    </div>
                    <div className="frame2">

                    </div>
                </div>
            </div>
        </div>
        );
    };

export default ContactMe;


            // <div className="service-form">
            //     <h4 className="form-title">Contact Me</h4>
            //     <form className="form"  action="https://formsubmit.co/akalamazad500@gmail.com" method="POST">
            //         <div>
            //         <input type="text" name="name" placeholder="Name" required/>
            //         <input type="email" name="email" placeholder="Email" required/>
            //         <textarea name="textarea" id="" cols="90" rows="5" placeholder="type your message" required />
            //         </div>
            //         <br />
            //       <div>
            //       <button className="bgColor send-btn" type="submit">Send</button>
            //       </div>
            //     </form>
            // </div>