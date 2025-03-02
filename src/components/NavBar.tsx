import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-300 z-[100] isolate ${
          scrolled ? "bg-blue-900/90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-white">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-300 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-300 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900/95 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4 text-white">
                <li>
                  <a
                    href="#about"
                    className="block py-2 hover:text-blue-300 transition-colors"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="block py-2 hover:text-blue-300 transition-colors"
                    onClick={toggleMenu}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block py-2 hover:text-blue-300 transition-colors"
                    onClick={toggleMenu}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 hover:text-blue-300 transition-colors"
                    onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer div that adjusts height based on menu state */}
      <div
        className={`w-full transition-all duration-300 ${
          isMenuOpen ? "pt-[200px]" : "pt-[72px]"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
