import React from 'react';

const About = () => {
  const skills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'UI/UX Design',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            From intuitive front-ends to robust back-ends, I thrive on creating
            digital magic that helps businesses sparkle online. Whether it's an
            AI-powered chatbot, a dynamic data-driven interface, or a
            beautifully designed website, I'm all about making the web a more
            exciting and intelligent place.
          </p>
          <h3 className="text-xl font-semibold text-purple-600 mb-4 text-center">
            My Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
