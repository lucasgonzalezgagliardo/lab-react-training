import React from 'react';

function Random({ min, max }) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  
    return (
      <div className="Iteration2">
        <p>A random number between {min} and {max} =&gt; {randomNumber}</p>
      </div>
    );
  }

export default Random;
  