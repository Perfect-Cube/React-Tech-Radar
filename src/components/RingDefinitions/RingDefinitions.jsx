import React from 'react';

const RingDefinitions = () => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-xl font-bold mb-4">Ring Definitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow bg-green-50">
          <h3 className="font-bold mb-2 text-green-700">ADOPT</h3>
          <p>We strongly recommend these technologies. We have used them in production with success.</p>
        </div>
        <div className="p-4 border rounded shadow bg-blue-50">
          <h3 className="font-bold mb-2 text-blue-700">TRIAL</h3>
          <p>Worth pursuing. It's important to understand how to build up this capability.</p>
        </div>
        <div className="p-4 border rounded shadow bg-yellow-50">
          <h3 className="font-bold mb-2 text-yellow-700">ASSESS</h3>
          <p>Worth exploring with the goal of understanding how it will affect your enterprise.</p>
        </div>
        <div className="p-4 border rounded shadow bg-red-50">
          <h3 className="font-bold mb-2 text-red-700">HOLD</h3>
          <p>Proceed with caution. Best to avoid starting new projects with these technologies.</p>
        </div>
      </div>
    </div>
  );
};

export default RingDefinitions;
