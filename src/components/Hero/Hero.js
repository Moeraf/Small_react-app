import './Hero.css';
import React from 'react'

function Hero () {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>Welcome to Rafei Market</h6>
            <h4 className='hero-title'><em>Browse </em>Every products you need is here </h4>

            <div className='main-buton'>
                <a href='browse.html'>click here</a>
            </div>
        </div>
    </div>
  )
}

export default Hero