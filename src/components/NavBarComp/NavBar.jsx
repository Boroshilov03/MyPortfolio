/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const navLinkClass =
  "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300";

function NavBar({ toggleTheme, theme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isGraphHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navSolid = isGraphHome || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navSolid
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Mirlan Boroshilov
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className={navLinkClass}>
              About
            </Link>
            <Link to="/projects" className={navLinkClass}>
              Projects
            </Link>
            <Link to="/services" className={navLinkClass}>
              Services
            </Link>
            <Link to="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 md:hidden"
              aria-expanded={mobileOpen}
              aria-label="Open menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Button toggleTheme={toggleTheme} theme={theme} />
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-gray-200/80 py-4 dark:border-gray-700/80 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link to="/about" className={`${navLinkClass} py-1`}>
                About
              </Link>
              <Link to="/projects" className={`${navLinkClass} py-1`}>
                Projects
              </Link>
              <Link to="/services" className={`${navLinkClass} py-1`}>
                Services
              </Link>
              <Link to="/contact" className={`${navLinkClass} py-1`}>
                Contact
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
