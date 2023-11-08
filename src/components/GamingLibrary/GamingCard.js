/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './GamingCard.css';
import card02 from '../../assets/images/card02.jpg'

function GamingCard ({title,category,data_added,hours_played,downloaded}) {
  return (
    <div className='gaming-library-cards' style={{"color": "white"}}>
        <ul>
            <li><img src={card02}></img></li>
            <li><h4>{title}</h4><span>{category}</span></li>
            <li><h4>Date Added</h4><span>{data_added}</span></li>
            <li><h4>Hours Played</h4><span>{hours_played}</span></li>
            <li><h4>Currently</h4><span>{downloaded}</span></li>
            <div className='main-button'>
                <a href='/#'>Downloaded</a>
            </div>
        </ul>
    </div>
  )
}

export default GamingCard