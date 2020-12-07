import React, { useContext } from 'react';
import BusinessCard from './BusinessCard';
import styled, { keyframes } from 'styled-components';
import { AppContext } from '../AppContext';
import '../sass/style.scss';

const DivAnimation = styled.div`
  animation: 0s 0s ${(props) => props.caseAnime} ease-out forwards;
`;

const Linkedin = styled.div`
  animation: 0.5s 0s ${(props) => props.linkedinAnime} ease-out forwards;
`;

const Email = styled.div`
  animation: 0.5s 0s ${(props) => props.emailAnime} ease-out forwards;
`;

const Case = () => {
  const {
    footer,
    email,
    linkedin,
    handleLinkedinClick,
    handleEmailClick,
    handleBothCardsClick,
  } = useContext(AppContext);

  const caseAnime = keyframes`
  0% {${footer === 'start' ? 'opacity:1' : ' opacity:1 '} }
       
  100% { 
  
     ${footer === 'start' ? 'opacity:1 ' : 'opacity:1'} 
 }`;

  const linkedinAnime = keyframes`
         0% {${linkedin ? '  top: 50%; ' : '  top: 42%; '} }
       
         100% { 
   
            ${linkedin ? '  top: -42%; ' : '  top: 50%; '} 
        }`;

  const emailAnime = keyframes`
        0% {${email ? 'top: 50% ' : '  top: -17%; '} }
      
        100% { 
        
           ${email ? 'top: -17% ' : '  top: 50%; '} 
       }`;

  return (
    <React.Fragment>
      <DivAnimation
        className='business-card business-card--case '
        caseAnime={caseAnime}
      >
        <Linkedin
          linkedinAnime={linkedinAnime}
          className='business-card business-card__box business-card__box--linkedin '
          onClick={() => handleLinkedinClick('linkedin')}
        >
          <BusinessCard
            name={'linkedin'}
            title={'Linkedin'}
            content={'Sebastian Orlowski'}
            contentSecondLine={'open Linkedin'}
          />
        </Linkedin>{' '}
        <Email
          emailAnime={emailAnime}
          className=' business-card  business-card__box business-card__box--email '
          onClick={() => handleEmailClick('email')}
          // handleScroll={props.handleScroll}
        >
          <BusinessCard
            name={'email'}
            title={'Contact'}
            content={'sebo.orlowski@gmail.com'}
            contentSecondLine={'or click here to open form'}
          />
        </Email>
        <div
          className='business-card business-card--glass'
          onClick={handleBothCardsClick}
        >
          <p className='business-card__holder'>Business card </p>
          <p className='business-card__holder'>holder</p>
        </div>
      </DivAnimation>{' '}
    </React.Fragment>
  );
};

export default Case;
