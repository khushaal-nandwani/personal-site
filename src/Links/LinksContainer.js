import React, { useEffect, useState } from "react";
import LinkedDescription from "./LinkDescription";
import Links from "./Links";

function LinksContainer() {
  const [activeDescription, setActiveDescription] = useState(null);
  const containerRef = React.useRef(null); // Ref to track the container element

  const descriptions = {
    education: "education",
    books: "books",
    projects: "projects",
    
  };

  const handleLinkClick = (key) => {
    setActiveDescription(descriptions[key]);
  };

  const handleClickOutside = (ev) => {
    if (containerRef.current && !containerRef.current.contains(ev.target)) {
      setActiveDescription(null);
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
      {!activeDescription && (
        <Links handleLinkClick={handleLinkClick} />
      )}
      {activeDescription && (
        <LinkedDescription
          description={activeDescription}
        />
      )}
    </div>
  );
}
  

export default LinksContainer;
