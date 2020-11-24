import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import AboutMe from './AboutMe';
import Description from './Description';
import Steps from './Steps';
import Projects from './Projects';
import Contact from './Contact';
import Dot from './Dot';
import Flip from './Flip';
import Phone from './Phone';
import BusinessCard from './BusinessCard';
import Case from './Case';
import PhoneBack from './PhoneBack';
import PhoneFront from './PhoneFront';
import CardFront from './CardFront';
import CardBack from './CardBack';
import FlipBehind from './FlipBehind';

import Background from './Background';

const AnimationFrame = () => {
  const {
    dotColor,
    isDotAnimated,
    isFlippedDone,
    handleDotClick,
    handleRotateClick,
    handleFooterClick,
    handleEmailClick,
    handleLinkedinClick,
  } = useContext(AppContext);

  // hooks declaration
  const [isDotActive, setIsDotActive] = useState(false);
  const [rotateClassName, setRotateClassName] = useState(
    'menu menu--rotate opacity'
  );

  // end of hooks

  setTimeout(() => {
    isDotAnimated ? setRotateClassName('menu menu--rotate') : null;
  }, 11000);

  const rotate = (
    <span className={rotateClassName} onClick={handleRotateClick}>
      Rotate phone
    </span>
  );

  return (
    <React.Fragment>
      <div className='animation'>
        <div className='animation__android'>
          {rotate}

          <div className='animation__android-container'>
            <div className='animation__android-box'>
              <div className='animation__dots-box'>
                <div className='animation__dots-box animation__dots-box--cover'>
                  <span className='menu  menu--color '>
                    Choose your favourite color:{' '}
                  </span>
                </div>
                <Dot color={'blue'} />
                <Dot color={'black'} />
                <Dot color={'silver'} />
              </div>
              <div className='phone--flip'>
                {' '}
                <Flip />
              </div>
            </div>
          </div>
        </div>
        <div className='animation__iphone'>
          <AboutMe />
          <Description />
          <Steps />
          <Projects />

          <div className='animation__iphone-container'>
            <Phone />
          </div>
        </div>
        <div className='animation__footer'>
          {' '}
          <span
            className='menu menu--email  '
            onClick={() => handleEmailClick('email')}
          >
            Email
          </span>
          <span
            className='menu  menu--linkedin '
            onClick={() => handleLinkedinClick('linkedin')}
          >
            Linkedin
          </span>
          <div className='animation__footer-container'>
            <Case />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnimationFrame;
