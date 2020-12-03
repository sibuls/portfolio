import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';

import TechnologiesInfo from '../info/TechnologiesInfo';
import ProjectsInfo from '../info/ProjectsInfo';
import InfoMain from '../info/InfoMain';

import StartInfo from '../info/StartInfo';
import Contact from '../Contact';

const PhoneFront = () => {
  const {
    currentDotColor,
    prevDotColor,
    isFlipped,
    cv,
    handleCv,
    handleRotateClick,
    emailSend,
  } = useContext(AppContext);

  const cvDiv = (
    <div className='cv'>
      <div
        className='cv__body'
        // onClick={cv === 'tools' ? handleRotateClick : null}
        onClick={handleRotateClick}
      >
        {cv === 'tools' ? <TechnologiesInfo /> : <ProjectsInfo />}
        {/* {cv === 'tools' ? <TechnologiesInfo /> : <Contact />} */}
      </div>
      <div className='cv__menu'>
        <p className='cv__button' onClick={() => handleCv('tools')}>
          Tools
        </p>
        <p className='cv__button' onClick={() => handleCv('projects')}>
          Projects
        </p>{' '}
      </div>
    </div>
  );

  console.log(emailSend);

  return (
    <div className='phone  phone--front'>
      <div
        className={`phone-part phone__frame phone__frame--${currentDotColor}`}
      ></div>
      <div className='phone-part phone__glass'></div>
      <div className='phone-part phone__screen phone__screen--model-android'>
        <div className='phone__browser phone__browser--cv '>
          {emailSend === false ? cvDiv : <Contact />}
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
