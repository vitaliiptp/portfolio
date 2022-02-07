import React from 'react';
import {Project} from '../utils/types'


interface ProjectProps {
    projects: Project[]
}


const ProjectCard = ({projects}: ProjectProps) => {
    return (
        <div>
            {projects.map((project) =>
                <div key={project._id} className="flex flex-col justify-start pt-10 sm:flex-row">
                    <div className="flex px-10 active flex-[35%]">
                        <div>
                            <img src={`/assets/${project._id}.png`} alt="Logo" width={500} height={340} />
                        </div>
                    </div>
                    <div className="flex flex-col flex-[65%]">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" ><p className="text-b-xl underline">{project.name}</p></a>
                        <p className="pt-4 text-2xl text-b tracking-wide leading-loose">{project.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;