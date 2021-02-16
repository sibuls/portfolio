import React from 'react';
import styled, { keyframes } from 'styled-components';
import html from '../images/html.jpg';
import css from '../images/css.jpg';
import js from '../images/js.jpg';
import react from '../images/react.jpg';
import bootstrap from '../images/bootstrap.jpg';
import npm from '../images/npm.jpg';
import node from '../images/node.jpg';
import webpack from '../images/webpack.jpg';
import git from '../images/git.jpg';

const Box = styled.div`
  animation: ${({ time }) => time} ${({ anime }) => anime} ease-out infinite
    alternate-reverse;
`;

const StartAnimation = ({ name }) => {
  const boxAnime1 = keyframes`
      0% { 
      opacity:0;
 
      }

      // 20% { 
      // opacity:0;
      // }

      50% {      
      opacity:0.2;  }

      // 80% {  
      // opacity:0;
      // }

      100% { 
    
      opacity:0;
      }

  `;
  const boxAnime2 = keyframes`
      0% { 
      opacity:0;
   
      }

      20% {
      opacity:0;
      }

      50% { 
      opacity:0.2;
   
      }

      80% { 
      opacity:0;
      }

      100% { 
   
      opacity:0;
      }
  `;

  return (
    <div className={`squares--${name} `}>
      {/* <Box anime={boxAnime1} time={4 + 's'} className='technologies__box'>
        <img src={js} alt='' className='technologies__image' />
      </Box>{' '} */}
      <div className={`square   square-1 square-1--${name} `}></div>
      <div className={`square   square-2 square-2--${name} `}>
        {/* <Box anime={boxAnime1} time={12 + 's'} className='technologies__box'>
          <img src={react} alt='' className='technologies__image' />
        </Box> */}
      </div>
      <div className={`square   square-3 square-3--${name} `}>
        {' '}
        {/* <Box anime={boxAnime1} time={18 + 's'} className='technologies__box'>
          <img src={git} alt='' className='technologies__image' />
        </Box> */}
      </div>
      <div className={`square   square-4 square-4--${name} `}>
        {' '}
        {/* <Box anime={boxAnime2} time={14 + 's'} className='technologies__box'>
          <img src={webpack} alt='' className='technologies__image' />
        </Box> */}
      </div>
      <div className={`square   square-5 square-5--${name} `}>
        {' '}
        {/* <Box anime={boxAnime2} time={11 + 's'} className='technologies__box'>
          <img src={node} alt='' className='technologies__image' />
        </Box> */}
      </div>
      <div className={`square   square-6 square-6--${name} `}>
        {/* <Box anime={boxAnime2} time={16 + 's'} className='technologies__box'>
          <img src={html} alt='' className='technologies__image' />
        </Box>
        <Box anime={boxAnime1} time={23 + 's'} className='technologies__box'>
          <img src={css} alt='' className='technologies__image' />
        </Box> */}
      </div>
    </div>
  );
};

export default StartAnimation;
