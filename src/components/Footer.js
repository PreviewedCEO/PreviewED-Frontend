import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {currentYear} PreviewED. All rights reserved.
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
