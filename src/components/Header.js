import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-purple-600">
          KC
        </a>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-xl text-purple-600 hover:text-purple-400 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-xl text-purple-600 hover:text-purple-400 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="mailto:kevington99@gmail.com"
                className="text-xl text-purple-600 hover:text-purple-400 transition-colors duration-300"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
