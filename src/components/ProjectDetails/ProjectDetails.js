import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState();

    useEffect(() => {

        fetch(`http://localhost:3000/projectDetails/${projectId}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [projectId]) 
    return (
        <div>
            <h2>Project Details</h2>
        </div>
    );
};

export default ProjectDetails;