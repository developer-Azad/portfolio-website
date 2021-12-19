import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../../images/kk.png';
import Typewriter from 'typewriter-effect';
import './Banner.css'

const Banner = () => {
    return (
        <Box>
            <Grid className="bg-banner" container spacing={3} sx={{ marginTop: '0', paddingTop: '80px', paddingBottom: '80px' }}>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
            <Typography sx={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>
            This is <span className="color">ABUL</span> KALAM <span className="color">AZAD</span>
            </Typography>

            <div style={{textAlign: 'center'}}>
            <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<h1>A junior web developer</h1>')
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      typewriter.typeString('<h1>A Frontend web developer</h1>')
      .pauseFor(1000)
      .deleteAll()
      typewriter.typeString('<h1>A react developer</h1>')
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
            </div>

            <br />
            <div style={{textAlign: 'center', marginBottom: '30px'}}>
            <Grid  container spacing={1}>
           <Grid item xs={12} sm={12} md={6} lg={6} sx={{marginBottom: '30px'}}>
                <a className="button bgColor" href="https://drive.google.com/file/d/1UHyU6MjwvH8xo01hk0tdVttEqqLdB2yO/view?usp=sharing" target="blank">Download Resume</a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <NavLink className="hireme-btn" to="/contactme">Hire Me</NavLink>
            </Grid>
            
            </Grid>
            </div>
            </Box>
      </Grid>
        <Grid className="banner-img" item xs={12} sm={6} md={6} lg={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image} alt=""></img>
     
      </Grid>
      </Grid>
      </Box>
    );
};

export default Banner;