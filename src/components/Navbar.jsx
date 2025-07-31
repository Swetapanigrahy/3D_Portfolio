import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-2 md:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex-shrink-0">
            <a href="#hero" className="logo group relative" onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}>
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105 whitespace-nowrap">
                <span className="inline">SWETA</span>
                <span className="font-light"> PANIGRAHY</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <nav>
              <ul className="flex space-x-1 lg:space-x-3">
                {navLinks.map(({ link, name }) => (
                  <li key={name} className="group relative">
                    <a 
                      href={link} 
                      className="text-gray-300 hover:text-white px-4 py-3 text-base font-medium transition-colors duration-300 flex items-center h-full"
                    >
                      {name}
                      <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg shadow-xl rounded-b-lg py-2 px-4 z-50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map(({ link, name }) => (
                  <a
                    key={name}
                    href={link}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    {name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:opacity-90"
                >
                  Contact Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;