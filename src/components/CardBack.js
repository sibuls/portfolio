import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import PhoneBack from './PhoneBack';

const CardBack = (props) => {
  // AppContext
  const { isFlipped } = useContext(AppContext);

  // hooks

  return (
    <div className={isFlipped ? 'back opacity  ' : 'back  '}>
      <PhoneBack />
    </div>
  );
};

export default CardBack;
