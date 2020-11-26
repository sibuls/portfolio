import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const Dot = ({ color }) => {
  // appcontext
  const { currentDotColor, prevDotColor, handleDotClick } = useContext(
    AppContext
  );

  return (
    <div
      className={`animation__dot animation__dot--${color}   ${
        color === currentDotColor && !prevDotColor
          ? 'animation__dot--anime'
          : null
      }         `}
      onClick={() => handleDotClick(color)}
    ></div>
  );
};

export default Dot;
