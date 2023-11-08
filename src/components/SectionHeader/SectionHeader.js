import React from 'react';
import "./SectionHeader.css";

function SectionHeader ({children}) {
  return (
    <div className="section-header">
        <h4>{children}</h4>
    </div>
  )
}

export default SectionHeader