import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl font-bold"><a href="/">Demo Site</a></h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/users" className="text-white hover:text-gray-400">
              Team
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/products" className="text-white hover:text-gray-400">
              Products
            </a>
          </li>
          <li>
            <a href="/contacts" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
