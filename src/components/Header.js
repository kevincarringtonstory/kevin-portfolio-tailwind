import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-purple-600">
          KC
        </a>
        <nav>
          <ul className="flex space-x-8">
            {['About', 'Projects', 'Hire Me'].map((item) => (
              <li key={item}>
                <a
                  href={
                    item === 'Hire Me'
                      ? `mailto:kevington99@gmail.com`
                      : `#${item.toLowerCase()}`
                  }
                  className="text-xl text-purple-600 hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
