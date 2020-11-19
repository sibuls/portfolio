import React, { useContext, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { AppContext } from '../AppContext';

import CardBack from './CardBack';
import CardFront from './CardFront';

const Flip = () => {
  const { isFlipped } = useContext(AppContext);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection='horizontal'
      flipSpeedBackToFront='0.3'
      flipSpeedFrontToBack='0.3'
    >
      <CardBack>This is the front of the card.</CardBack>
      <CardFront>This is the front of the card.</CardFront>
    </ReactCardFlip>
  );
};

export default Flip;
