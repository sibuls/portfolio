import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

// darkblue msquare menu - 'who am I" "what im doing" "linkedin" etc
const Menu = ({ name, text, handleClick }) => {
  const { menuActive, email, linkedin } = useContext(AppContext);

  return (
    <div className={`menu ${name}`}>
      <div
        className={` menu__glass   ${
          name === menuActive ? 'menu__glass--active' : null
        } 
        ${
          linkedin === true && name === 'linkedin'
            ? 'menu__glass--active'
            : null
        } 
        ${email === true && name === 'email' ? 'menu__glass--active' : null} 

           `}
      ></div>
      <div className='menu__shadow'>
        <div className='menu__text menu__text--shadow'>
          {/* <p
            className={`    ${
              name === 'rotate-phone' ? 'menu__shadow--rotate-shadow' : null
            }`}
          >
            {' '}
            {text}{' '}
          </p> */}
        </div>
      </div>
      <div
        className={` menu__square menu__square--${name} ${
          name === menuActive ? 'menu__square--active' : null
        } 
        ${
          linkedin === true && name === 'linkedin'
            ? 'menu__square--active'
            : null
        } 
        ${email === true && name === 'email' ? 'menu__square--active' : null} 

        ${name === 'rotate-phone' ? 'menu__square--rotate' : null}  `}
      ></div>{' '}
      <div
        className={` menu__border  ${
          name === menuActive ? 'menu__border--active' : null
        } 
        ${
          linkedin === true && name === 'linkedin'
            ? 'menu__border--active'
            : null
        } 
        ${email === true && name === 'email' ? 'menu__border--active' : null} 

          `}
      ></div>
      <div
        className={`menu__text  ${
          name === 'rotate-phone' ? 'menu__text--rotate' : null
        }`}
        onClick={handleClick}
      >
        <p
          className={` menu__text-p  ${
            name === menuActive ? 'menu__text-p--active' : null
          } 
      ${
        linkedin === true && name === 'linkedin' ? 'menu__text-p--active' : null
      } 
      ${email === true && name === 'email' ? 'menu__text-p--active' : null} 

        `}
        >
          {' '}
          {text}{' '}
        </p>
      </div>
    </div>
  );
};

export default Menu;
