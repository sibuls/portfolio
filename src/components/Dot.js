import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const Dot = ({ color }) => {
  // appcontext
  const {
    currentDotColor,
    prevDotColor,
    handleDotClick,
    isDotAnimated,
  } = useContext(AppContext);

  return (
    <div
      className={`animation__dot animation__dot--${color}   ${
        color === currentDotColor && !prevDotColor
          ? 'animation__dot--anime'
          : null
      }         ${
        !isDotAnimated
          ? `animation__dot-initial animation__dot-initial--${color} `
          : `animation__dot-initial animation__dot-initial--done animation__dot-initial--${color} `
      }  `}
      onClick={() => handleDotClick(color)}
    ></div>
  );
};

export default Dot;
