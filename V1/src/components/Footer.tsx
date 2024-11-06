// Footer.tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="from-[#1a1a1a] text-white p-10  ">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-lg font-semibold">Contact Me</p>
        <div className="flex items-center">
          <FaEnvelope className="mr-2" />
          <span>Email: <a href="mailto:akshayforrivers@gmail.com" className="underline">akshayforrivers@gmail.com</a></span>
        </div>
        <div className="flex items-center">
          <FaLinkedin className="mr-2" />
          <span>LinkedIn<a href="https://linkedin.com/in/vinod-akshat" className="underline"></a></span>
        </div>
        <div className="flex items-center">
          <FaGithub className="mr-2" />
          <span>GitHub<a href="https://github.com/akshayrivers" className="underline"></a></span>
        </div>
        <div className="flex items-center">
          <FaTwitter className="mr-2" />
          <span>Twitter<a href="https://twitter.com/vinodakshat1" className="underline"></a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
