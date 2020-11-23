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
  } = useContext(AppContext);

  const caseAnime = keyframes`
  0% {${footer === 'start' ? 'opacity:1' : ' opacity:1 '} }
       
  100% { 
  
     ${footer === 'start' ? 'opacity:1 ' : 'opacity:1'} 
 }`;

  const linkedinAnime = keyframes`
         0% {${linkedin ? '  top: 50%; ' : '  top: -8%; '} }
       
         100% { 
   
            ${linkedin ? '  top: -8%; ' : '  top: 50%; '} 
        }`;

  const emailAnime = keyframes`
        0% {${email ? 'top: 50% ' : '  top: -28%; '} }
      
        100% { 
        
           ${email ? 'top: -35% ' : '  top: 50%; '} 
       }`;

  console.log(footer);
  return (
    <React.Fragment>
      <DivAnimation
        className='business-card business-card--case '
        caseAnime={caseAnime}
      >
        <Email
          emailAnime={emailAnime}
          className=' business-card  business-card__box  '
          // onClick={() => handleEmailClick('email')}
        >
          <BusinessCard
            name={'email'}
            title={'E-mail'}
            content={'sebo.orlowski@gmail.com'}
          />
        </Email>
        <Linkedin
          linkedinAnime={linkedinAnime}
          className='business-card business-card__box business-card__box--linkedin '
          // onClick={() => handleLinkedinClick('linkedin')}
        >
          <BusinessCard
            name={'linkedin'}
            title={'Linkedin'}
            content={'Sebastian Orlowski'}
          />
        </Linkedin>
        <div className='business-card business-card--glass'>
          <p>Business cards </p>
          <p>holder</p>
        </div>
        {/* <BusinessCard name={'glass'} /> */}
      </DivAnimation>{' '}
    </React.Fragment>
  );
};

export default Case;
