import React from 'react';

const commonClass = "flex flex-row items-baseline gap-4 md:hover:scale-110 md:transition-transform cursor-pointer"

function ProjectsList({ handleLinkClick }) {
    return (
        <div className="flex flex-col gap-4 ">
          <div className={commonClass} onClick={() => handleLinkClick('noteme', 1)}> <p className="text-xl ">NoteMe</p> <p className="text-sm italic">Javascript, Chrome API</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('proxiee', 1)}> <p className="text-xl ">Proxiee</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('tallyToSQL', 1)}> <p className="text-xl ">Tally To SQL</p> <p className="text-sm italic">XML, SQL</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('learningEngine', 1)}> <p className="text-xl ">Learning Engine</p> <p className="text-sm italic">Python, Flask</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('questionSuggester', 1)}> <p className="text-xl ">Question Suggestor</p> <p className="text-sm italic">Python, MatPlotLib, SciPy</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('experienceData', 1)}> <p className="text-xl ">Experience Data</p> <p className="text-sm italic">Pandas, Matplotlib</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('frogger', 1)}> <p className="text-xl ">Frogger</p> <p className="text-sm italic">Assembly</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('raffleManager', 1)}> <p className="text-xl ">Raffle Manager</p> <p className="text-sm italic">Java, JDBC</p></div>
          <div className={commonClass} onClick={() => handleLinkClick('tpTracker', 1)}> <p className="text-xl ">TP Tracker</p> <p className="text-sm italic">Python, Adruino</p></div>
        </div>
        );
}

export default ProjectsList;