import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Company", href: "#company" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "#blog" },
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
          <img src="/assets/Logo.webp" alt="Logo" className="w-14" />
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} className="hover:text-gray-300">
              {link.name}
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
