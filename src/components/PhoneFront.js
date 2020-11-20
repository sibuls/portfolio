import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import InfoFront from './InfoFront';

const PhoneFront = () => {
  const { currentDotColor, prevDotColor, isFlipped } = useContext(AppContext);

  return (
    <div className='phone  phone--front'>
      <div
        className={`phone-part phone__frame phone__frame--${currentDotColor}`}
      ></div>
      <div className='phone-part phone__glass'></div>
      <div className='phone-part phone__screen phone__screen--model-android'>
        <div className='phone__browser'>
          <InfoFront />
        </div>
      </div>
      <div className='phone-part phone__microphone phone__microphone--second'></div>
      <div className='phone-part phone__front-camera'></div>
      {/* <div className='phone-part phone__home-button phone__home-button--modelx'>
          <div className='phone-part phone__home-button-inside'></div>
        </div> */}

      <div
        className={`phone-part phone__bottom phone__bottom--model-android phone__bottom--${currentDotColor}`}
      ></div>
    </div>
  );
};

export default PhoneFront;
