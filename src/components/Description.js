import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import BusinessCard from './BusinessCard';

const Description = () => {
  const { handleBusinessCardClick } = useContext(AppContext);
  return (
    <span
      className='text-body__menu text-body__menu--description'
      onClick={() =>
        handleBusinessCardClick(
          'description',
          'translate(-50%, 0%) skew(21deg, -5deg) scale(1.2) rotate(-2deg);'
          // 'translate(-50%, 0%) skew(21deg, -5deg) scale(1.5) rotate(-32deg);'
        )
      }
    >
      What I'm doing
    </span>
  );
};

export default Description;
