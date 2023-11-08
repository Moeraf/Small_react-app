import React from 'react';
import "./SectionWrapper.css";

function SectionWrapper ({children}) {
  return (
    <div className="section-wrapper">{children}</div>
  )
}

export default SectionWrapper