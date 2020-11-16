import React, { useState, useEffect, useRef } from 'react';
import { AppContext, defaultObject } from './AppContext';
import AnimationFrame from './components/AnimationFrame';
import TextBody from './components/TextBody';

const App = () => {
  // hooks

  const [isAboutMeActive, setIsAboutMeActive] = useState(
    defaultObject.isAboutMeActive
  );
  const [menuActive, setMenuActive] = useState(defaultObject.menuActive);

  const [currentTransform, setCurrentTransform] = useState(
    defaultObject.currentTransform
  );

  const [currentTop, setCurrentTop] = useState(defaultObject.currentTop);

  // function which will get prevstate of our hooks
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevTransform = usePrevious(currentTransform);

  const prevTop = usePrevious(currentTop);

  // handles

  const handleBusinessCardClick = (
    menu,
    transform,

    top = '0%'
  ) => {
    // /*  height default 50% top deafult 30% , without default 'height' and 'top' doesnt work well */
    // setIsAboutMeActive(!isAboutMeActive);
    setMenuActive(menu);
    setCurrentTransform(transform);

    setCurrentTop(top);
  };
  const paper = () => {
    return {
      /* <div className='paper'>
  <div className='paper__main'>
    <div className='paper__pattern'>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
      <div className='paper__content'>notatki notatki notatki</div>
    </div>
  </div>
  <div className='paper__margin'></div>
</div> */
    };
  };

  return (
    <div className='wrapper'>
      <AppContext.Provider
        value={{
          isAboutMeActive: isAboutMeActive,
          menuActive: menuActive,
          prevTransform: prevTransform,
          currentTransform: currentTransform,

          prevTop: prevTop,
          currentTop: currentTop,
          handleBusinessCardClick: handleBusinessCardClick,
        }}
      >
        {' '}
        <AnimationFrame />
      </AppContext.Provider>
    </div>
  );
};

export default App;
