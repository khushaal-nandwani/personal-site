import React from 'react';

function ProjectsList({ handleLinkClick }) {
    return (
        <div className="flex flex-col gap-4 ">
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('proxiee', 1)}> <p className="text-xl ">Proxiee</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('learningEngine', 1)}> <p className="text-xl ">Learning Engine</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('questionSuggester', 1)}> <p className="text-xl ">Question Suggestor</p> <p className="text-sm italic">Python, MatPlotLib, SciPy</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('experienceData', 1)}> <p className="text-xl ">Experience Data</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('frogger', 1)}> <p className="text-xl ">Frogger</p> <p className="text-sm italic">Python, Pygame</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('raffleManager', 1)}> <p className="text-xl ">Raffle Manager</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className='flex flex-row items-baseline gap-4 hover:scale-125 transition-transform cursor-pointer' onClick={() => handleLinkClick('tpTracker', 1)}> <p className="text-xl ">TP Tracker</p> <p className="text-sm italic">Python, Flask</p></div>
        </div>
        );
}

export default ProjectsList;