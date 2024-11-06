import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Profilebar from './components/Profilebar';
import Resume from './components/resume';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlog';
import Navbar from './components/Navbar'; // Import Navbar
import HomePage from './components/Homepage';

import image from './jan-canty-eBupAjL0HR0-unsplash.jpg';
import image2 from './rohan-INSR6cq_NP4-unsplash.jpg';
import image3 from './nico-evard-M7JZ5h4hF5w-unsplash.jpg';
import image4 from './robert-torres-19vEieMwifU-unsplash.jpg';

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
        {/* Navbar and Profilebar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow" style={{ backgroundColor: '#2a2a2a' }}>
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
              </>
            } />
            
            {/* Routes for All Projects and All Blogs */}
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
          </Routes>

          {/* Resume and Contact Section */}
          <div className="flex-none">
            <Resume />
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
