import React from 'react';

const TechDetails = ({ selectedBlip, onClose }) => {
  if (!selectedBlip) return null;

  const ringNames = ["ADOPT", "TRIAL", "ASSESS", "HOLD"];
  const quadrantNames = ["TECHNIQUES", "TOOLS", "PLATFORMS", "LANGUAGES & FRAMEWORKS"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{selectedBlip.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-sm text-gray-500">Quadrant</span>
            <p className="font-medium">{quadrantNames[selectedBlip.quadrant]}</p>
          </div>
          <div className="bg-gray-100 p-2 rounded">
            <span className="text-sm text-gray-500">Ring</span>
            <p className="font-medium">{ringNames[selectedBlip.ring]}</p>
          </div>
          <div className="bg-gray-100 p-2 rounded col-span-2">
            <span className="text-sm text-gray-500">Status</span>
            <p className="font-medium">{selectedBlip.isNew ? "New/Moved" : "Established"}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Description</h3>
          <p className="text-gray-700">{selectedBlip.description}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Related Projects</h3>
          <ul className="list-disc list-inside">
            {selectedBlip.relatedProjects.map((project, index) => (
              <li key={index} className="text-gray-700">{project}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechDetails;