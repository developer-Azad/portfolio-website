import { Button, Container } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const {projectId} = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('/project.JSON')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []) 

    const project = projects.find(project => project.id === parseInt(projectId))

    return (
        <div>
            <div className="orders-container">
                    <img width="90%" src={project?.image} alt="" />
                    <div style={{paddingBottom: '30px'}}>
                    <h1 className="project-name">{project?.name}</h1>
                    <Container><p>{project?.description}</p></Container>
                    </div>
                    <div  className="buttons" style={{paddingBottom: '30px'}}>
    <Button><a className=" btn" href={project?.client} target="blank">Github Client</a></Button>
        <Button ><a className=" btn" href={project?.server} target="blank">Github Server</a></Button>
    </div>
               
            </div>
        </div>
    );
};

export default ProjectDetails;