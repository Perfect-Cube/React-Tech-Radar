import React from 'react';
import TechRadar from './components/TechRadar';
import QuadrantExplanations from './components/QuadrantExplanations/QuadrantExplanations';
import RingDefinitions from './components/RingDefinitions/RingDefinitions';
import { radarData } from './data/radarData';

function App() {
  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tech Radar</h1>
      <p className="mb-4 text-center text-gray-600">
      </p>
      
      <TechRadar data={radarData} />
      <QuadrantExplanations />
      <RingDefinitions />
    </div>
  );
}

export default App;