import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../../images/profile.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Box>
            <Grid container spacing={3} sx={{ bgcolor: 'black', marginTop: '0', paddingTop: '80px', paddingBottom: '80px' }}>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box>
            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>
            I'M A JUNIOR WEB DEVELOPER
            </Typography>
            <br />
            <Grid  container spacing={1}>
           <Grid item xs={12} sm={12} md={6} lg={6} sx={{marginBottom: '30px'}}>
                <a className="button" href="https://drive.google.com/file/d/1UHyU6MjwvH8xo01hk0tdVttEqqLdB2yO/view?usp=sharing" target="blank">Download Resume</a>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
            <NavLink className="hireme-btn" to="/contactme">Hire Me</NavLink>
            </Grid>
              
            </Grid>
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