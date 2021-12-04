import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

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
            <h2>Project Name : {project?.name}</h2>
        </div>
    );
};

export default ProjectDetails;