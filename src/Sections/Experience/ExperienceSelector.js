import React from 'react';
import ExperiencePoint from './ExperiencePoint';
import Tripta from './Tripta';
import Resnet from './Resnet';

const ExperienceSelector = ({ selectedExperience }) => {
    return (
        <div className='flex'>
            <div>
                {selectedExperience === 'ep' && <ExperiencePoint />}
                {selectedExperience === 'resnet' && <Resnet />}
                {selectedExperience === 'tripta' && <Tripta />}
            </div>
        </div>
    );
};

export default ExperienceSelector;
