import BDashboard from "./BDashboard";
import image from '../nico-evard-M7JZ5h4hF5w-unsplash.jpg';

function Projects() {
  const projects = [
    {
      Title: "Project Title 1",
      Description: "A brief description of the project.",
      Link: "https://github.com/link1",
      imageSrc: image,
    },
    {
      Title: "Project Title 2",
      Description: "A brief description of the project.",
      Link: "https://github.com/link2",
      imageSrc: image,
    },
    // Add more project objects as needed
  ];
  
  return (
    <section className="mx-auto flex flex-col items-center justify-between px-4 md:px-8 py-10 bg-gray-950 bg-opacity-50 border-l-4 border-purple-600 rounded-md shadow-lg">
      <h1 className="text-shadow text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <BDashboard 
            key={index}
            Title={project.Title} 
            Description={project.Description} 
            Link={project.Link} 
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
