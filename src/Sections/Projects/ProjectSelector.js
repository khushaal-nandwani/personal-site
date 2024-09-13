import React from 'react';
import Proxiee from './Proxiee';
import QuestionSuggester from './QuestionSuggester';
import LearningEngine from './LearningEngine';
import ExperienceData from './ExperienceData';
import Frogger from './Frogger';
import RaffleManager from './RaffleManager';
import TPTracker from './TPTracker';
import TallyToSQL from './TallyToSQL';

const ProjectsDescription = ({ selectedProject }) => {
    return (
        <div className='flex'>
            <div>
                {selectedProject === 'tallyToSQL' && <TallyToSQL />}
                {selectedProject === 'proxiee' && <Proxiee />}
                {selectedProject === 'learningEngine' && <LearningEngine />}
                {selectedProject === 'questionSuggester' && <QuestionSuggester />}
                {selectedProject === 'experienceData' && <ExperienceData />}
                {selectedProject === 'frogger' && <Frogger />}
                {selectedProject === 'raffleManager' && <RaffleManager />}
                {selectedProject === 'tpTracker' && <TPTracker />}
            </div>
        </div>
    );
};

export default ProjectsDescription;
