import React from 'react';

interface BlogCardProps {
  Title: string;
  Description: string;
  imageSrc: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ Title, Description, imageSrc, link }) => {
  return (
    <div className="card fade-in-up bg-slate-700 w-full sm:w-[90%] md:w-96 lg:w-96 shadow-lg transition-transform duration-200 transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden border border-gray-200 cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <figure className="relative">
          <img 
            className="w-full h-28 md:h-48 text-teal-950 object-cover opacity-90 transition-opacity duration-200 hover:opacity-100" 
            src={imageSrc} 
            alt={Title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
        </figure>
      </a>
      <div className="card-body p-4">
        <h2 className="card-title text-xl md:text-2xl font-semibold text-gray-300 font-mono">{Title}</h2>
        <p className="text-sm md:text-base text-gray-400">
          {Description}
        </p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 inline-block px-4 py-2 bg-slate-800 text-white font-semibold rounded-lg shadow hover:bg-slate-700 transition duration-200"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
