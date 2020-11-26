import React from 'react';
import photo from '../images/preview.jpg';

function SummaryInfo(props) {
  return (
    <div className='summary-galery '>
      <p className='summary-galery__title'>Projects</p>
      <div className='summary-galery__box'>
        <img className='summary-galery__image' src={photo} alt='house' />
      </div>
    </div>
  );
}

export default SummaryInfo;
