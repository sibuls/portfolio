import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import html from '../../images/html.jpg';
import css from '../../images/css.jpg';
import js from '../../images/js.jpg';
import react from '../../images/react.jpg';
import bootstrap from '../../images/bootstrap.jpg';
import npm from '../../images/npm.jpg';
import node from '../../images/node.jpg';
import webpack from '../../images/webpack.jpg';
import git from '../../images/git.jpg';

const TechnologiesInfo = () => {
  const {
    currentDotColor,
    prevDotColor,
    isFlipped,
    handleRotateClick,
  } = useContext(AppContext);

  return (
    <div className='technologies'>
      <p className='screen-text  speech speech--question technologies__title'>
        Which technologies am I using?
      </p>

      <p className='screen-text  screen-text--technologies technologies__date '>
        July 2019
      </p>
      <div className='technologies__box'>
        <img src={html} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        August 2019
      </p>
      <div className='technologies__box'>
        <img src={css} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        October 2019
      </p>
      <div className='technologies__box'>
        <img src={js} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        December 2019
      </p>
      <div className='technologies__box'>
        <img src={bootstrap} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        December 2019
      </p>
      <div className='technologies__box'>
        <img src={git} alt='' className='technologies__image' />
      </div>
      <p className='screen-text  screen-text--technologies technologies__date '>
        March 2020
      </p>
      <div className='technologies__box'>
        <img src={react} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        June 2020
      </p>
      <div className='technologies__box'>
        <img src={npm} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        June 2020
      </p>
      <div className='technologies__box'>
        <img src={node} alt='' className='technologies__image' />
      </div>

      <p className='screen-text screen-text--technologies technologies__date '>
        June 2020
      </p>
      <div className='technologies__box'>
        <img src={webpack} alt='' className='technologies__image' />
      </div>
    </div>
  );
};

export default TechnologiesInfo;
