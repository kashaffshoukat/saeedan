import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import {
  FaServicestack,
  FaUsers,
  FaBuilding,
  FaClipboard,
  FaSuitcase,
  FaBlog,
} from "react-icons/fa"; // Import your desired icons
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Services", to: "/services", icon: <FaServicestack /> },
    { name: "Team", to: "/team", icon: <FaUsers /> },
    { name: "Company", to: "/company", icon: <FaBuilding /> },
    { name: "Portfolio", to: "/portfolio", icon: <FaClipboard /> },
    { name: "Careers", to: "/careers", icon: <FaSuitcase /> },
    { name: "Blog", to: "/blog", icon: <FaBlog /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-primary text-white sticky md:h-24 top-0 z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow-lg" : ""
      }`}
    >
      <div
        className={`md:flex md:justify-between md:items-center py-4 md:py-0 px-4 ${
          isMenuOpen ? "" : "md:translate-y-4"
        }`}
      >
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={handleLinkClick}>
            <LazyLoadImage
              src="/assets/Logo.webp"
              effect="blur"
              className="w-16 cursor-pointer"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="absolute right-4 top-9 md:hidden">
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
          className={`md:flex md:items-center transition-all duration-1000 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } md:max-h-full`}
        >
          <div
            className={`flex flex-col gap-5 md:border-none border-t-2  py-4 md:py-0 md:flex-row md:space-x-8 md:mx-4`}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                onClick={handleLinkClick}
                className={`flex items-center relative group text-xl text-start transition duration-300 ${
                  location.pathname === link.to ? "text-yellow-400" : ""
                }`}
              >
                <span className="mr-2 md:hidden">{link.icon}</span>
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-28 h-0.5 bg-yellow-400 transform transition-transform duration-300 ${
                    location.pathname === link.to
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </nav>

        {!isMenuOpen && (
          <div className="hidden lg:block">
            <Link
              to="/contact-us"
              className="text-blue-800 bg-white hover:bg-gray-100 border border-white px-4 py-2 rounded-md transition duration-300"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
