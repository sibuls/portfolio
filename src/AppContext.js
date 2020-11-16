import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  menuActive: 'start',
  prevTransfrom:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  currentTransform:
    'translate(-50%, 0%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',

  prevTop: '0%',
  currentTop: '0%',
  handleBusinessCardClick: () => {},
};

export const AppContext = createContext(defaultObject);
