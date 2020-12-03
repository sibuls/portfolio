import React from 'react';

// darkblue msquare menu - 'who am I" "what im doing" "linkedin" etc
const Menu = (props) => {
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
        className={`menu__square  ${
          props.name === 'rotate-phone' ? 'menu__square--rotate' : null
        }`}
      ></div>{' '}
      <div
        className={`menu__text  ${
          props.name === 'rotate-phone' ? 'menu__text--rotate' : null
        }`}
        onClick={props.handleClick}
      >
        <p> {props.text} </p>
      </div>
    </div>
  );
};

export default Menu;
