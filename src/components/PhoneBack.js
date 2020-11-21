import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import '../sass/style.scss';
import styled, { keyframes } from 'styled-components';
import BusinessCard from './BusinessCard';

// assign components to animations - have to be outside of the function, but we can get to all animation by props
const DivAnimation = styled.div`
  animation: 0s ${(props) => props.phoneShowMain} ease-out forwards;
`;

const PhoneBottomBorder = styled.div`
  animation: 6.2s 0s ${(props) => props.phoneBottomBorderAnime} ease-out
    forwards;
`;

const PhoneBottom = styled.div`
  animation: 5s 0s ${(props) => props.phoneBottomAnime} ease-out forwards;
`;
const Frame = styled.div`
  animation: 5.1s 0s ${(props) => props.frameAnime} ease-out forwards;
`;

const CameraBox = styled.div`
  animation: 3s 0s ${(props) => props.cameraBoxAnime} ease-out forwards;
`;

const BackCameraMain = styled.div`
  animation: 2.5s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraTop = styled.div`
  animation: 3.2s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraMiddle = styled.div`
  animation: 4.1s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
const BackCameraBottom = styled.div`
  animation: 4.5s 0s ${(props) => props.backCameraAnime} ease-out forwards;
`;
// end of assign components to animations

// --- main function start ---

const PhoneBack = () => {
  const {
    currentDotColor,
    prevDotColor,
    isFlipped,
    isDotAnimated,
  } = useContext(AppContext);

  // main animation - makes whole phone visible
  const phoneShowMain = keyframes`
  0% {${!isFlipped ? 'opacity:1; ' : ' opacity:0; '} }

  100% { 
    //  opacity:1; 
     ${!isFlipped ? 'opacity:1; ' : 'opacity:0;'} 
 }`;

  const backCameraAnime = keyframes`

    0% {  ${!prevDotColor ? 'opacity:0; ' : '  opacity:1; background:white;'} }
 
        59.9% { 
        ${
          currentDotColor === 'blue'
            ? 'opacity:0; background:rgb(3, 21, 50);'
            : null
        }
          ${currentDotColor === 'black' ? 'opacity:0; background:black;' : null}
          ${
            currentDotColor === 'silver'
              ? 'opacity:0; background:darkgrey;'
              : null
          }
          ${!prevDotColor ? 'opacity:0;  ' : '   opacity:1;'} 
          }
        60% { 
         ${
           currentDotColor == 'blue'
             ? 'opacity:1; background:rgb(3, 21, 50);'
             : 'opacity:0;'
         }
         ${currentDotColor == 'black' ? 'opacity:1; background:black;' : null}
         ${
           currentDotColor == 'silver'
             ? 'opacity:1; background:darkgrey;'
             : null
         }
        }
        99% { 
          ${
            currentDotColor == 'blue'
              ? 'opacity:1; background:rgb(3, 21, 50);'
              : 'opacity:0;'
          }
          ${currentDotColor == 'black' ? 'opacity:1; background:black;' : null}
          ${
            currentDotColor == 'silver'
              ? 'opacity:1; background:darkgrey;'
              : null
          }
         }
        99% {   ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}  
         ${
           currentDotColor === 'blue'
             ? 'background:rgba(255, 214, 250, 1);'
             : null
         }
         ${
           currentDotColor === 'black'
             ? 'background:rgba(255, 214, 250, 1);'
             : null
         }
         ${
           currentDotColor === 'silver'
             ? 'background:rgba(255, 214, 250, 1);'
             : null
         }

        }
        100% {   ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}  
       ${
         currentDotColor === 'blue'
           ? 'background:rgba(255, 214, 250, 0.8);'
           : null
       }
       ${
         currentDotColor === 'black'
           ? 'background:rgba(255, 214, 250, 0.8);'
           : null
       }
       ${
         currentDotColor === 'silver'
           ? 'background:rgba(255, 214, 250, 1);'
           : null
       }
      }
  `;

  const cameraBoxAnime = keyframes`
 
  0% { ${
    currentDotColor
      ? 'border:white 1px solid; background:transparent;   box-shadow: 0px 0px 0px 0px #414141;'
      : 'background:transparent;   box-shadow: 0px 0px 0px 0px #414141; '
  }
   }
 

    90% { ${
      currentDotColor
        ? 'border:white 1px solid; background:transparent;   box-shadow: 0px 0px 0px 0px #414141;'
        : 'background:transparent;   box-shadow: 0px 0px 0px 0px #414141; '
    }
     }

   100% { ${
     currentDotColor
       ? 'border:white 0px solid; background:black;  box-shadow: 1px 1px 0px 1px #414141;'
       : 'background:transparent;  '
   }
    }
  `;

  // const cameraBoxAnime = keyframes`
  // 0% {   opacity:0; }
  // 90% {   opacity:0; }
  // 100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
  // `;

  const phoneBottomBorderAnime = keyframes`
  0% {     opacity:0;}
  10% {   opacity:0;}
  11% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
}
  90% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
    }
   100% { ${currentDotColor ? 'opacity:0;' : 'opacity:0;'}
    }
  `;

  const frameAnime = keyframes`
  0% {   opacity:0; }
  90% {   opacity:0; }
  100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}
  `;

  const phoneBottomAnime = keyframes`
  0% {   opacity:0;}
  90% {   opacity:0; }
  100% { ${currentDotColor ? 'opacity:1;' : 'opacity:0;'}}

  `;

  // --end of loading page animations--

  //--start animations: transform phone to tablet--

  // return Phone function
  return (
    <React.Fragment>
      <DivAnimation
        phoneShowMain={phoneShowMain}
        className=' phone phone--back'
      >
        {' '}
        <Frame
          frameAnime={frameAnime}
          className={`phone-part phone__frame phone__frame--${currentDotColor}`}
        ></Frame>
        <CameraBox
          cameraBoxAnime={cameraBoxAnime}
          className='phone-part phone__camera-box'
        >
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
            className={`animation__dot animation__dot--bottom animation__dot--opacity`}
          ></BackCameraBottom>
        </CameraBox>
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

export default PhoneBack;
