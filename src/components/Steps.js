import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

function Steps() {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <div
      className='menu  steps'
      //  className='menu  steps  steps--unorganized'
      onClick={() =>
        handleBusinessCardClick(
          'steps',
          'translate(-50%, -50%) skew(18deg, -10deg) scale(1.3) rotate(10deg); '
        )
      }
    >
      <BusinessCard text={'Steps'} />
    </div>
  );
}

export default Steps;
