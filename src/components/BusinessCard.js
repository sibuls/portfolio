import React, { useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { AppContext } from '../AppContext';

const Paper = styled.div`
  animation: 2s 0s ${(props) => props.paperAnime} linear infinite;
`;

const BusinessCard = ({ name, title, content, contentSecondLine }) => {
  const {
    footer,
    email,
    linkedin,
    handleLinkedinClick,
    handleEmailClick,
    handleEmailSend,
  } = useContext(AppContext);

  const pencil = (
    <div className='pencil-container'>
      {' '}
      <div className={`pencil-line pencil-line--${name}`}></div>
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

  const handleLinkedin = () => {
    const newWindow = window.open(
      'https://www.linkedin.com/in/sebastian-orlowski-547baa145/',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  // const handleEmail = () => {

  //   const newWindow = window.open(
  //     'mailto:sebo.orlowski@gmail.com',
  //     '_blank',
  //     'noopener,noreferrer'
  //   );
  //   if (newWindow) newWindow.opener = null;
  // };

  return (
    <div>
      {' '}
      <div className={`business-card business-card--${name}`}>
        <div className='business-card__title'>
          <p className='business-card__paragraph'>{title}</p>
        </div>
        <div className='business-card__square business-card__square--hideTitle'>
          {' '}
          React DOM import className
        </div>
        <div className='business-card__square business-card__square--textfunctions'>
          <p>{textFunctions}</p>
        </div>
        <div className='business-card__square business-card__square--textcode'>
          <p>{textCode}</p>
        </div>{' '}
        <Paper
          onClick={
            name === 'linkedin'
              ? handleLinkedin
              : () => {
                  {
                    handleEmailSend(true);
                  }
                }
          }
          className={`business-card__square   business-card__square--${name}  ${
            linkedin ? 'business-card__square--linkedin--move' : null
          } `}
          paperAnime={paperAnime}
        >
          <div className='business-card__content'>
            <p className='business-card__content--name'>{content}</p>

            <p className='business-card__content--description'>
              {contentSecondLine}
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
