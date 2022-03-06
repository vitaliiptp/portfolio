import React from "react";
import { Project } from "../utils/types";


interface ProjectProps {
  projects: Project[];
  currentIndex: number;
  setCurrentIndex: any;
}

const ProjectCard = ({
  projects,
  currentIndex,
  setCurrentIndex,
}: ProjectProps) => {
  const handleOnNextClick = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const handleOnPrevClick = () => {
    setCurrentIndex((currentIndex + (projects.length - 1)) % projects.length);
  };

  const nextProjIndex = (currentIndex + 1) % projects.length;
  const prevProjIndex =
    (currentIndex + (projects.length - 1)) % projects.length;

  return (
    <div className="min-h-screen w-4/5 m-auto">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full h-auto">
          <img src={`/assets/projects/${projects[currentIndex].id}.png`} alt="project preview" width={2200} />
        </div>
        <div className="flex flex-col items-center mt-16 mb:6 lg:flex-row lg:items-start w-full lg:mt-32 lg:mb-12">
          <div className="flex flex-col w-full border-y-[3px] border-light-grey text-left text-b-l_black lg:w-1/3 py-16 lg:mr-32 lg:text-b-xl_black">
            <p>Bookmark</p>
            <p className="mt-10 text-n-m tracking-wide leading-relaxed 2xl:text-n-l 2xl:leading-relaxed">
              {projects[currentIndex].bookmark}
            </p>
            <p className="mt-10 text-b-m_blue">{projects[currentIndex].tech}</p>
            {/*<p className='text-b-m_blue'>HTML / CSS / JS</p>*/}
            <button className="mt-10 w-60 text-b-s text-center uppercase border-4 px-8 py-4 hover:bg-black hover:text-b-s_w hover:border-black">
              <a href={projects[currentIndex].url} target="_blank" rel="noopener noreferrer">Visit website</a>
            </button>
          </div>
          <div className="flex flex-col my-16 lg:my-0 lg:w-2/3 text-left">
            <div className="flex flex-col">
              <p className='text-b-sl tracking-wide lg:text-b-l'>Project Background</p>
              <p className="my-10 text-n-m tracking-wide leading-relaxed 2xl:text-n-l 2xl:leading-relaxed">
                {projects[currentIndex].description}
              </p>
            </div>
            <div className="flex flex-col">
              <p className='my-10 text-b-sl tracking-wide lg:text-b-l'>Static Preview</p>

                {projects[currentIndex].screenshots.map(screenshot =>
                    <div key={screenshot} className="w-full mb-10">
                      <img src={`/assets/projects/${screenshot}.png`} alt='screenshot' />
                    </div>
                )}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full border-y-[3px] divide-x-[3px] border-light-grey divide-light-grey">
          <button className="flex w-1/2 justify-start" onClick={handleOnPrevClick}>
            <div className="flex flex-row py-8">
              <div className="flex items-center">
                <img src="/assets/projects/chevron-left.svg" alt='chevron left' />
              </div>
              <div className="flex flex-col text-left pl-6">
                <p className="text-sb-m lg:text-sb-l">{projects[prevProjIndex].name}</p>
                <p className="text-sb-s">Previous Project</p>
              </div>
            </div>
          </button>
          <button className="flex w-1/2 justify-end" onClick={handleOnNextClick}>
            <div className="flex flex-row py-8">
              <div className="flex flex-col text-right pr-6">
                <p className="text-sb-m lg:text-sb-l">{projects[nextProjIndex].name}</p>
                <p className="text-sb-s">Next Project</p>
              </div>
              <div className="flex items-center">
                <img src="/assets/projects/chevron-right.svg" alt='chevron right' />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
