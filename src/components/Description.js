import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Description = () => {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <div
      className='menu  description'
      // className='menu   description description--unorganized'
      onClick={() =>
        handleBusinessCardClick(
          'description',
          'translate(-50%, -50%) skew(10deg, -5deg) scale(1.2) rotate(-2deg); '
        )
      }
    >
      {/* <BusinessCard text='What Im doing' /> */}
      <BusinessCard text="What I'm doing " />
    </div>
  );
};

export default Description;
