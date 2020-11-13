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
          'translate(-50%, 0%) skew(8deg, -5deg) scale(1.2) rotate(-90deg); ',
          '56%' /* height - default height is 50% */,
          '21%' /* top -  default top is 30% */
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Projects' />
    </div>
  );
};

export default Projects;
