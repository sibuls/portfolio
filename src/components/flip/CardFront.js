import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import Phone from '../phone/Phone';
import PhoneFront from '../phone/PhoneFront';

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
      {/* <div className={isFlipped ? 'front   ' : 'front  '}> */}
      <PhoneFront />
      {/* <Phone /> */}
    </div>
  );
};

export default CardFront;
