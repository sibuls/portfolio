import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import Dot from './Dot';
import Flip from './Flip';
import Phone from './Phone';

import Case from './Case';

import Menu from './Menu';

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
    handleCardClick,
  } = useContext(AppContext);

  // hooks declaration
  const [isDotActive, setIsDotActive] = useState(false);
  const [rotateClassName, setRotateClassName] = useState(
    'menu menu--rotate opacity'
  );

  // end of hooks

  setTimeout(() => {
    isDotAnimated ? setRotateClassName('rotate-phone') : null;
  }, 11000);

  const rotate = (
    <Menu
      name={rotateClassName}
      text={'Rotate phone'}
      handleClick={handleRotateClick}
    />
  );

  return (
    <React.Fragment>
      <div className='animation'>
        <div className='animation__android'>
          {/* {rotate} */}

          <div className='animation__android-container'>
            <div className='animation__android-box'>
              <div className='animation__dots-box'>
                <div className='animation__dots-box animation__dots-box--cover'>
                  {rotate}

                  <Menu
                    name={'cv'}
                    text={'Projects'}
                    handleClick={() =>
                      handleCardClick(
                        'aboutme',
                        'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
                      )
                    }
                  />
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
          <Menu
            name={'aboutme'}
            text={'Who am I'}
            handleClick={() =>
              handleCardClick(
                'aboutme',
                'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
              )
            }
          />
          <Menu
            name={'description'}
            text={"What I'm doing"}
            handleClick={() =>
              handleCardClick(
                'description',
                'translate(-50%, 0%) skew(21deg, -5deg) scale(1.2) rotate(5deg);'
              )
            }
          />
          <Menu
            name={'steps'}
            text={'Steps'}
            ontop={true}
            handleClick={() =>
              handleCardClick(
                'steps',
                'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
              )
            }
          />
          <Menu
            name={'summary'}
            text={'Summary'}
            ontop={true}
            handleClick={() =>
              handleCardClick(
                'projects',
                'translate(-50%, 0%) skew(8deg, 5deg) scale(1.2) rotate(-95deg); ',

                '-10%' /* top -  default top is 0% */
              )
            }
          />

          {/* <AboutMe /> */}
          {/* <Description /> */}
          {/* <Steps />
          <Projects /> */}

          <div className='animation__iphone-container'>
            <Phone />
          </div>
        </div>
        <div className='animation__footer'>
          {' '}
          <Menu
            name={'email'}
            text={'email'}
            handleClick={() => handleEmailClick('email')}
          />
          <Menu
            name={'linkedin'}
            text={'linkedin'}
            handleClick={() => handleLinkedinClick('linkedin')}
          />
          <div className='animation__footer-container'>
            <Case />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AnimationFrame;
