import React from 'react';
import BlogCard from './BlogCard';
import image from '../jan-canty-eBupAjL0HR0-unsplash.jpg';

interface Blog {
  Title: string;
  Description: string;
  Link: string;
  imageSrc: string;
}

interface BlogsProps {
  limit?: number;
}

const Blogs: React.FC<BlogsProps> = ({ limit }) => {
  const blogs: Blog[] = [
    { Title: "A Feast on life", Description: "A brief description of the blog.", Link: "https://docs.google.com/document/d/1v64LXfd4UjCis7unArQ0b-s5oezpRxsxC6nvY3ay_yU/edit?usp=sharing", imageSrc: image },
    { Title: "Blog Title 2", Description: "A brief description of the blog.", Link: "https://example.com/blog2", imageSrc: image },
  ];

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <section className="mx-auto flex flex-col items-center justify-between px-4 sm:px-2 md:px-8 py-10 bg-gray-950 bg-opacity-50 border-l-4 border-purple-600 rounded-md shadow-lg">
    <h1 className=" font-mono text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-gradient-to-r from-[rgb(146,86,30)] to-[rgb(150,77,9)] bg-clip-text text-shadow-md mb-8 pb-2">
      Writings
    </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {displayedBlogs.map((blog, index) => (
          <BlogCard 
            key={index} 
            Title={blog.Title} 
            Description={blog.Description} 
            imageSrc={blog.imageSrc} 
            link={blog.Link} 
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
