
import { twMerge } from 'tailwind-merge';

const Profilebar = () => {
  const profileItems = [
    { name: 'About Me', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Blogs', link: 'blogs' },
    { name: 'Skills', link: 'skills' },
    { name: 'Experience', link: 'experience' },
    { name: 'Contact', link: 'contact' },
  ];

  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id ${id} not found`);
    }
  };

  return (
    <div className="fixed top-5 left-5 z-50 group">
      {/* Sidebar Button */}
      <button className="p-2 bg-gray-900 rounded-full text-white">
        {/* Add SVG Icon here */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>

      </button>

      {/* Sidebar Menu */}
      <div className="absolute left-12 top-0 bg-gray-800/80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-start p-6 space-y-4">
          {profileItems.map((item, index) => (
            <div
              key={index}
              onClick={() => scrollToSection(item.link)}
              className={twMerge(
                'text-white text-sm px-3 py-2 rounded-lg cursor-pointer',
                'hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500',
                'hover:tracking-wide transition-all duration-300'
              )}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profilebar;
