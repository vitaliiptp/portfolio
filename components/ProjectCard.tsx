import React from 'react';
import {Project} from '../utils/types'


interface ProjectProps {
    projects: Project[]
}


const ProjectCard = ({projects}: ProjectProps) => {
    return (
        <div>
            {projects.map((project) =>
                <div key={project._id} className="flex justify-start pt-10">
                    <div className="flex px-10 active">
                        <img src={`/assets/${project._id}.png`} alt="Logo" width={400} />
                    </div>
                    <div>
                        <p className="text-b-xl">{project.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;