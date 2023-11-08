import React from 'react';
import './GamingLibrary.css';
import GamingCard from "./GamingCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import GamingData from './GamingInfo';

function GamingLibrary () {
    const cards = GamingData.map(card=>{
        return <GamingCard key={card.title} title={card.title} data_added={card.data_added} hours_played={card.hours_played} downloaded={card.downloaded} />
      })
  return (
    <SectionWrapper>
    <SectionHeader>Gaming Library</SectionHeader>

    <div className="gaming-library-cards">
      {cards}
    </div>
    </SectionWrapper>
  )
}

export default GamingLibrary