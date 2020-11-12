import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const AboutMe = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu about-me'
      // className='menu about-me about-me--unorganized'
      onClick={() =>
        handleBusinessCardClick(
          'aboutme',
          ' translate(-50%, -50%) skew(5deg, 5deg) scale(1.25) rotate(-5deg);'
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Who am I' />
    </div>
  );
};

export default AboutMe;
