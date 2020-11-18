import React from 'react';
import Info from './Info';
import Phone from './Phone';

const Front = () => {
  return (
    <div className='blue'>
      <div className='phone  '>
        <div className='phone-part phone__frame phone__frame--gold'></div>
        <div className='phone-part phone__glass'></div>
        <div className='phone-part phone__screen phone__screen--modelx'>
          <div className='phone__browser'>
            <Info />
          </div>
        </div>
        <div className='phone-part phone__microphone phone__microphone--second'></div>
        <div className='phone-part phone__front-camera'></div>
        <div className='phone-part phone__home-button phone__home-button--modelx'>
          <div className='phone-part phone__home-button-inside'></div>
        </div>

        <div className='phone-part phone__bottom phone__bottom--gold'></div>
      </div>
    </div>
  );
};

export default Front;
