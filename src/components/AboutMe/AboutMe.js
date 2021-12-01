import { Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <div style={{backgroundColor: 'skyblue', padding: '30px'}}>
             <Typography sx={{ marginBottom: "15px", fontSize: '35px', fontWeight: 'bolder', textAlign: 'center', padding: '30px' }}><span className="color">About</span> Me </Typography>
            <Typography sx={{fontSize: '15px', textAlign: 'center'}}>I am very interested and dedicated to my work. I like to learn something new and want to make me perfect
                    in the web developing sector.</Typography>

        </div>
    );
};

export default AboutMe;