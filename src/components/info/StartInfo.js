import React, { useContext } from 'react';
import { AppContext, defaultObject } from '../../AppContext';

const MainInfo = () => {
  const { showWarning, menuActive } = useContext(AppContext);

  return (
    <div>
      <p className='screen-text speech '>
        {' '}
        Hi, if you see this page its mean you a bit interested of my portfolio.
        Its pleasure for me. Please sit, relax, and I hope enjoy.
      </p>
      <p className='screen-text speech '>
        {' '}
        Use white menu to nawigate, if menu on background is not white its
        finally time to change Nokia 3310 for new model (no offence - I've loved
        this phone) or let me know and I'll make media query for this model :p.
        Enjoy
      </p>

      {showWarning ? (
        <p className='screen-text speech speech--question'>
          {' '}
          You are on main menu currently ...
        </p>
      ) : (
        <p className='screen-text speech speech--question'>
          {' '}
          You can go back to the main menu by pressing the button below
        </p>
      )}
    </div>
  );
};

export default MainInfo;
