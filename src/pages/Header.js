import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          PreviewED
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/job-search">Job Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
