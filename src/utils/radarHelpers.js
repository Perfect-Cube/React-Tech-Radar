export const radarData = {
    rings: [
      { name: "ADOPT", color: "#5ba300", radius: 130 },
      { name: "TRIAL", color: "#009eb0", radius: 220 },
      { name: "ASSESS", color: "#c7ba00", radius: 310 },
      { name: "HOLD", color: "#e09b96", radius: 400 }
    ],
    quadrants: [
      { name: "TECHNIQUES", startAngle: 0, endAngle: 90 },
      { name: "TOOLS", startAngle: 90, endAngle: 180 },
      { name: "PLATFORMS", startAngle: 180, endAngle: 270 },
      { name: "LANGUAGES & FRAMEWORKS", startAngle: 270, endAngle: 360 }
    ],
    blips: [
      { name: "React", quadrant: 3, ring: 0, isNew: false },
      { name: "TypeScript", quadrant: 3, ring: 0, isNew: true },
      { name: "Jest", quadrant: 1, ring: 0, isNew: false },
      { name: "Docker", quadrant: 2, ring: 0, isNew: false },
      { name: "Kubernetes", quadrant: 2, ring: 1, isNew: true },
      { name: "GraphQL", quadrant: 3, ring: 1, isNew: false },
      { name: "CI/CD", quadrant: 0, ring: 0, isNew: false },
      { name: "Serverless", quadrant: 0, ring: 1, isNew: true },
      { name: "PWA", quadrant: 0, ring: 2, isNew: false },
      { name: "WebAssembly", quadrant: 3, ring: 2, isNew: true },
      { name: "Blockchain", quadrant: 2, ring: 3, isNew: false },
      { name: "Angular", quadrant: 3, ring: 3, isNew: false },
      { name: "Jenkins", quadrant: 1, ring: 2, isNew: false },
      { name: "MongoDB", quadrant: 2, ring: 1, isNew: false },
      { name: "Redux", quadrant: 3, ring: 1, isNew: false },
      { name: "Cypress", quadrant: 1, ring: 1, isNew: true },
      { name: "Microservices", quadrant: 0, ring: 0, isNew: false },
      { name: "Vue.js", quadrant: 3, ring: 2, isNew: false },
      { name: "AWS", quadrant: 2, ring: 0, isNew: false },
      { name: "TDD", quadrant: 0, ring: 0, isNew: false },
    ]
  };

  // src/utils/radarHelpers.js
// export const calculateBlipPosition = (blip, radarData, dimensions) => {
//     const { quadrant, ring } = blip;
//     const quadrantData = radarData.quadrants[quadrant];
//     const ringData = radarData.rings[ring];
    
//     // Calculate the random angle within the quadrant
//     const startAngle = quadrantData.startAngle * (Math.PI / 180);
//     const endAngle = quadrantData.endAngle * (Math.PI / 180);
//     const randomAngle = startAngle + Math.random() * (endAngle - startAngle);
    
//     // Calculate inner and outer radius for the ring
//     const outerRadius = ringData.radius;
//     const innerRadius = ring === 0 ? 0 : radarData.rings[ring - 1].radius;
    
//     // Random radius within the ring
//     const randomRadius = innerRadius + Math.random() * (outerRadius - innerRadius);
    
//     // Convert to cartesian coordinates
//     const x = dimensions.centerX + randomRadius * Math.cos(randomAngle);
//     const y = dimensions.centerY + randomRadius * Math.sin(randomAngle);
    
//     return { x, y };
//   };
export const calculateBlipPosition = (blip, radarData, dimensions) => {
    const { quadrant, ring } = blip;
    const quadrantData = radarData.quadrants[quadrant];
    const ringData = radarData.rings[ring];
    
    // Calculate the random angle within the quadrant
    const startAngle = quadrantData.startAngle * (Math.PI / 180);
    const endAngle = quadrantData.endAngle * (Math.PI / 180);
    const randomAngle = startAngle + Math.random() * (endAngle - startAngle);
    
    // Calculate inner and outer radius for the ring
    const outerRadius = ringData.radius;
    const innerRadius = ring === 0 ? 0 : radarData.rings[ring - 1].radius;
    
    // Random radius within the ring
    const randomRadius = innerRadius + Math.random() * (outerRadius - innerRadius);
    
    // Convert to cartesian coordinates
    const x = dimensions.centerX + randomRadius * Math.cos(randomAngle);
    const y = dimensions.centerY + randomRadius * Math.sin(randomAngle);
    
    return { x, y };
  };
  