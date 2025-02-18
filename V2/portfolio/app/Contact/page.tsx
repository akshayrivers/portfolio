'use client'
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://sheetdb.io/api/v1/x3l7fvjpp9ymi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: formData }),
    });
    if (response.ok) setSubmitted(true);
  };
  

  return (
    <div className="py-10 px-4 md:px-10">
      <Navbar color="red" />
      <h1 className="custom-font text-9xl text-red-800 text-center mt-10">Contact ME</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-8 space-y-4 max-w-lg mx-auto">
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <textarea 
          name="message" 
          placeholder="Enter your message" 
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-2 bg-white sigmar-regular text-gray-900 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />
        <button 
          type="submit" 
          className="bg-red-800 sigmar-regular text-white rounded-lg p-2 mt-4 w-full hover:bg-red-700 transition-colors duration-200" 
        >
          Submit
        </button>
      </form>
      
      {submitted && (
        <p className="mt-6 text-center text-red-600 text-xl sigmar-regular">
          Thank you for your message!
        </p>
      )}

      <div className="mt-10 text-center">
        {/* Social Links and Contact Details */}
        <p className="text-red-800 text-5xl mb-4  custom-font">You can also reach me via:</p>
        <div className="flex items-center justify-center space-x-6">
          <a 
            href="https://x.com/Vinodakshat1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular"
          ><FaTwitter size={30} />
            Twitter
          </a>
          <a 
            href="https://www.linkedin.com/in/vinod-akshat/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular"
          >
            <FaLinkedin size={30} />
            LinkedIn
          </a>
          <a 
            href="mailto:akshayforrivers@gmail.com" 
            className="text-red-800 hover:text-red-600 transition-colors duration-200 sigmar-regular"
          >
            <FaEnvelope size={30} />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
