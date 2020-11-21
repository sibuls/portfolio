import React from 'react';
import AboutMe from './AboutMe';

const BusinessCard = (props) => {
  const pencil = (
    <div className='pencil-container'>
      {' '}
      <div className='pencil-line'></div>
      <div className='pencil'>
        <div className='pencil__triangle'>
          <div className='pencil__inside'></div>
        </div>
        <div className='pencil__main'></div>
      </div>
    </div>
  );

  const textCode =
    'reactDom App ()=> className function () useState (defaultObject Asset Size js/main.js 1.55 MiB';
  const textFunctions =
    'import {AppContext} from ../AppContext  @media (min-width: 1280px) position: absolute width: 80%;height:80%';
  const card = (
    <div className={`business-card business-card--${props.name}`}>
      <div className='business-card__title'>
        <p className='business-card__paragraph'>{props.title}</p>
      </div>

      <div className='business-card__square business-card__square--hideTitle'></div>
      <div className='business-card__square business-card__square--textfunctions'>
        <p>{textFunctions}</p>
      </div>
      <div className='business-card__square business-card__square--textcode'>
        <p>{textCode}</p>
      </div>
      <div
        className={`business-card__square business-card__square--draw business-card__square--${props.name} `}
      >
        <div className='business-card__content'>
          <p className='business-card__paragraph business-card__paragraph--content'>
            {props.content}
          </p>
        </div>
        {pencil}
      </div>
      <div className='business-card__square business-card__square--small'></div>
    </div>
  );

  return <React.Fragment>{card}</React.Fragment>;
};

export default BusinessCard;
