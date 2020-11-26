import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

function Steps() {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <div className='menu steps'>
      <div className='menu__shadow menu__shadow--top'></div>
      <div
        className='menu__text menu__text--top'
        onClick={() =>
          handleBusinessCardClick(
            'steps',
            'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
          )
        }
      >
        <p>Steps</p>
      </div>
      <div className='menu__square menu__square--top'></div>{' '}
    </div>
  );
}

export default Steps;
