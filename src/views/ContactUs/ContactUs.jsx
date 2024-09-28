import React from "react";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import Page from "../../components/page";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
const ContactUs = () => {
  return (
    <Page title="Contact Us">
      <div className="bg-primary text-white py-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="text-center w-72">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-5xl md:text-7xl border border-white p-2 rounded-full" />
            </div>
            <p className="w-full">
              Office # 120-D, 5th Floor, DHA Phase 8 Commercial Broadway, Lahore
            </p>
          </div>

          <div className="text-center w-72">
            <div className="flex justify-center mb-4">
              <IoMdMail className="text-5xl md:text-7xl border border-white p-2 rounded-full" />
            </div>
            <p>contact@saeedantechpvt.com</p>
          </div>

          <div className="text-center w-72">
            <div className="flex justify-center mb-4">
              <IoMdShare className="text-5xl md:text-7xl border border-white p-2 rounded-full" />
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/company/saeedan-technology-pvt-ltd/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://www.facebook.com/saeedantechnologyofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/saeedantechnology/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </Page>
  );
};

export default ContactUs;
