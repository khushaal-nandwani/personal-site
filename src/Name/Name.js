import React from 'react';

function Name() {
  return (
    <div className='text-left flex flex-row md:flex-col gap-4'>
        <p className='text-4xl md:text-6xl font-bold'>Khushaal</p>
        <p className='text-4xl md:text-6xl font-bold'>Nandwani</p>
        
        {/* Subtitle */}
        <p className='text md:text-4xl'>Software Developer</p>
    </div>

  );
}

export default Name;