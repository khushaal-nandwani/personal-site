import React from 'react';
import ExperiencePoint from './ExperiencePoint';
import Tripta from './Tripta';
import Resnet from './Resnet';
import Apperture from './Apperture';

const ExperienceSelector = ({ selectedExperience }) => {
    return (
        <div className='flex'>
            <div>
                {selectedExperience === 'apperture' && <Apperture />}
                {selectedExperience === 'ep' && <ExperiencePoint />}
                {selectedExperience === 'resnet' && <Resnet />}
                {selectedExperience === 'tripta' && <Tripta />}
            </div>
        </div>
    );
};

export default ExperienceSelector;
