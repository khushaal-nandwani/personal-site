import React, { useState } from "react";

function Links({ handleLinkClick }) {

  return (
    <div className="flex flex-col gap-4 text-xl text-left h-[300px] w-[250px]">
      <a onClick={() => handleLinkClick('education')} className="hover:scale-125 transition-transform cursor-pointer">Education</a>
      <a onClick={() => handleLinkClick('books')} className="hover:scale-125 transition-transform cursor-pointer">Books</a>
      <a onClick={() => handleLinkClick('projects')} className="hover:scale-125 transition-transform cursor-pointer">Projects</a>
      <a onClick={() => handleLinkClick('experience')} className="hover:scale-125 transition-transform cursor-pointer">Experience</a>
    </div>
    );
}

export default Links;
