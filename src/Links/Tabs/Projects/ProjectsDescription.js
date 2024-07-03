import React from 'react';
import Proxiee from './Proxiee';

const ProjectsDescription = ({ selectedProject }) => {
    return (
        <div className='flex'>
            <div>
                {selectedProject === 'proxiee' && <Proxiee />}
            </div>
        </div>
    );
};

export default ProjectsDescription;
