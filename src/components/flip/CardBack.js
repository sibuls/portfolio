import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';

import PhoneBack from '../phone/PhoneBack';

const CardBack = () => {
  // AppContext
  const { isFlipped, handleRotateClick } = useContext(AppContext);

  // hooks

  return (
    <div
      className={isFlipped ? 'back opacity  ' : 'back  '}
      // className={isFlipped ? 'back   ' : 'back  '}

      // onClick={handleRotateClick}
    >
      <PhoneBack />
    </div>
  );
};

export default CardBack;
