import { Container, Grid, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import MyProject from '../MyProject/MyProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects);
    useEffect( () => {
        fetch('./project.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
       }, [])

    // const projects = [
    //     {
    //     id: '1',
    //     url: 'https://jk-bike-galary.web.app/',
    //     name: 'JK-Bike Galary',
    //     client: '',
    //     server: '',
    //     description: ''
    // },
    //     {
    //     id: '2',
    //     url: 'https://world-tourism-a95bc.web.app/',
    //     name: 'Tourism Agency',
    //     client: '',
    //     server: '',
    //     description: ''
    // },
    //     {
    //     id: '3',
    //     url: 'https://healthcare-center-b7049.web.app/',
    //     name: 'Good Health Hospital',
    //     client: '',
    //     server: '',
    //     description: ''
    // }
    // ]

    return (
        <div>
            <Typography sx={{textAlign: 'center', fontSize: '30px', margin: '30px'}}>My Projects</Typography>
            <Container maxWidth="lg" sx={{marginBottom: '30px'}}>
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