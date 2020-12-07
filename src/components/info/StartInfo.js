import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../../AppContext';

const MainInfo = () => {
  const { showWarning, menuActive } = useContext(AppContext);

  return (
    <div>
      <p className='screen-text speech '>
        {' '}
        Hi, if you see this page it's mean you are a bit interested of my
        portfolio. It's pleasure for me. Please sit, relax, and enjoy I hope.
      </p>
      <p className='screen-text speech '>
        {' '}
        Use blue menu to navigate, if they are not working its finally time to
        change Nokia 3310 for new model (no offence - I've loved this phone) or
        let me know and I'll make media query for this model :p
      </p>

      {showWarning ? (
        <p className='screen-text speech speech--question'>
          {' '}
          You are on main menu currently ...
        </p>
      ) : (
        <p className='screen-text speech speech--question'>
          {' '}
          You can go back to main menu by pressing the button below
        </p>
      )}
    </div>
  );
};

export default MainInfo;
