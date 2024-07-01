import React from 'react';

const ProjectSection = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 border-b border-purple-200">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <div className="w-full aspect-w-16 aspect-h-9 bg-transparent flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="max-w-full max-h-full object-contain shadow-none"
          />
        </div>
      </div>
      <div className="md:w-2/3 md:pl-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-400 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
