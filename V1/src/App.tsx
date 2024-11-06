import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';

import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlog';
import Navbar from './components/Navbar'; // Import Navbar
import HomePage from './components/Homepage';

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

        </div>
      </div>
    </Router>
  );
};

export default App;
