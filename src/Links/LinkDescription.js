import React from 'react';
import Education from './Tabs/Education';
import Books from './Tabs/Books';
import ProjectsContainer from './Tabs/ProjectsContainer';

const LinkedDescription = ({ description }) => {
  return (
    <div className="flex">
      <div>
        {description === 'education' && <Education />}
        {description === 'books' && <Books />}
        {description === 'projects' && <ProjectsContainer />}
      </div>
    </div>
  );
};

export default LinkedDescription;
