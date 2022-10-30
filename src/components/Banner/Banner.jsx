import React from 'react';
import './banner.css';

const Banner = ({text}) => {
  return (
    <div className='banner'>
      <h1 className='banner-text'>{text}</h1>
    </div>
  )
}

export default Banner