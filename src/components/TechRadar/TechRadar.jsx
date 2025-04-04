// import React, { useState, useEffect } from 'react';
// import RadarRings from './RadarRings';
// import RadarQuadrants from './RadarQuadrants';
// import RadarBlips from './RadarBlips';
// import RadarLegend from './RadarLegend';
// import { calculateBlipPosition } from '../../utils/radarHelpers';

// const TechRadar = ({ data }) => {
//   // State for radar dimensions and viewBox
//   const [dimensions] = useState({
//     width: 800,
//     height: 800,
//     radius: 400,
//     centerX: 400,
//     centerY: 400
//   });

//   // Calculate blip positions
//   const [blipPositions, setBlipPositions] = useState({});

//   useEffect(() => {
//     // Generate positions for all blips
//     const positions = {};
//     data.blips.forEach(blip => {
//       positions[blip.name] = calculateBlipPosition(blip, data, dimensions);
//     });
//     setBlipPositions(positions);
//   }, [data, dimensions]);

//   return (
//     <div className="relative w-full">
//       <svg
//         viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
//         width="100%"
//         height="100%"
//         className="bg-white"
//       >
//         {/* Rings */}
//         <RadarRings rings={data.rings} dimensions={dimensions} />
        
//         {/* Quadrant lines */}
//         <RadarQuadrants quadrants={data.quadrants} dimensions={dimensions} />
        
//         {/* Blips */}
//         <RadarBlips blips={data.blips} blipPositions={blipPositions} rings={data.rings} />
        
//         {/* Legend */}
//         <RadarLegend dimensions={dimensions} />
//       </svg>
//     </div>
//   );
// };

// export default TechRadar;
import React, { useState, useEffect } from 'react';
import RadarRings from './RadarRings';
import RadarQuadrants from './RadarQuadrants';
import RadarBlips from './RadarBlips';
import RadarLegend from './RadarLegend';
import TechDetails from '../TechDetails/TechDetails';
import { calculateBlipPosition } from '../../utils/radarHelpers';

const TechRadar = ({ data }) => {
  // State for radar dimensions and viewBox
  const [dimensions] = useState({
    width: 800,
    height: 800,
    radius: 400,
    centerX: 400,
    centerY: 400
  });

  // Calculate blip positions
  const [blipPositions, setBlipPositions] = useState({});
  
  // State for selected blip details
  const [selectedBlip, setSelectedBlip] = useState(null);

  useEffect(() => {
    // Generate positions for all blips
    const positions = {};
    data.blips.forEach(blip => {
      positions[blip.name] = calculateBlipPosition(blip, data, dimensions);
    });
    setBlipPositions(positions);
  }, [data, dimensions]);

  // Handle blip click
  const handleBlipClick = (blip) => {
    setSelectedBlip(blip);
  };

  // Close details modal
  const closeDetails = () => {
    setSelectedBlip(null);
  };

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        width="100%"
        height="100%"
        className="bg-white"
      >
        {/* Rings */}
        <RadarRings rings={data.rings} dimensions={dimensions} />
        
        {/* Quadrant lines */}
        <RadarQuadrants quadrants={data.quadrants} dimensions={dimensions} />
        
        {/* Blips */}
        <RadarBlips 
          blips={data.blips} 
          blipPositions={blipPositions} 
          rings={data.rings}
          onBlipClick={handleBlipClick}
        />
        
        {/* Legend */}
        <RadarLegend dimensions={dimensions} />
      </svg>
      
      {/* Details modal */}
      <TechDetails selectedBlip={selectedBlip} onClose={closeDetails} />
    </div>
  );
};

export default TechRadar;