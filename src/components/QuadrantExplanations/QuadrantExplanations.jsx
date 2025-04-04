// src/components/QuadrantExplanations/QuadrantExplanations.jsx
import React from 'react';

const QuadrantExplanations = () => {
  return (
    <div className="mt-8 w-full">
      <h2 className="text-xl font-bold mb-4">Quadrant Explanations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">TECHNIQUES</h3>
          <p>Elements of a software development process, such as experience design, versioning schemes, or test-driven development</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">TOOLS</h3>
          <p>Software development tools like editors, configuration management, or CI/CD pipelines</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">PLATFORMS</h3>
          <p>Things we build software on top of: cloud infrastructure, databases, or blockchain platforms</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">LANGUAGES & FRAMEWORKS</h3>
          <p>Programming languages and frameworks that directly enable software development</p>
        </div>
      </div>
    </div>
  );
};

export default QuadrantExplanations;