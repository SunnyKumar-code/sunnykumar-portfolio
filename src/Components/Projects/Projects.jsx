import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Motivation App"
          main="An app designed to inspire and motivate users by providing uplifting content and tools."
        />
        <ProjectCard
          title="Trip Planner"
          main="A web application to plan and organize your trips efficiently with intuitive tools."
        />
        <ProjectCard
          title="Bank of React"
          main="A React-based banking app that visualizes financial data using charts and modern UI components."
        />
      </div>
    </div>
  );
};

export default Projects;
