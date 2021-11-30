import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './ContactMe.css';


const ContactMe = () => {
    

        return (
            <div className="service-form">
                <Box sx={{fontSize: '30px', marginTop: 5}}>
                <Typography sx={{fontSize: '30px', marginTop: 5}}>Contact Me</Typography>
                </Box>
                <form className="form"  action="https://formsubmit.co/akalamazad500@gmail.com" method="POST">
                    <div>
                    <input type="text" name="name" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <textarea name="textarea" id="" cols="90" rows="5" placeholder="type your message" required />
                    </div>
                    <br />
                  <div>
                  <button className="send-btn" type="submit">Send</button>
                  </div>
                </form>
            </div>
        );
    };

export default ContactMe;