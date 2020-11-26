import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import PhoneBack from './PhoneBack';

const CardBack = (props) => {
  // AppContext
  const { isFlipped, handleRotateClick } = useContext(AppContext);

  // hooks

  return (
    <div
      className={isFlipped ? 'back opacity  ' : 'back  '}
      // onClick={handleRotateClick}
    >
      <PhoneBack />
    </div>
  );
};

export default CardBack;
