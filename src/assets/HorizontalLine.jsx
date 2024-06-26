import React from 'react';

const HorizontalLine = ({ width = 379, color = '#C2C2C2' }) => (
  <svg
    width={width}
    height="1"
    viewBox={`0 0 ${width} 1`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="0.5" x2={width} y2="0.5" stroke={color} />
  </svg>
);

export default HorizontalLine;
