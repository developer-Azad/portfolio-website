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
                    <div>
                    <h1 className="project-name">{project?.name}</h1>
                    <p>{project?.description}</p>
                    </div>
               
            </div>
        </div>
    );
};

export default ProjectDetails;