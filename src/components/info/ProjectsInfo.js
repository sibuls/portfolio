import React from 'react';
import photo from '../../images/preview.jpg';

const ProjectsInfo = () => {
  const handleLinkedin = () => {
    const newWindow = window.open(
      'https://epic-montalcini-9ef0c7.netlify.app/',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='projects'>
      <p className='screen-text speech speech--question  speech--cv'>
        Are they any projects?
      </p>

      <div className='projects__box'>
        {' '}
        <p className='screen-text speech  '>
          I am currently working on - free locally advertisments. Please keep in
          mind that it's still not done, and at the moment{' '}
          <span className='screen-text--warning '>
            media queries are just for mobile
          </span>
          .
        </p>
        <div className='projects__galery'>
          <img
            className='projects__image'
            src={photo}
            alt='house'
            onClick={handleLinkedin}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
