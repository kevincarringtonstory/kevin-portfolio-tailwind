import React from 'react';
import ProjectSection from './ProjectSection';
import chatLogo from '../images/chatlogo.png';

const PortfolioPage = () => {
  const projects = [
    {
      title: 'Basic Chat Interface',
      description:
        'A sophisticated chatbot that uses the Llama 3-8B language model with groq to generate high-quality and fast responses.',
      imageUrl: chatLogo,
      projectUrl: 'https://replit.com/@Kevington99/Basic-Chat-Model',
    },
    {
      title: 'Girlfriend Food Picker',
      description:
        'Girlfriend Food Picker helps you suggest food options for your girlfriend based on her current mood, hunger level, and other factors.',
      imageUrl: 'https://via.placeholder.com/300x200',
      projectUrl: 'https://replit.com/@Kevington99/GirfriendFoodPicker',
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
