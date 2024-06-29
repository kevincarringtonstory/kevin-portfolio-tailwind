import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Kevin Carrington. Sunnyvale, CA.
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/kevington99"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-purple-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kevincarringtonstory"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-purple-200"
          >
            GitHub
          </a>
          <a
            href="https://x.com/KevinCarring"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 hover:text-purple-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
