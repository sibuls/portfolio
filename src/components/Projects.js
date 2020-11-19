import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Projects = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <span
      className='text-body__menu text-body__menu--projects'
      onClick={() =>
        handleBusinessCardClick(
          'projects',
          'translate(-50%, 0%) skew(8deg, 5deg) scale(1.2) rotate(-75deg); ',

          '-20%' /* top -  default top is 0% */
        )
      }
    >
      Projects
    </span>
  );
};

export default Projects;
