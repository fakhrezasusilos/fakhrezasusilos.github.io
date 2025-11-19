import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow">
      <div className="max-w-3xl mx-auto px-5 py-3 flex justify-center items-center relative">

        {/* Hamburger Button (now on the left) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden absolute left-5 text-[#2c3e50] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation - Centered */}
        <div className="hidden sm:flex space-x-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="sm:hidden px-5 pb-4">
          <div className="flex flex-col space-y-2 text-center">
            <NavLinks onClick={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }) => (
  <>
    <a href="#about" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">About</a>
    <a href="#experience" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Experience</a>
    <a href="#achievement" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Achievement</a>
    <a href="#skills" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Skills</a>
    <a href="#projects" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Projects</a>
    <a href="#resume" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Resume</a>
    <a href="#contact" onClick={onClick} className="text-[#2c3e50] hover:text-blue-600">Contact</a>
  </>
);

export default Navbar;
