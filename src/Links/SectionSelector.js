import React from 'react';
import Education from './Tabs/Education';
import Books from './Tabs/Books';
import ProjectsList from './Tabs/Projects/ProjectsList';

const SectionSelector = ({ description }) => {
  return (
    <div className="flex">
      <div>
        {description === 'education' && <Education />}
        {description === 'books' && <Books />}
        {description === 'projects' && <ProjectsList />}
      </div>
    </div>
  );
};

export default SectionSelector;
