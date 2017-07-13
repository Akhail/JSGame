import React from 'react';

const Figure = (figure) => (
  <div>
    {figure ? (
      <svg xmlns="http://www.w3.org/2000/svg" style={{stroke: '#444', strokeWidth: 6}}>
        <line x1="10" y1="10" x2="90" y2="90" ></line>
        <line x1="90" y1="10" x2="10" y2="90" ></line>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" style={{stroke: '#444', strokeWidth: 6}}>
        <circle cx="50" cy="50" r="40"/>
      </svg>
    )}
    
  </div>
)

export default Figure;