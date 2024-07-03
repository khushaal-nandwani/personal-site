import React from 'react';

function ProjectsList({ handleLinkClick }) {
    return (
        <div className="flex flex-col gap-4 ">
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer'><a onClick={() => handleLinkClick('proxiee')} className="text-xl ">Proxiee</a> <p className="text-sm italic">Python, Flask</p></div>
        </div>
        );
}

export default ProjectsList;