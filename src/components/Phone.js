import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';
import AboutMeInfo from './AboutMeInfo';
import DescriptionInfo from './DescriptionInfo';
import '../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import Info from './Info';

// assign components to animations - have to be outside of the function, but we can get to all animation by props
const DivAnimation = styled.div`
  animation: 2s ${(props) => props.phoneShowMain} ease-out forwards;
`;

const PhoneBottom = styled.div`
  animation: 1s 0s ${(props) => props.phoneBottomAnime} ease-out 1,
    3s 0s ${(props) => props.phoneToTabletBottom} ease-out forwards;
`;
const Frame = styled.div`
  animation: 3s 0s ${(props) => props.frameAnime} ease-out 1,
    4s 1s ${(props) => props.phoneToTabletFrame} ease-out forwards;
`;
const Screen = styled.div`
  animation: 5s 0s ${(props) => props.screenAnime} ease-out 1 // ,
;
`;
const Browser = styled.div`
  animation: 1s 0s ${(props) => props.phoneToTabletBrowser} ease-out forwards,
    ${(props) => props.fadeTime} ${(props) => props.fade} ease-out 1;
`;
const Glass = styled.div`
  animation: 4s 0s ${(props) => props.glassAnime} ease-out 1,
    4s 1.5s ${(props) => props.phoneToTabletGlass} ease-out forwards;
`;
const ButtonAnime = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
const Microphone = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
const Camera = styled.div`
  animation: 6s 0s ${(props) => props.accesoriesAnime} ease-out 1;
`;
// end of assign components to animations

// --- main function start ---

