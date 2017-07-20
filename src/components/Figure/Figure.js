import React from 'react';
import './Figure.css';

const Figure = ({figure, handleClick}) => (
  <div className="figure" onClick={handleClick}>
    {figure === 'X' &&
      <svg xmlns="http://www.w3.org/2000/svg" >
        <line x1="10" y1="10" x2="90" y2="90" ></line>
        <line x1="90" y1="10" x2="10" y2="90" ></line>
      </svg>
    }
    {figure === 'O' &&
      <svg xmlns="http://www.w3.org/2000/svg" >
        <circle cx="50" cy="50" r="40"/>
      </svg>
    }
    
  </div>
)

export default Figure;