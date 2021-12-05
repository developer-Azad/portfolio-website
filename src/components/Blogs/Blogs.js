import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="blogs-container">
            <div className="blog-box">
            <Typography sx={{textAlign: 'center', fontSize: '50px'}}>Blogs</Typography>
            <Typography sx={{textAlign: 'center', fontSize: '90px', fontWeight: '700'}}>Comming Soon</Typography>
            </div>
        </div>
    );
};

export default Blogs;