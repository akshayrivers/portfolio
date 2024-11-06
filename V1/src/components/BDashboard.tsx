import React from 'react';

interface BDashboardProps {
  Title: string;
  Description: string;
  Link: string;
  imageSrc: string;
}

const BDashboard: React.FC<BDashboardProps> = ({ Title, Description, Link, imageSrc }) => {
  return (
    <div className="group w-80 sm:w-80 md:w-96 bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:bg-opacity-70 dark:border-gray-700">
      {/* Image */}
      <div className="relative w-full h-56">
        <img 
          src={imageSrc} 
          className="absolute inset-0 w-full h-full object-cover rounded-md group-hover:opacity-40 transition-opacity duration-300" 
          alt="Project Thumbnail" 
        />
      </div>

      {/* Title and Description */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-6">
        <h5 className="text-lg font-bold text-white">{Title}</h5>
        <p className="text-sm text-white mt-2">{Description}</p>
        <div className="mt-3">
          <a 
            href={Link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default BDashboard;
