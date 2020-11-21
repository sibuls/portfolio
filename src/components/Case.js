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
  const { footer } = useContext(AppContext);

  const caseAnime = keyframes`
  0% {${footer === 'start' ? 'opacity:1' : ' opacity:1 '} }
       
  100% { 
  
     ${footer === 'start' ? 'opacity:1 ' : 'opacity:1'} 
 }`;

  const linkedinAnime = keyframes`
         0% {${footer === 'linkedin' ? '  top: 50%; ' : '  top: -25%; '} }
       
         100% { 
   
            ${footer === 'linkedin' ? '  top: -25%; ' : '  top: 50%; '} 
        }`;

  const emailAnime = keyframes`
        0% {${footer === 'email' ? 'top: 50% ' : '  top: -15%; '} }
      
        100% { 
        
           ${footer === 'email' ? 'top: -15% ' : '  top: 50%; '} 
       }`;

  console.log(footer);
  return (
    <React.Fragment>
      <DivAnimation
        className='business-card business-card--case '
        caseAnime={caseAnime}
      >
        <Linkedin
          linkedinAnime={linkedinAnime}
          className='business-card business-card__box business-card--hidden'
        >
          <BusinessCard
            name={'linkedin'}
            title={'Linkedin'}
            content={'Sebastian Orlowski'}
          />
        </Linkedin>
        <Email
          emailAnime={emailAnime}
          className=' business-card  business-card__box business-card--hidden'
        >
          <BusinessCard
            name={'email'}
            title={'E-mail'}
            content={'sebo.orlowski@gmail.com'}
          />
        </Email>
        <div className='business-card business-card--glass'></div>
        {/* <BusinessCard name={'glass'} /> */}
      </DivAnimation>{' '}
    </React.Fragment>
  );
};

export default Case;
