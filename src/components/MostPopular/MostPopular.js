/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./MostPopular.css";
import Card from "./Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import mostPopular from './CardsInfo'

function MostPopular() {

  const Cards = mostPopular.map(card=>{
    return <Card key={card.title} title={card.title} rate01={card.rate01} rate02={card.rate02} />
  })


  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>

      <div className="most-popular-items">
        {Cards}
      </div>
      </SectionWrapper>
  );
}

export default MostPopular;
