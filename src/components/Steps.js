import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

function Steps() {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <span
      className='text-body__menu text-body__menu--steps'
      onClick={() =>
        handleBusinessCardClick(
          'steps',
          'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
        )
      }
    >
      Steps
    </span>
  );
}

export default Steps;
