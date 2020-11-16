import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const AboutMe = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <span
      className='text-body__menu text-body__menu--about-me'
      onClick={() =>
        handleBusinessCardClick(
          'aboutme',
          ' translate(-50%, 0%) skew(4deg, 5deg) scale(1.3) rotate(-7deg);'
        )
      }
    >
      Who am I{' '}
    </span>
  );
};

export default AboutMe;
