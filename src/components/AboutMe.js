import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const AboutMe = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu aboutme'>
      <div className='menu__shadow'></div>
      <div className='menu__square'></div>{' '}
      <div
        className='menu__text'
        onClick={() =>
          handleBusinessCardClick(
            'aboutme',
            ' translate(-50%, 0%) skew(4deg, 5deg) scale(1.3) rotate(-7deg);'
          )
        }
      >
        <p> Who am I </p>
      </div>
    </div>
  );
};

export default AboutMe;
