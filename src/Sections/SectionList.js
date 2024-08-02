import React from "react";

function SectionList({ handleLinkClick }) {

  return (
    <div className="flex flex-col gap-4 text-2xl ">
      <a onClick={() => handleLinkClick('education', 0)} className="hover:scale-125 transition-transform cursor-pointer">Education</a>
      {/* <a onClick={() => handleLinkClick('books', 0)} className="hover:scale-125 transition-transform cursor-pointer">Books</a> */}
      <a onClick={() => handleLinkClick('projects', 0)} className="hover:scale-125 transition-transform cursor-pointer">Projects</a>
      <a onClick={() => handleLinkClick('experience', 0)} className="hover:scale-125 transition-transform cursor-pointer">Experience</a>
      <a href="knresume.pdf" target="_blank" className="hover:scale-125 transition-transform cursor-pointer">Resume</a>
    </div>
    );
}

export default SectionList;
