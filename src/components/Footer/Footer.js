import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
       
            <Box sx={{backgroundColor: 'black', color: 'white', height: '200px'}}>
                <Typography sx={{fontSize: '20px', fontWeight: '500', textAlign: 'center'}}>Abul Kalam Azad</Typography>
            </Box>
      
    );
};

export default Footer;