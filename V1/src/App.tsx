import React, { useEffect } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Profilebar from './components/Profilebar';
import BDashboard from './components/BDashboard';
import BlogCard from './components/BlogCard';
import Resume from './components/resume';
import image from './jan-canty-eBupAjL0HR0-unsplash.jpg';
import image1 from './chuttersnap-hqVGQ4-D0NI-unsplash.jpg';
import image2 from './rohan-INSR6cq_NP4-unsplash.jpg';
import image3 from './nico-evard-M7JZ5h4hF5w-unsplash.jpg';
import image4 from './robert-torres-19vEieMwifU-unsplash.jpg';
import image5 from './94616eca-1f76-4320-a32c-0878f7c5846c.jpg';

function App() {
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
    <div  >
      {/* Sidebar */}
      <div className="flex-none w-full lg:w-1/4">
        <Profilebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow bg-white bg-fixed">
        <div className="pb-20">
          <div
            id="about"
            className="bg-auto text-slate-400 text-justify shadow-lg pt-10 pr-4 pl-4 md:pl-20 fade-in-section pb-20"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }}
          >
            <AboutMe />
          </div>

          <div
            id="projects"
            className="bg-auto text-slate-800 text-center shadow-lg fade-in-section pt-20 pl-4 md:pl-20 pb-20"
            style={{
              backgroundImage: `url(${image4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }}
          >
            <Projects />
          </div>

          <div
            id="blogs"
            className="bg-auto text-slate-800 text-center pr-4  shadow-2xl fade-in-section pt-10 pl-4 md:pl-20 pb-20"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }}
          >
            <Blogs />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-20 pr-4">
              <BlogCard />
              <BlogCard />
            </div>
          </div>

          <div
            id="skills"
            className="bg-auto text-slate-800 text-center shadow-lg fade-in-section pt-10 pl-4 md:pl-20 pb-20 pr-4 "
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh'
            }}
          >
            <Skills />
            <Experience />
          </div>
        </div>

        <div className="flex-none">
          <Resume />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
