import React from "react";
import source from "./SourceText.json";

function Links() {
  return (
    <div>
      <a target="_blank" rel="noopener noreferrer" href={source.links.resume.link}>{source.links.resume.description}</a>
    </div>
    );
}

export default Links;
