import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';

import Dot from './Dot';
import Flip from './flip/Flip';
import Phone from './phone/Phone';

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
          {/* 
          <Menu
            name={'cv'}
            text={'Projects'}
            handleClick={() =>
              handleCardClick(
                'aboutme',
                'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(-5deg);'
              )
            }
          /> */}
          <div className='animation__android-container'>
            <div className='animation__android-box'>
              <div className='animation__dots-box'>
                <div className='animation__dots-box animation__dots-box--cover'>
                  {rotate}

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
                'translate(-50%, 0%) skew(4deg, 12deg) scale(1.25) rotate(0deg);'
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
                'translate(-50%, 0%) skew(6deg, 12deg) scale(1.2) rotate(4deg);'
              )
            }
          />
          <Menu
            name={'summary'}
            text={'FAQ'}
            ontop={true}
            handleClick={() =>
              handleCardClick(
                'projects',
                // 'translate(-50%, 0%) skew(8deg, 5deg) scale(1.2) rotate(-95deg); ',
                'translate(-50%, 0%) skew(5deg, 5deg) scale(1.25) rotate(-4deg); '

                // '-10%' /* top -  default top is 0% */
              )
            }
          />

          <div className='animation__iphone-container'>
            <Phone />
          </div>
        </div>
        <div className='animation__footer'>
          <div className='animation__footer-wraper'>
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
      </div>
    </React.Fragment>
  );
};

export default AnimationFrame;
