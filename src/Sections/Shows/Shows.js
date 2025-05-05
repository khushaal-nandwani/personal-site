import React from 'react';

const Shows = () => {
    const shows = ["Seinfeld (1989)", "Shameless (2011)"];

    return (
        <div>
            {shows.map((show, index) => (
                <div key={index} className='mb-4'>
                    <p className='text-2xl'>{show}</p>
                </div>
            ))}
        </div>
    );
};

export default Shows;
