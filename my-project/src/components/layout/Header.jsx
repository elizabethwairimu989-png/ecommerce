import React from "react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          ISA-TECH
        </a>

        {/* Navigation Links */}
        <nav className="space-x-4 hidden md:flex">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
