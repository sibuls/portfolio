import React, { useContext, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { AppContext } from '../AppContext';
import Laptop from './Laptop';
import Phone from './Phone';
import Front from './Front';
import Back from './Back';

const Flip = () => {
  const { isFlipped } = useContext(AppContext);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Back>This is the back of the card.</Back>
      <Front>This is the front of the card.</Front>
    </ReactCardFlip>
  );
};

export default Flip;
