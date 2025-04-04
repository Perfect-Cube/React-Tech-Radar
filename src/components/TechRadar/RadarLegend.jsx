import React from 'react';

const RadarLegend = ({ dimensions }) => {
  return (
    <g transform={`translate(${dimensions.width - 140}, 20)`}>
      <text x="0" y="15" fontSize="14" fontWeight="bold">Legend:</text>
      <circle cx="10" cy="40" r="6" fill="#666" />
      <text x="25" y="45" fontSize="12">Established</text>
      <path d="M 0,60 10,70 20,60 10,50 z" fill="#666" />
      <text x="25" y="65" fontSize="12">New or moved</text>
    </g>
  );
};

export default RadarLegend;