import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../AppContext';
import styled, { keyframes } from 'styled-components';

import Dot from './Dot';
import Flip from './flip/Flip';
import Phone from './phone/Phone';

import Case from './Case';

import Menu from './Menu';
import StartAnimation from './StartAnimation';

import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import bootstrap from '../images/bootstrap.jpg';
import npm from '../images/npm.jpg';
import node from '../images/node.jpg';
import webpack from '../images/webpack.jpg';
import git from '../images/git.jpg';

const Box = styled.div`
  animation: ${({ time }) => time} ${({ anime }) => anime} ease-out infinite
    alternate-reverse;
`;

const AnimationFrame = () => {
  const {
    dotColor,
    isDotAnimated,
    isFlipped,
    isFlippedDone,
    emailSend,
    prevEmailSend,
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
      text={isFlipped ? 'Show back of phone' : 'Back to screen'}
      handleClick={handleRotateClick}
    />
  );

  const myRef = useRef(null);

  const handleScroll = () => {
    emailSend === true && prevEmailSend === false
      ? window.scrollTo({
          behavior: 'smooth',
          top: myRef.current.offsetTop,
        })
      : null;
  };
  handleScroll();

  const boxAnime1 = keyframes`
  0% { 
  opacity:0;

  }

  

  50% {      
  opacity:0.2;  }

  
  100% { 

  opacity:0;
  }

`;

  return (
    <React.Fragment>
      <div className='animation'>
        <div className='animation__iphone'>
          <Box anime={boxAnime1} time={4 + 's'} className='animation__html'>
            <img src={html} alt='' className='technologies__image' />
          </Box>{' '}
          <Box anime={boxAnime1} time={7 + 's'} className='animation__css'>
            <img src={css} alt='' className='technologies__image' />
          </Box>
          {/* <Box anime={boxAnime1} time={4 + 's'} className='animation__js'>
            <img src={js} alt='' className='technologies__image' />
          </Box> */}
          {/* <StartAnimation name={'iphone'} /> */}
          {/* <StartAnimation /> */}
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
            name={'faq'}
            text={'FAQ'}
            ontop={true}
            handleClick={() =>
              handleCardClick(
                'faq',
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
        <div className='animation__android' ref={myRef}>
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
          <StartAnimation name={'android'} />
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
                <Flip />
              </div>
            </div>
          </div>
        </div>
        <div className='animation__footer'>
          <StartAnimation name={'footer'} />

          <div className='animation__footer-wraper'>
            {' '}
            <Menu
              name={'email'}
              text={'Contact'}
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
