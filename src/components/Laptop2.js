import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';

const Laptop = () => {
  const { isAboutMeActive } = useContext(AppContext);
  // console.log(isAboutMeActive);
  return (
    <div className='laptop laptop-anime'>
      <div className='laptop-top'>
        <div className='laptop-top__frame'></div>
        <div className='laptop-top__screen'>
          {isAboutMeActive ? <AboutMeInfo /> : <p>informacja</p>}
        </div>

        <div className='laptop-top__camera'></div>

        <div className='laptop-top__back'></div>
      </div>
      <div className='laptop-main'>
        <div className='laptop-main__frame'></div>
        <div className='laptop-main__keyboard'>
          {/* {isAboutMeActive ? <AboutMeInfo /> : <p>informacja</p>} */}
          <div className='laptop-main__keys'></div>{' '}
          <div className='toouchbar'></div>
        </div>

        <div className='laptop-main__bottom2'></div>
      </div>
    </div>
  );
};

export default Laptop;
