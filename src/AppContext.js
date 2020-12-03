import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  //
  isFlipped: false,
  //
  isFlippedDone: false,
  menuActive: 'start',
  prevTransfrom:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  currentTransform:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',

  prevTop: '0%',
  currentTop: '0%',
  prevDotColor: '',
  //
  prevEmailSend: false,
  currentDotColor: '',
  isDotAnimated: false,
  showWarning: false,
  footer: 'start',
  email: false,
  linkedin: false,
  cv: '',
  //
  emailSend: false,

  handleCardClick: () => {},
  handleDotClick: () => {},
  handleRotateClick: () => {},
  handleFooterClick: () => {},
  handleEmailClick: () => {},
  handleLinkedinClick: () => {},
  handleCv: () => {},
  handleEmailSend: () => {},
};

export const AppContext = createContext(defaultObject);
