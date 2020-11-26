import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppContext } from '../AppContext';
import AboutMe from './AboutMe';

// const DivAnimation = styled.div`
//   animation: 0s 0s ${(props) => props.caseAnime} ease-out forwards;
// `;

const Paper = styled.div`
  animation: 2s 0s ${(props) => props.paperAnime} linear infinite;
`;

const BusinessCard = (props) => {
  const {
    footer,
    email,
    linkedin,
    handleLinkedinClick,
    handleEmailClick,
  } = useContext(AppContext);

  const pencil = (
    <div className='pencil-container'>
      {' '}
      <div className={`pencil-line pencil-line--${props.name}`}></div>
      <div className='pencil'>
        <div className='pencil__triangle'>
          <div className='pencil__inside'></div>
        </div>
        <div className='pencil__main'></div>
      </div>
    </div>
  );

  const paperAnime = keyframes`
   0% {${email ? '  ' : null}
     }
   50% {${email || linkedin ? 'top:74%;  ' : null}
   }
  }

   100% {

       
     
  }`;

  const textCode =
    'reactDom App ()=> className function () useState (defaultObject Asset Size js/main.js 1.55 MiB';
  const textFunctions =
    'import {AppContext} from ../AppContext  @media (min-width: 1280px) position: absolute width: 80%;height:80%';
  // const card = (

  // );

  // console.log(props.name);

  return (
    <div>
      {' '}
      <div className={`business-card business-card--${props.name}`}>
        <div className='business-card__title'>
          <p className='business-card__paragraph'>{props.title}</p>
        </div>
        {/* <div className='business-card__square business-card__square--hideTitle'></div> */}
        <div className='business-card__square business-card__square--textfunctions'>
          <p>{textFunctions}</p>
        </div>
        <div className='business-card__square business-card__square--textcode'>
          <p>{textCode}</p>
        </div>{' '}
        <Paper
          paperAnime={paperAnime}
          className={`business-card__square   business-card__square--${
            props.name
          }  ${linkedin ? 'business-card__square--linkedin--move' : null} `}
        >
          <div className='business-card__content'>
            <p className='business-card__paragraph business-card__paragraph--content'>
              {props.content}
            </p>
          </div>
          {pencil}
        </Paper>
        <div className='business-card__square business-card__square--small'></div>
      </div>
    </div>
  );
};

export default BusinessCard;
