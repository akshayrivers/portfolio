import image from '../nico-evard-M7JZ5h4hF5w-unsplash.jpg';

function BlogCard() {
  return (
    <div className="card bg-white w-full sm:w-80 md:w-96 shadow-lg transition-transform duration-200 transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden border border-gray-200">
      <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
        <figure className="relative">
          <img 
            className="w-full h-48 object-cover opacity-90 transition-opacity duration-200 hover:opacity-100" 
            src={image} 
            alt="Shoes" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
        </figure>
      </a>
      <div className="card-body p-4">
        <h2 className="card-title text-xl md:text-2xl font-semibold text-gray-800">Shoes!</h2>
        <p className="text-sm md:text-base text-gray-600">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <a 
          href="http://localhost:3000" 
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
