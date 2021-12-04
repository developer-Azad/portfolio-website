import React, { useRef } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
    

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

                <div>
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
                    </div>
                    <div className="frame2">

                    </div>
                </div>
            </div>
        </div>
        );
    };

export default ContactMe;
