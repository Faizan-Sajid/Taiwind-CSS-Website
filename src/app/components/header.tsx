"use client";
import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#">
            <span className="text-3xl font-bold font-poppins text-green-500">Glint.</span>
          </a>

          {/* Mobile menu button (visible only on mobile/tablet) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Full Menu for desktop, mobile menu when opened */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-black md:mt-0 md:p-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center lg:static lg:bg-transparent lg:opacity-100 lg:translate-x-0 ${
            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full md:opacity-100 md:translate-x-0'
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-2 text-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-2 text-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Services
            </a>
            <a
              className="my-2 text-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="my-2 text-white transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
