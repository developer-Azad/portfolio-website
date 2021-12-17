import { Container, Grid, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import MyProject from '../MyProject/MyProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        fetch('./project.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
       }, [])

    return (
        <div style={{backgroundColor: 'rgb(49, 49, 49)', color: 'white'}}>
          <Typography sx={{ marginBottom: "15px", fontSize: '35px', fontWeight: 'bolder', textAlign: 'center', padding: '30px' }}>My <span className="color">Projects</span></Typography>
            <Container maxWidth="lg">
                <Grid container spacing={3} columns={{ xs: 12, sm: 12, md: 12, lg: 12}}>
                    {
                        projects.map(project => <MyProject
                        key={project.id}
                        project={project}
                        ></MyProject>)
                    }
                </Grid>
            </Container>
       </div> 
);
};

export default MyProjects;