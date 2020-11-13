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
          'translate(-50%, 0%) skew(4deg, 12deg) scale(1.3) rotate(-5deg);',
          '52%' /* height - default height is 50% */,
          '25%' /* top -  default top is 30% */
        )
      }
    >
      <BusinessCard text={'Steps'} />
    </div>
  );
}

export default Steps;
