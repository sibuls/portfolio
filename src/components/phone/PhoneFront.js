import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';

import TechnologiesInfo from '../info/TechnologiesInfo';
import ProjectsInfo from '../info/ProjectsInfo';
import InfoMain from '../info/InfoMain';

import StartInfo from '../info/StartInfo';

const PhoneFront = () => {
  const {
    currentDotColor,
    prevDotColor,
    isFlipped,
    handleRotateClick,
  } = useContext(AppContext);

  const [cv, setCv] = useState('tools');

  const handleCv = (cv) => {
    setCv(cv);
    console.log('zmiana na ' + cv);
  };
  return (
    <div className='phone  phone--front'>
      <div
        className={`phone-part phone__frame phone__frame--${currentDotColor}`}
      ></div>
      <div className='phone-part phone__glass'></div>
      <div className='phone-part phone__screen phone__screen--model-android'>
        <div className='phone__browser  '>
          {/* <div className='cv'>
            <p
              className='   cv__menu '

              // onClick={() => handleCv('tools')}
            >
              Tools
            </p>
            <p
              className=' cv__menu    '

              // onClick={() => handleCv('projects')}
            >
              Projects
            </p>
          </div> */}
          <div
            className='cv__body'
            //  onClick={handleRotateClick}
          >
            {cv === 'tools' ? <TechnologiesInfo /> : <ProjectsInfo />}
          </div>
          {/* <StartInfo />{' '} */}
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
