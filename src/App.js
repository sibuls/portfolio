import React, { useState, useEffect, useRef } from 'react';
import { AppContext, defaultObject } from './AppContext';
import AnimationFrame from './components/AnimationFrame';

const App = () => {
  // hooks

  const [isAboutMeActive, setIsAboutMeActive] = useState(
    defaultObject.isAboutMeActive
  );
  const [count, setCount] = useState(0);
  const [menuActive, setMenuActive] = useState(defaultObject.menuActive);

  const [currentTransform, setCurrentTransform] = useState(
    defaultObject.currentTransform
  );

  const [currentTop, setCurrentTop] = useState(defaultObject.currentTop);

  const [currentDotColor, setCurrentDotColor] = useState(
    defaultObject.currentDotColor
  );
  const [isDotAnimated, setIsDotAnimated] = useState(
    defaultObject.isDotAnimated
  );

  const [isFlipped, setIsFlipped] = useState(defaultObject.isFlipped);

  const [isFlippedDone, setIsFlippedDone] = useState(
    defaultObject.isFlippedDone
  );

  const [showWarning, setShowWarning] = useState(defaultObject.showWarning);

  // end of  hooks

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
  const prevDotColor = usePrevious(currentDotColor);

  // handles

  const handleBusinessCardClick = (menu, transform, top = '0%', warning) => {
    // /*  top deafult 0% , without default   'top' doesnt work well */
    setMenuActive(menu);
    setCurrentTransform(transform);
    setCurrentTop(top);
    setShowWarning(warning);
  };

  const handleDotClick = (color) => {
    setCurrentDotColor(color);
    setIsDotAnimated(true);
  };

  const handleRotateClick = () => {
    setIsFlipped(!isFlipped);
    setIsFlippedDone(true);
  };

  const initialRotate = () => {
    setIsFlippedDone(true);
    setIsFlipped(true);
  };

  setTimeout(() => {
    isDotAnimated && !isFlipped && !isFlippedDone ? initialRotate() : null;
  }, 9000);

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
          currentDotColor: currentDotColor,
          prevDotColor: prevDotColor,
          isFlipped: isFlipped,
          isDotAnimated: isDotAnimated,
          showWarning: showWarning,
          isFlippedDone: isFlippedDone,
          handleBusinessCardClick: handleBusinessCardClick,
          handleDotClick: handleDotClick,
          handleRotateClick: handleRotateClick,
        }}
      >
        {' '}
        <AnimationFrame />
      </AppContext.Provider>
    </div>
  );
};

export default App;
