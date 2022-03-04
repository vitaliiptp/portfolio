import React from "react";
import { Project } from "../utils/types";

interface ProjectProps {
  projects: Project[];
  currentIndex: number;
  setCurrentIndex: any;
}

const ProjectCard = ({ projects, currentIndex, setCurrentIndex }: ProjectProps) => {

    const handleOnNextClick = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

    const handleOnPrevClick = () => {
        setCurrentIndex((currentIndex + (projects.length - 1)) % projects.length);
    };

    const prevProjIndex = (currentIndex + 1) % projects.length
    const nextProjIndex = (currentIndex + (projects.length - 1)) % projects.length

  return (
    <div className="min-h-screen w-4/5 m-auto">
      <div className="">
        <div>
          <a href={projects[currentIndex].url} target="_blank" rel="noopener noreferrer">
            <p className="text-b-xl underline">{projects[currentIndex].name}</p>
          </a>
          <img
            src={`/assets/${projects[currentIndex]._id}.png`}
            alt="Logo"
            width={500}
            height={340}
          />
        </div>
      </div>
      <div className="">
        <p className="">
          {projects[currentIndex].description}
        </p>
      </div>
      <div className="flex flex-row w-full border-y-2 divide-x-2">
        <button className='flex w-1/2 justify-start' onClick={handleOnPrevClick}>
            <div className='flex flex-col text-left'>
                <p>{projects[prevProjIndex].name}</p>
                <p>Previous Project</p>
            </div>
        </button>
        <button className='flex w-1/2 justify-end' onClick={handleOnNextClick}>
            <div className='flex flex-col text-right'>
                <p>{projects[nextProjIndex].name}</p>
                <p>Next Project</p>
            </div>

            </button>
      </div>
    </div>

    // <div className="min-h-screen w-4/5 m-auto">
    //     {projects.map((project) =>
    //         <div key={project._id} className="flex flex-col justify-center items-center pt-20">
    //             <div className="flex px-10 active flex-[35%]">
    //                 <div>
    //                     <a href={project.url} target="_blank" rel="noopener noreferrer" ><p className="text-b-xl underline">{project.name}</p></a>
    //                     <img src={`/assets/${project._id}.png`} alt="Logo" width={500} height={340} />
    //                 </div>
    //             </div>
    //             <div className="flex flex-col flex-[65%]">
    //                 <p className="pt-4 text-2xl text-b tracking-wide leading-loose">{project.description}</p>
    //             </div>
    //             <div className='flex flex-row justify-between w-full'>
    //                 <button>Previous</button>
    //                 <button>Next</button>
    //             </div>
    //         </div>
    //
    //     )}
    // </div>
  );
};

export default ProjectCard;
