import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const profileItems = [
    { name: 'About Me', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Blogs', link: 'blogs' },
    { name: 'Skills', link: 'skills' },
    { name: 'Experience', link: 'experience' },
    { name: 'Contact', link: 'contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu after navigation
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-0 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            {/* SVG Content */}
          </svg>
        </h1>

        {/* Hamburger Icon for mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (only visible on larger screens) */}
        <ul className="hidden sm:flex space-x-6">
          <li>
            <Link to="/">
              <button
                className={twMerge(
                  'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                  'hover:tracking-wide transition-all duration-300'
                )}
              >
                Home
              </button>
            </Link>
          </li>
          {profileItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item.link)}
                className={twMerge(
                  'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                  'hover:tracking-wide transition-all duration-300'
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-900 bg-opacity-75 p-4">
          <ul className="space-y-4">
            {profileItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.link)}
                  className={twMerge(
                    'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                    'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                    'hover:tracking-wide transition-all duration-300'
                  )}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
