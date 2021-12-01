import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MySkill from '../MySkill/MySkill';
import './MySkills.css'

const MySkills = () => {
    const skills = [
                    {id: 1, name: 'HTML'},
                    {id: 2, name: 'CSS'},
                    {id: 3, name: 'JavaScript'},
                    {id: 4, name: 'React'},
                    {id: 5, name: 'Node.js'},
                    {id: 6, name: 'MongoDB'},
                    {id: 7, name: 'Bootstrap'},
                    {id: 8, name: 'Tailwind'},
                    {id: 9, name: 'Material UI'},
                    {id: 10, name: 'HTML'}
                    ];

    return (
        <div className="my-skill">
          <Typography sx={{ marginBottom: "15px", fontSize: '35px', fontWeight: 'bolder', textAlign: 'center', padding: '30px' }}>Top <span className="color">Skills</span></Typography>
            <Container maxWidth="lg" sx={{marginBottom: '30px'}}>
                <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                    {
                        skills.map(skill => <MySkill
                        key={skill.id}
                        skill={skill}
                        ></MySkill>)
                    }
                </Grid>
            </Container>
       </div> 
    );
};

export default MySkills;