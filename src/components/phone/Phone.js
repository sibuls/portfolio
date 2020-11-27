import React, { useContext, useState } from 'react';

import { AppContext } from '../../AppContext';

import '../../sass/style.scss';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

import InfoMain from '../info/InfoMain';

import StartInfo from '../info/StartInfo';

// assign components to animations - have to be outside of the function, but we can get to all animation by props
const DivAnimation = styled.div`
  animation: 0.5s ${(props) => props.phoneShowMain} ease-out forwards;
`;

const PhoneBottom = styled.div`
  animation: 1s 0s ${(props) => props.phoneBottomAnime} ease-out 1;
  // 3s 0s ${(props) => props.phoneToTabletBottom} ease-out forwards;
`;
const Frame = styled.div`
  animation: 3s 0s ${(props) => props.frameAnime} ease-out 1;
`;
const Screen = styled.div`
  animation: 5s 0s ${(props) => props.screenAnime} ease-out 1 // ,
;
`;
const Browser = styled.div`
  animation: ${(props) => props.fadeTime} ${(props) => props.fade} ease-out 1;
`;
const Glass = styled.div`
  animation: 4s 0s ${(props) => props.glassAnime} ease-out 1;
`;
const Button = styled.div`
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
  const {
    menuActive,
    prevTransform,
    currentTransform,

    prevTop,
    currentTop,
    showWarning,
    handleCardClick,
  } = useContext(AppContext);
  //
  const animationStartTop = menuActive === 'start' ? '0%' : prevTop;
  const animationStartLeft = menuActive === 'start' ? '150%' : '50%';
  const fadeTime = menuActive === 'start' ? '10s' : '1s';

  // --loading page animations--

  // main animation - makes whole phone visible
  const phoneShowMain = keyframes`
  0% {
  top:${animationStartTop};
  left:${animationStartLeft};
  transform: ${prevTransform};
 }

  100% {
  transform: ${currentTransform};
  top: ${currentTop};
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

  // first animation of phone parts - gold bottom
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

  const phoneToTabletBrowser = keyframes`
  0% {${menuActive === 'steps' ? ' opacity:0;' : null}}
  60% {${menuActive === 'steps' ? '  opacity:0;' : null}}
  100% {${menuActive === 'steps' ? '  ' : null}}
  `;

  //--end animations: transform phone to tablet--
  //
  // return Phone function

  return (
    <React.Fragment>
      <DivAnimation
        phoneShowMain={phoneShowMain}
        className='phone  phone--main'
        // className='phone  phone--front'
      >
        {' '}
        <Frame
          frameAnime={frameAnime}
          // phoneToTabletFrame={phoneToTabletFrame}
          className='phone-part phone__frame phone__frame--gold'
        ></Frame>
        <Glass
          glassAnime={glassAnime}
          phoneToTabletGlass={phoneToTabletGlass}
          className='phone-part phone__glass'
        ></Glass>
        <Screen
          screenAnime={screenAnime}
          className='phone-part phone__screen phone__screen--modelx'
        >
          <Browser
            fade={fade}
            fadeTime={fadeTime}
            // phoneToTabletBrowser={phoneToTabletBrowser}
            className='phone__browser'
          >
            <InfoMain />
            {/* <StartInfo /> */}
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
        <Button
          accesoriesAnime={accesoriesAnime}
          className='phone-part phone__home-button phone__home-button--modelx'
        >
          <div
            className='phone-part phone__home-button-inside'
            onClick={() =>
              handleCardClick(
                'main',
                'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-365deg);',
                '0%' /* top -  default top is 0% */,
                menuActive === 'main' || menuActive === 'start'
                  ? true
                  : false /*  trigged fot button */
              )
            }
          ></div>
        </Button>
        {/* <div className='phone-part phone__arrow'>
          <div className='phone-part  phone__triangle'></div>

          <div className='phone-part phone__line'></div>
        </div>
        <div className='phone-part phone__squares'>
          <div className='phone-part phone__square'></div>
          <div className='phone-part phone__square phone__square--bottom'></div>
        </div> */}
        <PhoneBottom
          phoneBottomAnime={phoneBottomAnime}
          phoneToTabletBottom={phoneToTabletBottom}
          className='phone-part phone__bottom phone__bottom--gold'
        ></PhoneBottom>
      </DivAnimation>
    </React.Fragment>
  );
};

export default Phone;
