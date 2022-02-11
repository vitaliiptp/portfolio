import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../utils/types";
import { NextPage } from "next";

interface ProjectProps {
  projects: Project[];
}

const Projects: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <div className="flex, min-h-screen py-16 text-b-xl">
      <div className="text-5xl text-left">Things I've made or helped making</div>
      <ProjectCard projects={projects} />
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json();
    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: { projects: data },
    };
}