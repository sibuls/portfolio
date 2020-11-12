import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Projects = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu  projects'
      // className='menu   projects projects--unorganized'
      onClick={() =>
        handleBusinessCardClick(
          'projects',
          'translate(-50%, -50%) skew(4deg, 12deg) scale(1.2) rotate(-5deg); '
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Projects' />
    </div>
  );
};

export default Projects;
