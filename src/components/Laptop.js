import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import '../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import Dot from './Dot';

// assign components to animations - have to be outside of the function, but we can get to all animation by props
const DivAnimation = styled.div`
  animation: 0.5s ${(props) => props.phoneShowMain} ease-out forwards;
`;

const PhoneBottomBorder = styled.div`
  animation: 7s 0s ${(props) => props.phoneBottomBorderAnime} ease-out forwards;
`;

const PhoneBottom = styled.div`
  animation: 9s 0s ${(props) => props.phoneBottomAnime} ease-out forwards;
`;
const Frame = styled.div`
  animation: 12s 0s ${(props) => props.frameAnime} ease-out forwards;
`;

const Camera = styled.div`
  animation: 1s 0s ${(props) => props.accesoriesAnime} ease-out forwards;
`;

const BackCameraMain = styled.div`
  animation: 8.5s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraTop = styled.div`
  animation: 2.8s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraMiddle = styled.div`
  animation: 2.2s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraBottom = styled.div`
  animation: 3.1s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
// end of assign components to animations

// --- main function start ---

const Laptop = (props) => {
  const { currentDotColor, prevDotColor } = useContext(AppContext);

  // main animation - makes whole phone visible
  const phoneShowMain = keyframes`
  0% {
 
  // transform: translate(-50%, 0%) skew(21deg, -7deg) scale(1.15) rotate(10deg) ;
  transform: translate(-50%, 0%)   scale(1.15) skew(0deg, -8deg);
  opacity:0; 
 }

  100% {
  transform: translate(-50%, 0%)   scale(1.15) skew(0deg, -8deg);
  opacity:1; 
 
 }
  `;

  // fist animation of phone parts - gold bottom

  //  second animation of phone parts - white frame

  //  fifth animation on phone parts - accesories: button, camera, speaker
  const accesoriesAnime = keyframes`
  0% { opacity:0;}
  60% { opacity:0;}
  100% {opacity:1;}
  `;

  const backCameraAnime = keyframes`
    0% {  ${
      currentDotColor
        ? 'opacity:1;  background:rgba(0, 0, 0, 0);'
        : 'opacity:0;'
    }
 
    ${prevDotColor && currentDotColor ? 'opacity:1; ' : 'opacity:0;'}
        // top:0;
        left:10%;
        }


        90% {  ${
          currentDotColor && !prevDotColor
            ? '  box-shadow: 0px 0px 2px 0px #b3b2b1;'
            : null
        }}

 
        99.8% {   ${
          currentDotColor
            ? 'opacity:1;  background:rgba(0, 0, 0, 0);'
            : 'opacity:0; '
        }
        ${prevDotColor && currentDotColor ? 'opacity:1; ' : 'opacity:0;'}
        // top:0;
        left:10%;
        }

        99.9% {   ${
          currentDotColor
            ? 'opacity:1;  background:rgba(0, 0, 0, 0)'
            : 'opacity:0;'
        }
        ${prevDotColor && currentDotColor ? 'opacity:1; ' : 'opacity:0;'}
        // top:0;
        left:10%;
        }

        100% {   ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}  
       
          left:10%;
          // width: 18px;
          // height: 18px;
       
         ${currentDotColor === 'blue' ? 'background:rgb(3, 21, 50)' : null}
         ${currentDotColor === 'black' ? 'background:black' : null}
         ${currentDotColor === 'silver' ? 'background:darkgrey' : null}

        }
  `;
  const phoneBottomBorderAnime = keyframes`
  0% {   opacity:0;}
  80% {   opacity:0;}
   100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
    }
  `;

  const frameAnime = keyframes`
  0% {  opacity:0; }
  90% {  opacity:0; }
  100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
  `;

  const phoneBottomAnime = keyframes`
  0% {   opacity:0;}
  90% {  opacity:0; }
  100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}

  `;

  console.log(prevDotColor);
  // --end of loading page animations--

  //--start animations: transform phone to tablet--

  // return Phone function
  return (
    <React.Fragment>
      <DivAnimation phoneShowMain={phoneShowMain} className='phone  '>
        {' '}
        <Frame
          frameAnime={frameAnime}
          className={`phone-part phone__frame phone__frame--${currentDotColor}`}
        ></Frame>
        <Camera
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__dot-camera none'
        ></Camera>
        <BackCameraMain
          backCameraAnime={backCameraAnime}
          className={`animation__dot animation__dot--main`}
        ></BackCameraMain>
        <BackCameraTop
          backCameraAnime={backCameraAnime}
          className={`animation__dot animation__dot--top`}
        ></BackCameraTop>
        <BackCameraMiddle
          backCameraAnime={backCameraAnime}
          className={`animation__dot animation__dot--middle`}
        ></BackCameraMiddle>
        <BackCameraBottom
          backCameraAnime={backCameraAnime}
          className={`animation__dot animation__dot--bottom`}
        ></BackCameraBottom>
        <PhoneBottom
          phoneBottomAnime={phoneBottomAnime}
          className={`phone-part phone__bottom phone__bottom--${currentDotColor}`}
        ></PhoneBottom>
        <PhoneBottomBorder
          phoneBottomBorderAnime={phoneBottomBorderAnime}
          className='phone-part phone__bottom phone__bottom--border'
        ></PhoneBottomBorder>
      </DivAnimation>
    </React.Fragment>
  );
};

export default Laptop;
