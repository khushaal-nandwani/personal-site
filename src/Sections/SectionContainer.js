import React, { useEffect, useState } from "react";
import SectionSelector from "./SectionSelector";
import SectionList from "./SectionList";
import ProjectsList from "./Projects/ProjectsList";
import ProjectSelector from "./Projects/ProjectSelector";
import ExperienceList from "./Experience/ExperienceList";
import ExperienceSelector from "./Experience/ExperienceSelector"
import BackButton from "./BackButton/BackButton";

function SectionContainer() {
  const [activeSections, setActiveSections] = useState([]);

  const containerRef = React.useRef(null); // Ref to track the container element

  const sections = {
    education: "education",
    books: "books",
    projects: "projects",
    experience: "experience",
    // projects
    tallyToSQL: "tallyToSQL",
    proxiee: "proxiee",
    learningEngine: "learningEngine",
    questionSuggester: "questionSuggester",
    experienceData: "experienceData",
    frogger: "frogger",
    raffleManager: "raffleManager",
    tpTracker: "tpTracker",
    // experiences
    ep: "ep",
    resnet: "resnet",
    tripta: "tripta",
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

  const showSections = activeSections.length === 0
  const showProjects = activeSections.length === 1 && activeSections[0] === 'projects'
  const showExperiences = activeSections.length === 1 && activeSections[0] === 'experience'
  const showSelectedSection = activeSections.length === 1 && activeSections[0] !== 'projects' && activeSections[0] !== 'experience'
  const showSelectedProject = activeSections.length === 2 && activeSections[0] === 'projects'
  const showSelectedExperience = activeSections.length === 2 && activeSections[0] === 'experience'

  // TODO: there is probably a cleaner way to do
  return (
    <div ref={containerRef} className="flex flex-col text-left md:h-[400] md:w-[400px]">
      {showSections  && (<SectionList handleLinkClick={handleLinkClick} />)}
      {showProjects && (<ProjectsList handleLinkClick={handleLinkClick} />)}
      {showExperiences && (<ExperienceList handleLinkClick={handleLinkClick} />)}

      {showSelectedSection && (<SectionSelector description={activeSections[0]} />)}
      {showSelectedProject && (<ProjectSelector selectedProject={activeSections[1]} />)}
      {showSelectedExperience && (<ExperienceSelector selectedExperience={activeSections[1]} />)}

      {activeSections.length > 0 && (
        <BackButton setActiveSections={setActiveSections}/>
      )}
    </div>
  );
}
  

export default SectionContainer;
