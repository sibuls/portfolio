import React from 'react';

const StartAnimation = (props) => {
  return (
    <div className={`squares--${props.name} `}>
      <div className={`square   square-1 square-1--${props.name} `}></div>
      <div className={`square   square-2 square-2--${props.name} `}></div>
      <div className={`square   square-3 square-3--${props.name} `}></div>
      <div className={`square   square-4 square-4--${props.name} `}></div>
      <div className={`square   square-5 square-5--${props.name} `}></div>
    </div>
  );
};

export default StartAnimation;
