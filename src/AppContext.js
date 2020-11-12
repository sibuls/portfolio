import { createContext } from 'react';

export const defaultObject = {
  isAboutMeActive: false,
  menuActive: 'start',
  currentTransform:
    'translate(-50%, -50%) skew(15deg, 0deg) scale(1.2) rotate(-5deg);',
  prevTransfrom: '',
  handleBusinessCardClick: () => {},
};

export const AppContext = createContext(defaultObject);
