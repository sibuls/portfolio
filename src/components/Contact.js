import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';
const Contact = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div
      className='menu contact'
      // className='menu   contact contact--unorganized'
      onClick={() =>
        handleBusinessCardClick(
          'contact',
          'translate(-50%, -50%) skew(10deg, -10deg) scale(1.2) rotate(-4deg); '
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Contact' />
    </div>
  );
};

export default Contact;
