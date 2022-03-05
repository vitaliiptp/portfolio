import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import data from "../data.json";


const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
    <div className="flex, min-h-screen">
      <ProjectCard projects={data.projects} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};

export default Portfolio;

// export async function getServerSideProps() {
//     const res = await fetch("http://localhost:3000/api/projects");
//     const data = await res.json();
//     if (!data) {
//         return {
//             notFound: true,
//         };
//     }
//     return {
//         props: { projects: data },
//     };
// }