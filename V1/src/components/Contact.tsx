import  { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // State to manage visibility of contact information
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 group flex flex-col items-start">
      {/* Contact Information Popup */}
      {isVisible && (
        <div 
          id="contact-info" 
          className="absolute left-0 bottom-12 bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 p-4"
        >
          <div className="flex flex-col items-start space-y-4 text-white">
            <p className="text-lg font-semibold">Hello there!</p>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" /> 
              <p>Email: <span className="underline">akshayforrivers@gmail.com</span></p>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="mr-2" />
              <p>LinkedIn: <a href="https://linkedin.com/in/vinod-akshat" className="underline">Your Profile</a></p>
            </div>
            <div className="flex items-center">
              <FaGithub className="mr-2" />
              <p>GitHub: <a href="https://github.com/akshayrivers" className="underline">Your Profile</a></p>
            </div>
            <div className="flex items-center">
              <FaTwitter className="mr-2" />
              <p>Twitter: <a href="https://twitter.com/vinodakshat1" className="underline">Your Profile</a></p>
            </div>
            {/* Add more social links as needed */}
          </div>
        </div>
      )}
      {/* Resume button */}
      <button 
        onClick={toggleVisibility} 
        className="p-2 bg-stone-500 rounded-full text-white flex items-center mt-2"
        aria-expanded={isVisible}
        aria-controls="contact-info"
      >
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        Contact Me
      </button>
    </div>
  );
};

export default Contact;
