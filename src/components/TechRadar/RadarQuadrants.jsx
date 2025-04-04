// import React from 'react';

// const RadarQuadrants = ({ quadrants, dimensions }) => {
//   return (
//     <>
//       {/* Render quadrant dividing lines */}
//       {quadrants.map((quadrant, index) => {
//         const startAngle = quadrant.startAngle * (Math.PI / 180);
//         const x = dimensions.centerX + dimensions.radius * Math.cos(startAngle);
//         const y = dimensions.centerY + dimensions.radius * Math.sin(startAngle);
        
//         return (
//           <line
//             key={`quadrant-line-${index}`}
//             x1={dimensions.centerX}
//             y1={dimensions.centerY}
//             x2={x}
//             y2={y}
//             stroke="#DDD"
//             strokeWidth="1"
//           />
//         );
//       })}
      
//       {/* Render quadrant labels */}
//       {quadrants.map((quadrant, index) => {
//         const midAngle = ((quadrant.startAngle + quadrant.endAngle) / 2) * (Math.PI / 180);
//         const labelDistance = dimensions.radius * 0.85;
//         const x = dimensions.centerX + labelDistance * Math.cos(midAngle);
//         const y = dimensions.centerY + labelDistance * Math.sin(midAngle);
        
//         return (
//           <text
//             key={`quadrant-label-${index}`}
//             x={x}
//             y={y}
//             textAnchor="middle"
//             dominantBaseline="middle"
//             fontWeight="bold"
//             fill="#333"
//             fontSize="14"
//           >
//             {quadrant.name}
//           </text>
//         );
//       })}
//     </>
//   );
// };

// export default RadarQuadrants;

import React from 'react';

const RadarQuadrants = ({ quadrants, dimensions }) => {
  return (
    <>
      {/* Render quadrant dividing lines */}
      {quadrants.map((quadrant, index) => {
        const startAngle = quadrant.startAngle * (Math.PI / 180);
        const x = dimensions.centerX + dimensions.radius * Math.cos(startAngle);
        const y = dimensions.centerY + dimensions.radius * Math.sin(startAngle);
        
        return (
          <line
            key={`quadrant-line-${index}`}
            x1={dimensions.centerX}
            y1={dimensions.centerY}
            x2={x}
            y2={y}
            stroke="#DDD"
            strokeWidth="1"
          />
        );
      })}
      
      {/* Render quadrant labels inside each quadrant */}
      {quadrants.map((quadrant, index) => {
        const midAngle = ((quadrant.startAngle + quadrant.endAngle) / 2) * (Math.PI / 180);
        // Position labels at about 60% of the outer radius
        const labelDistance = dimensions.radius * 0.6;
        const x = dimensions.centerX + labelDistance * Math.cos(midAngle);
        const y = dimensions.centerY + labelDistance * Math.sin(midAngle);
        
        return (
          <text
            key={`quadrant-label-${index}`}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="bold"
            fill="#666"
            fontSize="12"
            opacity="0.8"
            className="quadrant-label"
          >
            {quadrant.name}
          </text>
        );
      })}
    </>
  );
};

export default RadarQuadrants;