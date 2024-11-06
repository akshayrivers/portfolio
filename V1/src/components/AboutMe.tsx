import { Link } from 'react-router-dom';

import profilepic1 from '../WhatsApp Image 2024-11-06 at 19.52.36.jpeg';
import profilepic2 from '../WhatsApp Image 2024-11-06 at 19.52.37.jpeg';
import profilepic3 from '../WhatsApp Image 2024-11-06 at 19.52.39.jpeg';
import { twMerge } from 'tailwind-merge';

function AboutMe() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row items-start justify-between px-4 md:px-8 py-10 bg-gray-950 bg-opacity-50 border-l-4 border-purple-600 rounded-md shadow-lg">
      {/* Image on the left for small screens and alongside text for larger screens */}
      <div className="mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
        <img
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover shadow-lg rounded-full cursor-pointer"
          src={profilepic3}
          alt="User Profile Picture"
        />
        <div className="flex space-x-4 mt-6">
          <Link 
            to="/all-projects" 
            className={twMerge(
              'relative inline-flex items-center justify-center px-6 py-3',
              'overflow-hidden font-medium text-white transition-all duration-300 ease-out',
              'rounded-full shadow-lg group hover:bg-gradient-to-r hover:from-purple-500 hover:to-indigo-500',
              'border-2 border-purple-500 transform hover:-translate-y-1'
            )}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
            <span className="relative text-sm font-semibold group-hover:text-white">My Projects</span>
          </Link>
          
          <Link 
            to="/all-blogs" 
            className={twMerge(
              'relative inline-flex items-center justify-center px-6 py-3',
              'overflow-hidden font-medium text-white transition-all duration-300 ease-out',
              'rounded-full shadow-lg group hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
              'border-2 border-green-400 transform hover:-translate-y-1'
            )}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
            <span className="relative text-sm font-semibold group-hover:text-white">Blogs</span>
          </Link>
        </div>
      </div>

      {/* About Me Content */}
      <div className="text-left max-w-xl">
        <h1 className="text-shadow text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-gradient-to-r from-slate-800 to-purple-700 border-slate-300 bg-clip-text">
          About Me
        </h1>
        <p className="mt-4 text-lg md:text-xl cursor-text text-white leading-relaxed">
          Hey! I’m a second-year Computer Science student at <span className="font-bold text-teal-400">NIT Srinagar</span>, and I’m more about building the systems behind the scenes. My aim? To turn fresh ideas into efficient backends and create seamless, powerful technologies that just work.
          <br />
          <br />
          I work with languages like <span className="text-purple-400 font-semibold">Java, Rust, and JavaScript</span>, 
          and I’m currently exploring the world of database development. Whether it’s building a database from scratch 
          or experimenting with different backend technologies, I’m diving deep into the details to make things work 
          efficiently and smoothly.
          <br />
          <br />
          Some of my recent projects include creating interactive web apps, learning Rust for system-level tasks, 
          and migrating Spotify playlists to YouTube. When I’m not coding, you’ll find me writing short stories — 
          blending creativity and tech for the fun of it.
          <br />
          <br />
          Oh, and I use Neovim for my development — it’s a powerful tool that helps me stay focused and productive. 
          I’m always excited to learn, take on new challenges, and collaborate on projects that push the boundaries of 
          what tech can do. Let’s make something amazing happen!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
