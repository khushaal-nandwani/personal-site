import React from 'react';
import source from './SourceText.json'

function Name() {
  return (
    <div>
        <p className='text-6xl font-bold'>{source.name.firstname}</p>
        <p className='text-6xl font-bold'>{source.name.lastname}</p>
    </div>

  );
}

export default Name;