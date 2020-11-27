import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import styled, { keyframes } from 'styled-components';

import html from '../../images/html.jpg';
import css from '../../images/css.jpg';
import js from '../../images/js.jpg';
import react from '../../images/react.jpg';
import bootstrap from '../../images/bootstrap.jpg';
import npm from '../../images/npm.jpg';
import node from '../../images/node.jpg';
import webpack from '../../images/webpack.jpg';
import git from '../../images/git.jpg';

const Question = styled.div`
  animation: 4s 0s ${(props) => props.anime} ease-out forwards;
`;

const HtmlDate = styled.div`
  animation: 4s 0s ${(props) => props.anime} ease-out forwards;
`;
const HtmlBox = styled.div`
  animation: 4s 0s ${(props) => props.anime} ease-out forwards;
`;

const CssDate = styled.div`
  animation: 4s 4s ${(props) => props.anime} ease-out forwards;
`;
const CssBox = styled.div`
  animation: 4s 4s ${(props) => props.anime} ease-out forwards;
`;
const JsDate = styled.div`
  animation: 4s 8s ${(props) => props.anime} ease-out forwards;
`;
const JsBox = styled.div`
  animation: 4s 8s ${(props) => props.anime} ease-out forwards;
`;
const BootstrapDate = styled.div`
  animation: 4s 12s ${(props) => props.anime} ease-out forwards;
`;
const BootstrapBox = styled.div`
  animation: 4s 12s ${(props) => props.anime} ease-out forwards;
`;
const GitDate = styled.div`
  animation: 4s 16s ${(props) => props.anime} ease-out forwards;
`;
const GitBox = styled.div`
  animation: 4s 16s ${(props) => props.anime} ease-out forwards;
`;
const ReactDate = styled.div`
  animation: 4s 20s ${(props) => props.anime} ease-out forwards;
`;
const ReactBox = styled.div`
  animation: 4s 20s ${(props) => props.anime} ease-out forwards;
`;
const NpmDate = styled.div`
  animation: 4s 24s ${(props) => props.anime} ease-out forwards;
`;
const NpmBox = styled.div`
  animation: 4s 24s ${(props) => props.anime} ease-out forwards;
`;
const NodeDate = styled.div`
  animation: 4s 28s ${(props) => props.anime} ease-out forwards;
`;
const NodeBox = styled.div`
  animation: 4s 28s ${(props) => props.anime} ease-out forwards;
`;
const WebpackDate = styled.div`
  animation: 4s 32s ${(props) => props.anime} ease-out forwards;
`;
const WebpackBox = styled.div`
  animation: 4s 32s ${(props) => props.anime} ease-out forwards;
`;

const EndAnime = styled.div`
  animation: 4s 36s ${(props) => props.anime} ease-out forwards;
`;

const TechnologiesInfo = () => {
  const {
    currentDotColor,
    prevDotColor,
    isFlipped,
    handleRotateClick,
  } = useContext(AppContext);

  const questionAnime = keyframes`
  0% {     opacity:0;}
 
  50% {     opacity:1;}

  
   100% { opacity:1;}
    }
  `;

  const dateAnime = keyframes`
  0% {  opacity:1; }
 
 50% {  left:0;  }

 
   100% { left:-120%; 
    opacity:1; }
    }
  `;

  const boxAnime = keyframes`
  0% {  opacity:1; }
 
 
  50% {  left:50%;  }
 
 
   100% { 
    left:125% ;
    opacity:1;
 
    }
  `;
  const endAnime = keyframes`
  0% {  opacity:0; }
 
 
  50% {    }
 
 
   100% { 
  
    opacity:1;
 
    }
  `;

  return (
    <div className='technologies'>
      <Question
        anime={questionAnime}
        className='screen-text speech speech--question  speech--technologies '
      >
        Which technologies am I using?
      </Question>
      <div className='technologies__container'>
        <HtmlDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date'
        >
          July 2019
        </HtmlDate>

        <HtmlBox anime={boxAnime} className='technologies__box'>
          <img src={html} alt='' className='technologies__image' />
        </HtmlBox>
      </div>
      <div className='technologies__container'>
        <CssDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date '
        >
          August 2019
        </CssDate>
        <CssBox anime={boxAnime} className='technologies__box'>
          <img src={css} alt='' className='technologies__image' />
        </CssBox>
      </div>
      <div className='technologies__container'>
        <JsDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date '
        >
          October 2019
        </JsDate>
        <JsBox anime={boxAnime} className='technologies__box'>
          <img src={js} alt='' className='technologies__image' />
        </JsBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <BootstrapDate
          anime={dateAnime}
          className='screen-text screen-text--date  technologies__date'
        >
          December 2019
        </BootstrapDate>
        <BootstrapBox anime={boxAnime} className='technologies__box'>
          <img src={bootstrap} alt='' className='technologies__image' />
        </BootstrapBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <GitDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date'
        >
          December 2019
        </GitDate>
        <GitBox anime={boxAnime} className='technologies__box'>
          <img src={git} alt='' className='technologies__image' />
        </GitBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <ReactDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date '
        >
          March 2020
        </ReactDate>
        <ReactBox anime={boxAnime} className='technologies__box'>
          <img src={react} alt='' className='technologies__image' />
        </ReactBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <NpmDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date '
        >
          June 2020
        </NpmDate>
        <NpmBox anime={boxAnime} className='technologies__box'>
          <img src={npm} alt='' className='technologies__image' />
        </NpmBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <NodeDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date'
        >
          June 2020
        </NodeDate>
        <NodeBox anime={boxAnime} className='technologies__box'>
          <img src={node} alt='' className='technologies__image' />
        </NodeBox>
      </div>
      <div className='technologies__container'>
        {' '}
        <WebpackDate
          anime={dateAnime}
          className='screen-text screen-text--date technologies__date '
        >
          June 2020
        </WebpackDate>
        <WebpackBox anime={boxAnime} className='technologies__box'>
          <img src={webpack} alt='' className='technologies__image' />
        </WebpackBox>
      </div>{' '}
      <EndAnime
        anime={endAnime}
        className=' technologies__container technologies__container--all'
      >
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={html} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={css} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={js} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={bootstrap} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          <img src={git} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          <img src={react} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={npm} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          {' '}
          <img src={node} alt='' className='technologies__image' />
        </div>
        <div className='technologies__box technologies__box--all'>
          <img src={webpack} alt='' className='technologies__image' />
        </div>
      </EndAnime>
    </div>
  );
};

export default TechnologiesInfo;
