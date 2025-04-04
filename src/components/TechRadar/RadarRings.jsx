import React from 'react';

const RadarRings = ({ rings, dimensions }) => {
  return (
    <>
      {rings.map((ring, index) => (
        <circle
          key={`ring-${index}`}
          cx={dimensions.centerX}
          cy={dimensions.centerY}
          r={ring.radius}
          fill="none"
          stroke="#DDD"
          strokeWidth="1"
        />
      ))}
      
      {rings.map((ring, index) => (
        <text
          key={`ring-label-${index}`}
          x={dimensions.centerX}
          y={dimensions.centerY - (ring.radius  + (index === 0 ? 0 : rings[index - 1].radius )) / 2}
          textAnchor="middle"
          fill="#666"
          fontSize="12"
        >
          {ring.name}
        </text>
      ))}
    </>
  );
};

export default RadarRings;