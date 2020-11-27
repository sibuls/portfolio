import React, { useState } from 'react';

const Burger = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <div
      className='burger'
      // onClick={() => burgerChange()}
      // active={true}
    >
      <nav role='navigation'>
        <div className='burger__menu-toggle'>
          <input type='checkbox' className='burger__input' />
          {/* <input
              type='checkbox'
              className={
                this.props.isBurgerActive
                  ? 'burger__input burger__input--active'
                  : 'burger__input'
              }
            /> */}

          <span className='burger__span'></span>
          <span className='burger__span'></span>
          <span className='burger__span'></span>

          <ul className='burger__menu'>
            <a
              className='burger__link'
              // onClick={() => this.props.burgerChoice('login')}
            >
              <li className='burger__li'>Login</li>
            </a>
            <a
              className='burger__link'
              // onClick={() => this.props.burgerChoice('register')}
            >
              <li className='burger__li'>Rejestracja</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Burger;
