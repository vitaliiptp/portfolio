  import type { NextPage } from "next";
import Projects from "../components/Projects";
import Home from "../components/Home";
import { Project } from "../utils/types";
import TechStack from "../components/TechStack";
import Resume from "../components/Resume";
import Contact from "../components/Contact";

interface ProjectProps {
  projects: Project[];
}

const MainComponent: NextPage<ProjectProps> = ({ projects }) => {
  return (
    <div>
        <Home />
        <Projects projects={projects} />
      <TechStack />
      <Resume />
      <Contact />
    </div>
  );
};

export default MainComponent;

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
