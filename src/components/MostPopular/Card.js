/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Card.css';
import card01 from "../../assets/images/card01.jpg";
import { FaStar, FaDownload } from "react-icons/fa6";


function Card ({title,rate01,rate02}) {
  return (
    <div className="most-popular-item">
    <div className="card-wrapper">
      <img className="most-popular-item-image" src={card01}></img>
      <div className="most-popular-item-content">
        <h4 className="most-popular-item-title">
          {title}
          <br />
          <span>send box</span>
        </h4>
        <ul>
          <li>
            <span style={{"color": "yellow"}}><FaStar /></span>
            <span> {rate01}</span>
          </li>
          <li>
            <span style={{"color": "red"}}><FaDownload /></span>
            <span> {rate02}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Card