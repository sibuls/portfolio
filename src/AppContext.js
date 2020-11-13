import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  menuActive: 'start',
  prevTransfrom:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  currentTransform:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  prevHeight: '50%',
  currentHeight: '',
  prevTop: '30%',
  currentTop: '30%',
  handleBusinessCardClick: () => {},
};

export const AppContext = createContext(defaultObject);