const Phone = (props) => {
  const { menuActive, currentTransform, prevTransform } = useContext(
    AppContext
  );
  //
  const animationStartTop = menuActive === 'start' ? '50%' : '56%';
  const animationStartLeft = menuActive === 'start' ? '150%' : '51%';
  const fadeTime = menuActive === 'start' ? '10s' : '1s';

  // --loading page animations--

  // main animation - makes whole phone visible
  const phoneShowMain = keyframes`
  0% {
  top:${animationStartTop};
  left:${animationStartLeft};
  // transform: translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);
  transform: ${prevTransform}
  }


  // 10%{
  // top: 56%;
  // left: 51%;
  // }
  
  100% {
    ${menuActive === 'start' ? '  ' : null} 
    ${
      menuActive === 'aboutme'
        ? ' transform: translate(-50%, -50%) skew(5deg, 5deg) scale(1.25) rotate(-5deg);'
        : null
    }
    ${
      menuActive === 'description'
        ? 'transform:translate(-50%, -50%) skew(10deg, -5deg) scale(1.2) rotate(-2deg); '
        : null
    }
    ${
      menuActive === 'steps'
        ? ' transform: translate(-50%, -50%) skew(18deg, -10deg) scale(1.3) rotate(10deg); '
        : null
    }
    ${
      menuActive === 'projects'
        ? ' transform: translate(-50%, -50%) skew(4deg, 12deg) scale(1.2) rotate(-5deg); '
        : null
    }
    ${
      menuActive === 'contact'
        ? 'transform: translate(-50%, -50%) skew(10deg, -10deg) scale(1.2) rotate(-4deg); '
        : null
    }
}
  
  `;

  // animation black/white screen - works for start animation and changing menu
  const fade = keyframes`
 0%  {opacity:0;}
 10% { ${menuActive === 'start' ? ' opacity:0;' : 'opacity:0.1;'} }
 20% {
       ${menuActive === 'start' ? ' opacity:0;' : null} 
       ${menuActive === 'aboutme' ? ' opacity:0.2;' : null}
       ${menuActive === 'description' ? ' opacity:0.2;' : null}
       ${menuActive === 'projects' ? ' opacity:0.2;' : null}
       ${menuActive === 'contact' ? ' opacity:0.2;' : null}
       ${menuActive === 'steps' ? ' opacity:0.2;' : null}
 }
 60% { ${menuActive === 'start' ? ' opacity:0;' : null}}
 100% {'opacity:1' }
 `;

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

  //  fifth animation on phone parts - accesories: button, camera, speaker
  const accesoriesAnime = keyframes`
  0% {${menuActive === 'start' ? 'opacity:0;' : null}}
  60% {${menuActive === 'start' ? 'opacity:0;' : null}}
  `;

  // --end of loading page animations--

  //--start animations: transform phone to tablet--

  // first animation of transform - bottom
  const phoneToTabletBottom = keyframes`
  0% {${menuActive === 'steps' ? 'height:100%;' : null}}
  10% {${menuActive === 'steps' ? 'height:100%;' : null}}
  80% {${menuActive === 'steps' ? 'height:100%;' : null}}
  100% {${menuActive === 'steps' ? '' : null}}
  `;

  // second animation of transform - frame and glass
  const phoneToTabletFrame = keyframes`
  0% {${menuActive === 'steps' ? '' : null}}
  100% {${menuActive === 'steps' ? ' ' : null}}
  `;

  const phoneToTabletGlass = keyframes`
  0% {${menuActive === 'steps' ? '' : null}}
  100% {${menuActive === 'steps' ? '  ' : null}}
  `;

  // third animation of transform - browser

  // const phoneToTabletScreen = keyframes`
  // 0% {${menuActive === 'steps' ? '  background:black; ' : null}}
  // 30% {${menuActive === 'steps' ? ' background:black;  ' : null}}

  // 99% {${menuActive === 'steps' ? 'background:black;  ' : null}}

  // 100% {${menuActive === 'steps' ? ' ' : null}}
  // `;

  const phoneToTabletBrowser = keyframes`
  0% {${menuActive === 'steps' ? ' opacity:0;' : null}}
  60% {${menuActive === 'steps' ? '  opacity:0;' : null}}
  100% {${menuActive === 'steps' ? '  ' : null}}
  `;

  // fourth animation of transform -accesories

  //--end animations: transform phone to tablet--
  //
  // return Phone function
  return (
    <React.Fragment>
      <DivAnimation
        phoneShowMain={phoneShowMain}
        // className='phone '
        className={`${
          props.color === 'white' ? 'phone' : 'phone phone--black'
        }`}
      >
        {' '}
        <Frame
          frameAnime={frameAnime}
          phoneToTabletFrame={phoneToTabletFrame}
          // className='phone-part phone__frame'
          className={`${
            props.color === 'white'
              ? 'phone-part phone__frame'
              : 'phone-part phone__frame phone__frame--black'
          }`}
        ></Frame>
        <Glass
          glassAnime={glassAnime}
          phoneToTabletGlass={phoneToTabletGlass}
          className='phone-part phone__glass'
        ></Glass>
        <Screen
          screenAnime={screenAnime}
          // phoneToTabletScreen={phoneToTabletScreen}
          className='phone-part phone__screen phone__screen--modelx'
        >
          <Browser
            // screenTime={screenTime}
            // screenFade={screenFade}
            fade={fade}
            fadeTime={fadeTime}
            phoneToTabletBrowser={phoneToTabletBrowser}
            className='phone__browser'
          >
            <Info />
          </Browser>
        </Screen>
        <Microphone
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__microphone phone__microphone--second'
        ></Microphone>
        <Camera
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__front-camera'
        ></Camera>
        <ButtonAnime
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__home-button phone__home-button--modelx'
        >
          <div className='phone-part phone__home-button--inside'></div>
        </ButtonAnime>
        <PhoneBottom
          phoneBottomAnime={phoneBottomAnime}
          phoneToTabletBottom={phoneToTabletBottom}
          className={
            menuActive === 'steps'
              ? 'phone-part phone__bottom phone__bottom--tablet'
              : 'phone-part phone__bottom'
          }
        ></PhoneBottom>
      </DivAnimation>
    </React.Fragment>
  );
};

export default Phone;
