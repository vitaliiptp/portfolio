import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../utils/types";
import { NextPage } from "next";

interface ProjectProps {
  projects: Project[];
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <div id="projects" className="flex, min-h-screen py-24 text-b-xl">
      <div>Things I've made or helped making</div>
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Projects;
