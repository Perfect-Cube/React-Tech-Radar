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
        // Tools - Adopt
        { name: "Claude Sonnet", description: "AI assistant model from Anthropic", quadrant: 1, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Tuple", description: "Remote pair programming tool", quadrant: 1, ring: 0, isNew: false, relatedProjects: [] },
        { name: "YOLO", description: "Real-time object detection system", quadrant: 1, ring: 0, isNew: false, relatedProjects: [] },
    
        // Tools - Trial
        { name: "D2", description: "Declarative diagramming language", quadrant: 1, ring: 1, isNew: false, relatedProjects: [] },
        { name: "metabase", description: "Business intelligence and analytics tool", quadrant: 1, ring: 1, isNew: false, relatedProjects: [] },
        { name: "Anything LLM", description: "Open-source ChatGPT alternative", quadrant: 1, ring: 1, isNew: true, relatedProjects: [] },
    
        // Techniques - Adopt
        { name: "GraphRAG", description: "Graph-based Retrieval Augmented Generation", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Small language models", description: "Smaller, efficient AI language models", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Model Distillation", description: "Technique to create smaller models from larger ones", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Prompt Engineering", description: "Designing effective prompts for AI models", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Mixed reality", description: "Blend of physical and digital worlds", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Ambient Computing", description: "Technology integrated into environment", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Explainable AI", description: "AI systems with understandable decisions", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Multimodal AI", description: "AI that handles multiple input/output types", quadrant: 0, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Shadow AI mastering", description: "AI mastering process", quadrant: 0, ring: 0, isNew: true, relatedProjects: [] },
    
        // Techniques - Trial
        { name: "Quantum computing", description: "Computing based on quantum mechanics", quadrant: 0, ring: 1, isNew: true, relatedProjects: [] },
        { name: "Quantum Sensing", description: "Detecting signals using quantum properties", quadrant: 0, ring: 1, isNew: true, relatedProjects: [] },
        { name: "Edge Computing", description: "Processing data near the source", quadrant: 0, ring: 1, isNew: false, relatedProjects: [] },
        { name: "Adaptive AI", description: "AI that adapts to changing conditions", quadrant: 0, ring: 1, isNew: true, relatedProjects: [] },
        { name: "Advanced Swarm Systems", description: "Decentralized, self-organized systems", quadrant: 0, ring: 1, isNew: false, relatedProjects: [] },
    
        // Techniques - Assess
        { name: "Wearable Technologies", description: "Computing devices worn on body", quadrant: 0, ring: 2, isNew: false, relatedProjects: [] },
        { name: "HMO", description: "Health maintenance organization", quadrant: 0, ring: 2, isNew: false, relatedProjects: [] },
        { name: "Digital Identity", description: "Electronic verification of identity", quadrant: 0, ring: 2, isNew: false, relatedProjects: [] },
        { name: "5G/6G", description: "Mobile network technologies", quadrant: 0, ring: 2, isNew: true, relatedProjects: [] },
        { name: "3D Data visualization", description: "Visual representation of data in 3D", quadrant: 0, ring: 2, isNew: false, relatedProjects: [] },
    
        // Frameworks - Adopt
        { name: "Crew AI", description: "AI framework for team collaboration", quadrant: 2, ring: 0, isNew: true, relatedProjects: [] },
        { name: "Langraph", description: "Graph-based framework for language models", quadrant: 2, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Agony", description: "Framework for efficient data processing", quadrant: 2, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Langchain", description: "Framework for developing applications powered by language models", quadrant: 2, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Langsmith", description: "Developer platform for LLM applications", quadrant: 2, ring: 0, isNew: false, relatedProjects: [] },
    
        // Platforms - Adopt
        { name: "Trino", description: "Distributed SQL query engine", quadrant: 3, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Gitlab CI/CD", description: "Continuous integration and delivery platform", quadrant: 3, ring: 0, isNew: false, relatedProjects: [] },
        { name: "Deepseek R1", description: "AI platform for research", quadrant: 3, ring: 0, isNew: true, relatedProjects: [] },
        { name: "Chain loop", description: "Software supply chain management platform", quadrant: 3, ring: 0, isNew: false, relatedProjects: [] },
    
        // Platforms - Trial
        { name: "Railway", description: "Application deployment platform", quadrant: 3, ring: 1, isNew: false, relatedProjects: [] }
      ]
    };