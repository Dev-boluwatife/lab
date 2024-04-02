import React, { useState } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-8 border-b border-black border-opacity-10">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <ul
          className={`md:flex items-center gap-10 ${
            showMenu ? 'block absolute top-[6rem]' : 'hidden'
          }`}
        >
          <li>About</li>
          <li>Service</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
