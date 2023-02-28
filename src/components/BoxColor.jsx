import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const boxStyle = {
  backgroundColor: `rgb(${r}, ${g}, ${b})`,
  width: '30vw',
  height: '10vh',
  };

  return <div style={boxStyle}><p>RGB{r},{g},{b}</p></div>;
};

export default BoxColor;
