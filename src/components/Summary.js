import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Summary = () => {
  const { handleBusinessCardClick } = useContext(AppContext);

  return (
    <div className='menu summary'>
      <div className='menu__shadow menu__shadow--top'></div>
      <div className='menu__square menu__square--top'></div>{' '}
      <div
        className='menu__text'
        onClick={() =>
          handleBusinessCardClick(
            'projects',
            'translate(-50%, 0%) skew(8deg, 5deg) scale(1.2) rotate(-95deg); ',

            '-10%' /* top -  default top is 0% */
          )
        }
      >
        <p> Summary</p>
      </div>
    </div>
  );
};

export default Summary;
