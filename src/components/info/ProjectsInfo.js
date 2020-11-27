import React from 'react';
import photo from '../../images/preview.jpg';

const ProjectsInfo = () => {
  return (
    <div className='projects'>
      <p className='screen-text speech speech--question  speech--technologies'>
        Are they any projects?
      </p>

      <div className='projects__box'>
        {' '}
        <p className='screen-text speech  '>
          Project I am currently working on. Website with free locally
          advertisments
        </p>
        <div className='projects__galery'>
          <img className='projects__image' src={photo} alt='house' />
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
