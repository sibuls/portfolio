import React from 'react';
import photo from '../../images/preview.jpg';

const ProjectsInfo = () => {
  return (
    <div className='projects'>
      <p className='screen-text  speech speech--question'>Galery of projects</p>

      <div className='projects__box'>
        {' '}
        <p className='screen-text speech  '>
          Website with free locally advertisments
        </p>
        <p className='screen-text speech  '>
          This project is just part of bigger which is not finihsed yet.
        </p>
        <div className='projects__galery'>
          <img className='projects__image' src={photo} alt='house' />
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
