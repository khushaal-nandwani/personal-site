import React from 'react';
import Education from './Education/Education';
import Books from './Books/Books';
import Shows from './Shows/Shows';
import ProjectsList from './Projects/ProjectsList';
import ExperienceList from './Experience/ExperienceList';

const SectionSelector = ({ description }) => {
  return (
    <div className="flex">
      <div>
        {description === 'education' && <Education />}
        {description === 'books' && <Books />}
        {description === 'shows' && <Shows />}
        {description === 'projects' && <ProjectsList />}
        {description === 'experience' && <ExperienceList />}
      </div>
    </div>
  );
};

export default SectionSelector;
