import React from 'react';
import BDashboard from "./BDashboard";
// import image from '../nico-evard-M7JZ5h4hF5w-unsplash.jpg';
import http from '../http.jpg';
import play from '../plau.jpg';
import wallet from '../wallet1.jpg';
import qr from '../qr.jpg'

interface Project {
  Title: string;
  Description: string;
  Link: string;
  imageSrc: string;
}

interface ProjectsProps {
  limit?: number;
}

const Projects: React.FC<ProjectsProps> = ({ limit }) => {
  const projects: Project[] = [
    { Title: "PLaylist Migration", Description: "A Web application handling the migration of playlists from Spotify to Youtube as of now", Link: "https://github.com/akshayrivers/Playlist_MIgration", imageSrc: play },
    { Title: "Qr_code_scanner ", Description: "A deployed web application used to scan QR code to authenticate the Registered user in Techvaganza and see the events the user is participating in.", Link: "https://github.com/akshayrivers/qr_code_scanner", imageSrc: qr },
    { Title: "Paytm-Wallet ", Description: "V1: A project imitating the basic functioning of a Paytm wallet.", Link: "https://github.com/akshayrivers/Paytm-Wallet", imageSrc: wallet },
    { Title: " http-server ", Description: "A simple http server in java from scratch, handling GET POST PUT DELETE requests.", Link: "https://github.com/akshayrivers/http-server", imageSrc: http },
    //{ Title: "Project Title 5", Description: "A brief description of the project.", Link: "https://github.com/link5", imageSrc: image },
  ];

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="mx-auto pb-20 flex flex-col items-center justify-between px-4 md:px-8 py-10 bg-gray-950 bg-opacity-50 border-l-4 border-purple-600 rounded-md shadow-lg">
      <h1 className="text-shadow text-4xl md:text-5xl lg:text-6xl font-bold text-teal-900 bg-clip-text bg-opacity-90 text-shadow-md mb-8 pb-2">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
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
};

export default Projects;