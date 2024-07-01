import React from 'react';
import ProjectSection from './ProjectSection';
import chatLogo from '../images/chatlogo.png';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Basic Chat Model',
      description:
        'This project implements a sophisticated chatbot that uses the Llama 3-8B language model to generate high-quality responses. It leverages the powerful capabilities of this model to process user queries and provide coherent and informative answers.',
      imageUrl: chatLogo,
      projectUrl: 'https://replit.com/@Kevington99/Basic-Chat-Model',
    },
    {
      title: 'Project Two',
      description:
        'Description of your second project. I will elaborate on the technologies used and the problems it solves soon.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#',
    },
    {
      title: 'Project Three',
      description:
        'Description of your third project. I will elaborate on the technologies used and the problems it solves soon.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: '#',
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-purple-600 text-center my-12">
        My Projects
      </h1>
      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
        />
      ))}
    </div>
  );
};

export default PortfolioPage;
