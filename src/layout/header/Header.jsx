import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Button from "../../components/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const navLinks = [
    { name: "Services", to: "/services" },
    { name: "Team", to: "/team" },
    { name: "Company", to: "/company" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Careers", to: "/careers" },
    { name: "Blog", to: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-primary text-white sticky top-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img src="/assets/Logo.webp" alt="Logo" className="w-16" />
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <GiCancel size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>

        <nav
          className={`md:flex ${
            isMenuOpen ? "flex" : "hidden"
          } space-x-6 md:space-x-8`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="relative group text-xl font-semibold hover:text-yellow-400 transition duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>

        <Link
          to="/contact-us"
          className="text-blue-800 bg-white hover:bg-gray-100 border border-white px-4 py-2 rounded-md transition duration-300"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
};

export default Header;
