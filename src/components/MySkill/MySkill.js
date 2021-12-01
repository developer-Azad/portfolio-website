import React from 'react';
import {Grid } from '@mui/material';
import './MySkill.css'

const MySkill = ({skill}) => {
    // console.log(name.skill);
    const {name} = skill;
    return (
        <Grid className="skills" item xs={12} sm={6} md={4} lg={3}>
        <div className="skill">{name}</div>
        </Grid>
    );
};

export default MySkill;