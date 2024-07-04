import React, { useEffect, useState } from "react";
import SectionSelector from "./SectionSelector";
import SectionList from "./SectionList";
import ProjectsList from "./Projects/ProjectsList";
import ProjectSelector from "./Projects/ProjectSelector";

function SectionContainer() {
  const [activeSections, setActiveSections] = useState([]);
  const containerRef = React.useRef(null); // Ref to track the container element

  const sections = {
    education: "education",
    books: "books",
    projects: "projects",
    // projects
    proxiee: "proxiee",
    learningEngine: "learningEngine",
    questionSuggester: "questionSuggester",
    experienceData: "experienceData",
    frogger: "frogger",
    raffleManager: "raffleManager",
    tpTracker: "tpTracker",
  };

  const handleLinkClick = (key, position) => {
    if (activeSections.length > 0) {
      const temp = [...activeSections];
      temp[position] = sections[key];
      setActiveSections(temp);
    }
    else {
      setActiveSections([sections[key]]);
    }
  };

  const handleClickOutside = (ev) => {
    if (containerRef.current && !containerRef.current.contains(ev.target)) {
      const currentSections = [...activeSections];
      currentSections.pop();
      setActiveSections(currentSections);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }
  , [activeSections]);

  const showSections = activeSections.length == 0
  const showProjects = activeSections.length == 1 && activeSections[0] == 'projects'
  const showSelectedSection = activeSections.length == 1 && activeSections[0] != 'projects'
  const showSelectedProject = activeSections.length == 2

  // TODO: there is probably a cleaner way to do

  return (
    <div ref={containerRef} className="flex text-left h-[300px] w-[400px]">
      {showSections  && (<SectionList handleLinkClick={handleLinkClick} />)}
      {showSelectedSection && (<SectionSelector description={activeSections[0]} />)}
      {showProjects && (<ProjectsList handleLinkClick={handleLinkClick} />)}
      {showSelectedProject && (<ProjectSelector selectedProject={activeSections[1]} />)}
    </div>
  );
}
  

export default SectionContainer;
