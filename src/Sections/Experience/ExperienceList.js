import React from 'react';

function ExperienceList({ handleLinkClick }) {
    return (
        <div className="flex flex-col gap-4 ">
          <div className='flex flex-row items-baseline gap-4 md:hover:scale-110 md:transition-transform cursor-pointer' onClick={() => handleLinkClick('apperture', 1)}> <p className="text-xl ">Software Development Engineer</p> <p className="text-sm italic">Apperture AI, Bangalore</p></div>
          <div className='flex flex-row items-baseline gap-4 md:hover:scale-110 md:transition-transform cursor-pointer' onClick={() => handleLinkClick('tripta', 1)}> <p className="text-xl ">DevOps and Software Developer Intern</p> <p className="text-sm italic">Tripta Innovations, Surat</p></div>
          <div className='flex flex-row items-baseline gap-4 md:hover:scale-110 md:transition-transform cursor-pointer' onClick={() => handleLinkClick('ep', 1)}> <p className="text-xl ">Software Developer Co Op</p> <p className="text-sm italic">ExperiencePoint, Toronto</p></div>
          <div className='flex flex-row items-baseline gap-4 md:hover:scale-110 md:transition-transform cursor-pointer' onClick={() => handleLinkClick('resnet', 1)}> <p className="text-xl ">Resnet IT Assistant</p> <p className="text-sm italic">University of Toronto</p></div>
        </div>
        );
}

export default ExperienceList;