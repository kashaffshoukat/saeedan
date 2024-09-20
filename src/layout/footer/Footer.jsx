import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
  return (
    <footer className="bg-primary  text-white px-4">
      <div className="flex items-center justify-between py-6">
        <LazyLoadImage
          src="/assets/Logo.webp"
          effect="blur"
          className="w-14  object-cover "
          alt="Logo"
        />
        <div className="flex items-center">
          <FaLinkedin size={25} className="cursor-pointer mx-4" />
          <FaFacebook size={25} className="cursor-pointer mx-4" />
          <FaInstagram size={25} className="cursor-pointer mx-4" />
        </div>
      </div>
      <div className="py-0">
        <hr className="text-white w-full" />
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
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
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
