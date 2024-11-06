import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../robert-torres-19vEieMwifU-unsplash.jpg';
import image2 from '../rohan-INSR6cq_NP4-unsplash.jpg';
import image3 from '../jan-canty-eBupAjL0HR0-unsplash.jpg'
import image from '../nico-evard-M7JZ5h4hF5w-unsplash.jpg';
import bgp from '../projects.jpg'
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Footer from './Footer';
import Blogs from './Blogs';
import Resume from './resume';
import Contact from './Contact';
import { twMerge } from 'tailwind-merge';

const HomePage: React.FC = () => {
  const profileItems = [
    { name: 'About Me', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Blogs', link: 'blogs' },
    { name: 'Skills', link: 'skills' },
    { name: 'Experience', link: 'experience' },
    { name: 'Contact', link: 'contact' },
  ];
  const item = profileItems[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  };

  return (
    <div className="relative" style={{ backgroundImage: `url(${image})` }}>
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${image1})` }}>
        <div className="flex items-center justify-center h-full bg-opacity-50">
          <div className="text-center">
            {/* Glitch Effect for Name */}
            <div className="relative inline-block">
              <h1 className="text-5xl font-serif font-extrabold leading-tight  ">
                <div className="stack " style={{ '--stacks': 1 }}>
                  <span className="bg-gradient-to-r from-red-800 to-amber-900 bg-clip-text text-transparent"style={{ '--index': 0 }}>Vinod Akshat</span>
                </div>
              </h1>
            </div>
            <p className="text-2xl font-serif leading-tight p-20">
                <span>Crafting innovative solutions and building the systems of tomorrow</span>

            </p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => scrollToSection(item.link)}
                className={twMerge(
                  'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                  'hover:tracking-wide transition-all duration-300 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-{textColor} transition duration-300 ease-out border-2 border-slate-500 rounded-full shadow-md group'
                )}
              >
                {item.name}
              </button>
              <div className="flex space-x-5">
                <Link
                  to="/all-projects"
                  className={twMerge(
                    'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                    'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                    'hover:tracking-wide transition-all duration-300 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-{textColor} transition duration-300 ease-out border-2 border-slate-500 rounded-full shadow-md group'
                  )}
                >
                  My Projects
                </Link>
                <Link
                  to="/all-blogs"
                  className={twMerge(
                    'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                    'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                    'hover:tracking-wide transition-all duration-300 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-{textColor} transition duration-300 ease-out border-2 border-slate-500 rounded-full shadow-md group'
                  )}
                >
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 bg-cover bg-center " style={{ backgroundImage: `url(${image})` }}>
        <div className="bg-opacity-50 py-20 ">
          <div className="max-w-6xl mx-auto text-center text-white space-y-4">
            <Projects limit={4} />
            <Link to="/all-projects">
              <button className={twMerge(
                  'pt-20 text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                  'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                  'hover:tracking-wide transition-all duration-300 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-{textColor} transition duration-300 ease-out border-2 border-slate-500 rounded-full shadow-md group'
                )}>
                See All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section id="skills" className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${bgp})` }}>
        <div className="bg-opacity-50 py-20">
          <div className="max-w-6xl mx-auto text-center text-white space-y-4">
            <Skills />
            <Experience />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${image3})` }}>
        <div className="bg-opacity-50 py-20">
          <div className="max-w-6xl mx-auto text-center text-white space-y-4">
            <Blogs limit={4} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${image2})` }}>
        <div className="max-w-6xl mx-auto text-center">
          <AboutMe />
        </div>
      </section>

      {/* Footer Section */}
      <section id={"contact"}>
        <Footer  />
      </section>

      {/* Resume & Contact Section */}
      <div className="flex-none">
        <Resume />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
