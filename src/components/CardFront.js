import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import PhoneFront from './PhoneFront';

const CardFront = () => {
  // AppContext
  const { isDotAnimated, isFlipped } = useContext(AppContext);

  // hooks

  // const [isAnimated, setIsAnimated] = useState('front opacity');

  // setTimeout(() => {
  //   isDotAnimated ? setIsAnimated('front') : null;
  // }, 8000);

  return (
    <div className={isFlipped ? 'front   ' : 'front opacity '}>
      <PhoneFront />
    </div>
  );
};

export default CardFront;
