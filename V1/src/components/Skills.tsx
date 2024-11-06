import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiC, SiCplusplus, SiRust, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

function Skills() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center px-4 md:px-8 py-10 bg-gray-900 bg-opacity-80 rounded-md shadow-md border-l-4 border-x-teal-500 border-y-teal-700">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-700 mb-8">
        Skills
      </h1>

      <div className="w-full max-w-4xl grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Icons Only */}
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiTypescript className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <FaJava className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiC className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiCplusplus className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiRust className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <FaReact className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiTailwindcss className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <FaNodeJs className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiMongodb className="text-teal-400 text-4xl" />
        </div>
        <div className="flex items-center justify-center p-3 bg-gray-800 rounded-full shadow-md hover:scale-105 transition-transform duration-200">
          <SiPostgresql className="text-teal-400 text-4xl" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
