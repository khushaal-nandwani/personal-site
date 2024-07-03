import React, { useEffect, useState } from "react";
import ProjectsDescription from "./Projects/ProjectsDescription";
import ProjectsList from "./Projects/ProjectsList";

function ProjectsContainer() {
  const [selectedProject, setProject] = useState(null);
  const containerRef = React.useRef(null); 

  const projects = {
    proxiee: "proxiee"
  };

  const handleLinkClick = (key) => {
    setProject(projects[key]);
  };

  const handleClickOutside = (ev) => {
    if (containerRef.current && !containerRef.current.contains(ev.target)) {
      setProject(null);
    }
  }  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }
  , []);

  return (
    <div ref={containerRef} className="flex text-left h-[300px] w-[400px]">
      {!selectedProject && (
        <ProjectsList
            handleLinkClick={handleLinkClick}
        />
      )}
      {selectedProject && (
        <ProjectsDescription
          selectedProject={selectedProject}
        />
      )}
    </div>
  );
}
  

export default ProjectsContainer;
