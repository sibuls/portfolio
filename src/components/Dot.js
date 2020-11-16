import React from 'react';

const Dot = (props) => {
  return (
    <div className={`animation__dot animation__dot--${props.color}`}></div>
  );
};

export default Dot;
