import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../utils/types";
import { NextPage } from "next";

interface ProjectProps {
  projects: Project[];
}

const Portfolio: NextPage<ProjectProps> = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
    <div className="flex, min-h-screen py-16 text-b-xl">
      <ProjectCard projects={projects} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};

export default Portfolio;

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