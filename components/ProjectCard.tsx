import React from 'react';
import { Project } from '../utils/types'


interface ProjectProps {
    projects: Project[]
}


const ProjectCard = ({projects}: ProjectProps) => {
    return (
        <div>
            {projects.map((project) => (
            <p key={project._id} className="text-b-26">{project.url}</p>)
            )}
        </div>
    );
};

export default ProjectCard;