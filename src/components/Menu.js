import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

// darkblue msquare menu - 'who am I" "what im doing" "linkedin" etc
const Menu = (props) => {
  const { menuActive, email, linkedin } = useContext(AppContext);

  return (
    <div className={`menu ${props.name}`}>
      <div className='menu__shadow'>
        <div className='menu__text menu__text--shadow'>
          <p
            className={`    ${
              props.name === 'rotate-phone'
                ? 'menu__shadow--rotate-shadow'
                : null
            }`}
          >
            {' '}
            {props.text}{' '}
          </p>
        </div>
      </div>
      <div
        className={` menu__square menu__square--${props.name} ${
          props.name === menuActive ? 'menu__square--active' : null
        } 
        ${
          linkedin === true && props.name === 'linkedin'
            ? 'menu__square--active'
            : null
        } 
        ${
          email === true && props.name === 'email'
            ? 'menu__square--active'
            : null
        } 

        ${props.name === 'rotate-phone' ? 'menu__square--rotate' : null}  `}
      ></div>{' '}
      <div
        className={`menu__text  ${
          props.name === 'rotate-phone' ? 'menu__text--rotate' : null
        }`}
        onClick={props.handleClick}
      >
        <p className={props.name === menuActive ? 'menu__text--active' : null}>
          {' '}
          {props.text}{' '}
        </p>
      </div>
    </div>
  );
};

export default Menu;
