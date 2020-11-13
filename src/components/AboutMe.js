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
          ' translate(-50%, 0%) skew(4deg, 5deg) scale(1.25) rotate(-7deg);',
          '51%;' /* height - default height is 50% */
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Who am I' />
    </div>
  );
};

export default AboutMe;
