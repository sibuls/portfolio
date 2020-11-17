import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const Dot = (props) => {
  // appcontext
  const { currentDotColor, prevDotColor, handleDotClick } = useContext(
    AppContext
  );

  return (
    <div
      className={`animation__dot animation__dot--${props.color}   ${
        props.color === currentDotColor && !prevDotColor
          ? 'animation__dot--anime'
          : null
      }         `}
      onClick={() => handleDotClick(props.color)}
    ></div>
  );
};

export default Dot;
