import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import DescriptionInfo from './DescriptionInfo';
import '../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import Info from './Info';

const Phone = () => {
  const { isAboutMeActive, menuActive } = useContext(AppContext);
  const animationTop = menuActive === 'start' ? '50%' : '60%';
  const animationLeft = menuActive === 'start' ? '150%' : '51%';
  const animationIterationCount = menuActive === 'start' ? '1' : '8';
  const animationTime = menuActive === 'start' ? '5s' : '0.1s';
  const screenTime = menuActive === 'start' ? '10s' : '1s';
  const screenOpacity = menuActive === 'start' ? '0' : '0.6';

  // main animation - makes whole phone visible
  const phoneShow = keyframes`
  0% {
  top:${animationTop};
  left:${animationLeft};
  transform: translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);
  }
  10%{
  top: 60%;
  left: 51%;
  }`;

  // animation black/white screen - works for start animation and changing menu

  // fist animation of phone parts - gold bottom
  const phoneBottomAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: 60%; left: 51%; opacity:0;' : null}}
  `;

  //  second animation of phone parts - white frame
  const frameAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: -50%; left: 51%; opacity:0;  ' : null}}
  `;

  //  third animation on phone parts - glass
  const glassAnime = keyframes`
  0% {${menuActive === 'start' ? 'top: -30%; left: 0%; opacity:0;' : null}}
  20% {${
    menuActive === 'start'
      ? 'top: -150%; left: 0%; opacity:0;  transform: rotate(-90deg);'
      : null
  }}
  30% {${menuActive === 'start' ? 'top: -130%; left: 0%; opacity:1;' : null}}
  `;

  //  fourth animation on phone parts - black screen (browser)
  const screenAnime = keyframes`
  0% {${menuActive === 'start' ? '   opacity:0;  ' : null}}
  90% {${menuActive === 'start' ? '   opacity:0;    ' : null}}
  `;

  const screenFade = keyframes`
    0% {opacity:0;}
    // 50% {opacity:${screenOpacity}}
    60% {opacity:${screenOpacity}}
    100% {opacity:1;}`;

  const accesoriesAnime = keyframes`
  0% {${menuActive === 'start' ? 'opacity:0;' : null}}
  60% {${menuActive === 'start' ? 'opacity:0;' : null}}
  `;

  //

  const DivAnimation = styled.div`
    animation: ${animationTime} ${phoneShow} ease-out 1;
  `;

  const PhoneBottom = styled.div`
    animation: 1s 0s ${phoneBottomAnime} ease-out 1;
  `;
  const Frame = styled.div`
    animation: 3s 0s ${frameAnime} ease-out 1;
  `;

  const Screen = styled.div`
    animation: 5s 0s ${screenAnime} ease-out 1;
  `;

  const Browser = styled.div`
    animation: ${screenTime} ${screenFade} ease-out 1;
  `;
  const Glass = styled.div`
    animation: 4s 0s ${glassAnime} ease-out 1;
  `;

  const ButtonAnime = styled.div`
    animation: 6s 0s ${accesoriesAnime} ease-out 1;
  `;

  const Microphone = styled.div`
    animation: 6s 0s ${accesoriesAnime} ease-out 1;
  `;
  const Camera = styled.div`
    animation: 6s 0s ${accesoriesAnime} ease-out 1;
  `;

  const phone = () => {
    return (
      <DivAnimation className='phone phone-anime'>
        {' '}
        <Frame className='phone-part phone__frame'></Frame>
        <Glass className='phone-part phone__glass'></Glass>
        <Screen className='phone-part phone__screen phone__screen--modelx'>
          <Browser className='phone__browser'>
            <Info />
          </Browser>
        </Screen>
        <Microphone className='phone-part phone__microphone phone__microphone--second'></Microphone>
        <Camera className='phone-part phone__front-camera'></Camera>
        <ButtonAnime className='phone-part phone__home-button phone__home-button--modelx'>
          <div className='phone-part phone__home-button--inside'></div>
        </ButtonAnime>
        <PhoneBottom className='phone-part phone__bottom'></PhoneBottom>
      </DivAnimation>
    );
  };

  return <div> {phone()}</div>;
};

export default Phone;
