import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { Project } from "../../utils/types";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex, min-h-screen">
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
