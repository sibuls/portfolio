import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';
const Contact = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <span
      className='text-body__span text-body__span--contact'
      onClick={() =>
        handleBusinessCardClick(
          'contact',
          'translate(-50%, 0%) skew(21deg, -7deg) scale(1.15) rotate(10deg); '
          // '53%' /* height - default height is 50% */
        )
      }
    >
      Contact
    </span>
  );
};

export default Contact;
