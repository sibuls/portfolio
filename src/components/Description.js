import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Description = () => {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <div className='menu-box'>
      <div className='menu description'>
        <div className='menu__shadow'></div>
        <div className='menu__square'></div>{' '}
        <div
          className='menu__text'
          onClick={() =>
            handleBusinessCardClick(
              'description',
              'translate(-50%, 0%) skew(21deg, -5deg) scale(1.2) rotate(5deg);'
              // 'translate(-50%, 0%) skew(21deg, -5deg) scale(1.5) rotate(-32deg);'
            )
          }
        >
          <p> What I'm doing</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
