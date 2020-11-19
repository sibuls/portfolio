import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../AppContext';
import AboutMeInfo from './AboutMeInfo';
import BusinessCard from './BusinessCard';
import ContactInfo from './ContactInfo';
import DescriptionInfo from './DescriptionInfo';
import ProjectsInfo from './ProjectsInfo';
import StartInfo from './StartInfo';
import StepsInfo from './StepsInfo';

const InfoMain = () => {
  const { isAboutMeActive, menuActive } = useContext(AppContext);

  const menu = menuActive;
  const menuSwitch = (menu) => {
    switch (menu) {
      case 'aboutme':
        return (
          <div className='info info--aboutme'>
            <AboutMeInfo />
          </div>
        );
        break;
      case 'description':
        return (
          <div className='info info--description'>
            <DescriptionInfo />
          </div>
        );
        break;
      case 'steps':
        return (
          <div className='info info--description'>
            <StepsInfo />
          </div>
        );
        break;
      case 'projects':
        return (
          <div className='info info--description'>
            <ProjectsInfo />
          </div>
        );
        break;
      case 'contact':
        return (
          <div className='info info--description'>
            <ContactInfo />
          </div>
        );
        break;
      case 'main':
        return (
          <div className='info info--description'>
            <StartInfo />
          </div>
        );
        break;
      default:
        return (
          <div className='info info--description'>
            <StartInfo />
          </div>
        );
      // code block
    }
  };

  return <React.Fragment>{menuSwitch(menu)}</React.Fragment>;
};

export default InfoMain;
