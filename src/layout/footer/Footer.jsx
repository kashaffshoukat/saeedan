import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate =useNavigate()

  const gohome=()=>{
    navigate('/')
  }
  return (
    <footer className="bg-primary  text-white px-4">
      <div className="flex items-center justify-between py-6">
        <img onClick={gohome} src="/assets/Logo.webp" alt="Logo" className="w-14 cursor-pointer " />
        <div className="flex items-center">
          <a href="https://www.linkedin.com/company/saeedan-technology-pvt-ltd/posts/" target="_blank"><FaLinkedin  size={25} className="cursor-pointer mx-4" /></a>
         <a href="https://www.facebook.com/saeedantechnologyofficial" target="_blank"><FaFacebook  size={25} className="cursor-pointer mx-4" /></a>
         <a href="https://www.instagram.com/saeedantechnology/" target="_blank"><FaInstagram size={25} className="cursor-pointer mx-4" /></a>
         <a href="https://www.pinterest.com/saeedantechnology/" target="_blank"><FaPinterest size={25} className="cursor-pointer mx-4" /></a>

        </div>
      </div>
      <div className="py-0">
        <hr class="text-white w-full" />
      </div>
      <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="mt-4">
            Saeedan Technology is a leading software development company located
            in Lahore, Pakistan. We are committed to developing innovative
            software solutions for leading enterprises worldwide.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Have a Question?</h3>
          <div className="flex items-center mb-2">
            <a href="tel:+923007861566" className="flex items-center">
              <IoCall className="cursor-pointer" />
              <span className="ml-2">+92 300 7861566</span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="mailto:contact@saeedantechpvt.com"
              className="flex items-center"
            >
              <MdEmail className="cursor-pointer" />
              <span className="ml-2">contact@saeedantechpvt.com</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-gray-300">
                Team
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-gray-300">
             Company
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gray-300">
              Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-300">
              Blog
              </Link>
            </li>
          </ul>

        </div>
      </div>

      <div className="border-t border-white mt-8 py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p>&copy; 2024 | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
