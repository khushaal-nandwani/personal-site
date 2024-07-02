import React from 'react';
import BooksSource from './BooksSource';
import EducationSource from './EducationSource';

const LinkedDescription = ({ description }) => {
  return (
    <div className="flex text-left h-[300px] w-[250px]">
      <div>
        {description === 'education' && <EducationSource />}
        {description === 'books' && <BooksSource />}
      </div>
    </div>
  );
};

export default LinkedDescription;
