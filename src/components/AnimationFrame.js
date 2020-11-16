import React from 'react';
import Dot from './Dot';
import Phone from './Phone';
import TextBody from './TextBody';

const AnimationFrame = () => {
  return (
    <div className='animation'>
      <TextBody />

      <div className='animation__phone-container'>
        <Phone color={'white'} />
      </div>

      <div className='animation__laptop-container'>
        <Phone color={'black'} />
      </div>
    </div>
  );
};

export default AnimationFrame;
