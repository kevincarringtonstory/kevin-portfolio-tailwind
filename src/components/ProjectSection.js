import React from 'react';

const ProjectSection = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 border-b border-purple-200">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src={`https://via.placeholder.com/300x200/9C27B0/FFFFFF?text=${title}`}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-2/3 md:pl-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-400 transition-colors duration-300">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
