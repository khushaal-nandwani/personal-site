import React from 'react';
import Education from './Education/Education';
import Books from './Books/Books';
import ProjectsList from './Projects/ProjectsList';

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
