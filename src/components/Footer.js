import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-20 mt-20">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li><a href="/about">About</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/users">Team</a></li>
          <li><a href="/leadership">Leadership</a></li>
          {/* Add more links here */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
