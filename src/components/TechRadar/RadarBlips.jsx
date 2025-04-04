// import React from 'react';

// const RadarBlips = ({ blips, blipPositions, rings }) => {
//   return (
//     <>
//       {blips.map((blip, index) => {
//         const position = blipPositions[blip.name] || { x: 0, y: 0 };
//         const ringColor = rings[blip.ring].color;
        
//         return (
//           <g key={`blip-${index}`}>
//             {blip.isNew ? (
//               <path
//                 d="M -10,0 0,10 10,0 0,-10 z"
//                 transform={`translate(${position.x}, ${position.y})`}
//                 fill={ringColor}
//               />
//             ) : (
//               <circle
//                 cx={position.x}
//                 cy={position.y}
//                 r={6}
//                 fill={ringColor}
//               />
//             )}
//             <text
//               x={position.x}
//               y={position.y + 15}
//               textAnchor="middle"
//               fill="#333"
//               fontSize="10"
//             >
//               {blip.name}
//             </text>
//           </g>
//         );
//       })}
//     </>
//   );
// };

// export default RadarBlips;
import React from 'react';

const RadarBlips = ({ blips, blipPositions, rings, onBlipClick }) => {
  return (
    <>
      {blips.map((blip, index) => {
        const position = blipPositions[blip.name] || { x: 0, y: 0 };
        const ringColor = rings[blip.ring].color;
        
        return (
          <g 
            key={`blip-${index}`} 
            onClick={() => onBlipClick(blip)}
            className="cursor-pointer"
          >
            {/* Hover effect wrapper */}
            <g className="blip-element">
              {blip.isNew ? (
                <>
                  {/* This is for hover effects */}
                  <path
                    d="M -12,0 0,12 12,0 0,-12 z"
                    transform={`translate(${position.x}, ${position.y})`}
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="6"
                    className="hover-target"
                  />
                  <path
                    d="M -10,0 0,10 10,0 0,-10 z"
                    transform={`translate(${position.x}, ${position.y})`}
                    fill={ringColor}
                    className="blip-shape"
                  />
                </>
              ) : (
                <>
                  {/* This is for hover effects */}
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={9}
                    fill="transparent"
                    stroke="transparent"
                    strokeWidth="6"
                    className="hover-target"
                  />
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r={6}
                    fill={ringColor}
                    className="blip-shape"
                  />
                </>
              )}
            </g>
            
            {/* Only show text on hover using CSS */}
            <text
              x={position.x}
              y={position.y + 20}
              textAnchor="middle"
              fill="#333"
              fontSize="11"
              fontWeight="bold"
              opacity="0"
              className="blip-text"
            >
              {blip.name}
            </text>
          </g>
        );
      })}
    </>
  );
};

export default RadarBlips;