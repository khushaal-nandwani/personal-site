import React from 'react';
import source from './SourceText.json'

function Name() {
  return (
    <div className='text-left'>
        <p className='text-6xl font-bold'>{source.name.firstname}</p>
        <p className='text-6xl font-bold'>{source.name.lastname}</p>
    </div>

  );
}

export default Name;