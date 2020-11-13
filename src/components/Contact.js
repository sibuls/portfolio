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
          'translate(-50%, 0%) skew(21deg, -7deg) scale(1.15) rotate(10deg); ',
          '53%' /* height - default height is 50% */
        )
      }
    >
      {/* <BusinessCard text='Who am I' /> */}
      <BusinessCard text='Contact' />
    </div>
  );
};

export default Contact;
