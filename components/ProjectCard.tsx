import React from 'react';
import Image from "next/image";
import {Project} from '../utils/types'


interface ProjectProps {
    projects: Project[]
}


const ProjectCard = ({projects}: ProjectProps) => {
    return (
        <div>
            {projects.map((project) =>
                <div key={project._id} className="flex items-center justify-center p-7">
                    <img src={`/assets/${project._id}.png`} alt="Logo" width={300} height={190}/>
                    <p className="text-b-xl">{project.name}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;