import React from 'react';
import ProjectSection from './ProjectSection';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Project One',
      description:
        'This is a description of your first project. You can elaborate on the technologies used and the problems it solves.',
      imageUrl: '/api/placeholder/300/200',
    },
    {
      title: 'Project Two',
      description:
        'Description of your second project. Highlight your role and the impact of the project.',
      imageUrl: '/api/placeholder/300/200',
    },
    // Add more projects as you build them
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-purple-600 text-center my-12">
        My Projects
      </h1>
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default PortfolioPage;
