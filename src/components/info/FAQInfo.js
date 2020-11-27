import React from 'react';

function FAQInfo(props) {
  return (
    // <div className='summary-galery '>
    //   <p className='summary-galery__title'>Projects</p>
    //   <div className='summary-galery__box'>

    //   </div>
    // </div>

    <div className='summary-galery '>
      <p className='screen-text speech speech--question'>
        How, can I contact you?
      </p>
      <p className='screen-text speech'>
        You can either write me an email or contact me by linkedin. Just click
        on my name in the 'business cards' on bottom of the page.
      </p>
      <p className='screen-text speech speech--question'>
        How this project has been made?
      </p>
      <p className='screen-text speech'>
        Project is made in Js with React, all phones are made in CSS. Everything
        is glued together by Webpack. Only logos of "technologies" are jpg
      </p>
      <p className='screen-text speech speech--question'>
        If I liked any part of code or graphic, can I use it?
      </p>
      <p className='screen-text speech'>
        Yes, all graphics (apart "technologies logo") has been made by myself so
        feel free to use it. It will be even pleasure for me :)
      </p>
      <p className='screen-text speech speech--question'>
        I have different question which wasn't mention above
      </p>

      <p className='screen-text speech'>
        No problem at all. Just drop me an email, and I will replay as soon as I
        can
      </p>
    </div>
  );
}

export default FAQInfo;
