import React from 'react';

const Menu = (props) => {
  return (
    <div className={`menu ${props.name}`}>
      {props.text !== 'Rotate phone' ? (
        <div className='menu__shadow'>
          <div className='menu__text menu__text--shadow'>
            <p> {props.text} </p>
          </div>
        </div>
      ) : null}
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
