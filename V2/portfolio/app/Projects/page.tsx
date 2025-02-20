"use client";
import Navbar from "@/components/Navbar";
import Project from "@/components/project";
import { Key } from "react";

const projects: any = [
  {
    title: "Anonymous Messaging Website",
    description:
      "AnonyMessages is a platform that enables users to send and receive anonymous messages. It features AI-powered message suggestions based on usernames and employs OTP-based email verification for enhanced security.",
    GithubLink: "https://github.com/akshayrivers/AnonyMessages",
    LiveLink: "https://anony-messages-seven.vercel.app",
  },
  {
    title: "AI Agents",
    description:
      "Developed AI agents using JavaScript and Gemini models. Built a Weather AI Agent leveraging a chain-of-thought approach with Tomorrow.io API. Built an AI Agent that can search on Web using Tavily and custom search engines and can read PDFs using an AI model on my local machine.",
    GithubLink: "https://github.com/akshayrivers/AI-Agents",
    LiveLink: "",
  },
  {
    title: "Custom Memory Allocator",
    description:
      "A custom thread-safe memory allocator implemented in C, using the slab allocation technique. This allocator efficiently manages memory blocks of fixed sizes, reducing fragmentation and improving allocation speed. It uses a free list to manage memory inside slabs and supports multithreading with mutex locks.",
    GithubLink: "https://github.com/akshayrivers/Memory-Allocator",
    LiveLink: "",
  },
  {
    title: "Smart Route Optimizer",
    description:
      " Developed during the Mined Hackathon (my first hackathon) - a valuable learning experience, despite not winningAI/ML solution to optimize delivery routes for grocery/essential deliveries.Automates grouping shipments into trips considering time slots, vehicle capacity, and locations.Employs K-Means clustering and interactive map visualization using the folium library.Provides a Flask API with endpoints for vehicle allocation prediction and route optimization.",
    GithubLink: "https://github.com/akshayrivers/smart_route_optimiser",
    LiveLink: "",
  },
  {
    title: "CF VS Code Extension",
    description:
      "Developing a VS Code extension that parses Codeforces problems and test cases, streamlining the competitive programming workflow. Integrated with the Competitive Companion browser extension for automated problem extraction. Built with TypeScript and JavaScript, with planned enhancements for better functionality.",
    GithubLink: "https://github.com/akshayrivers/cf-vscode-extension",
    LiveLink: "",
  },
  {
    title: "Spotify to YouTube Playlist Migration Tool",
    description:
      "Automated playlist migration between Spotify and YouTube using OAuth 2.0 for secure authentication. Utilized Spotify and YouTube APIs to synchronize playlist data for up to 1000 tracks. Encountered deployment challenges due to OAuth 2.0 requiring a verified (paid) domain; exploring alternative solutions.",
    GithubLink: "https://github.com/akshayrivers/Playlist-Migration",
    LiveLink: "",
  },
  {
    title: "Custom Shell",
    description:
      "Built a custom shell in Rust supporting built-in commands (cd, pwd, echo, exit) and execution of external commands. Developed a 'type' command to differentiate between built-in and external commands. Incorporated robust error handling and streamlined input parsing.",
    GithubLink: "https://github.com/akshayrivers/Shell",
    LiveLink: "",
  },
  {
    title: "Custom HTTP Server",
    description:
      "Developed an HTTP 1.1 server in Java to handle client requests, including GET, POST, PUT, and DELETE methods. Implemented route-based handling for dynamic functionality. Included detailed error responses (e.g., 404, 405) to enhance client feedback.",
    GithubLink: "https://github.com/akshayrivers/http-server",
    LiveLink: "",
  },
  {
    title: "Next.js Boilerplate",
    description:
      "Designed a Next.js boilerplate with next-auth, AI integration, and OTP verification. Included Dashboard, SignIn, and SignUp pages, with a backend utilizing MongoDB aggregation pipelines.",
    GithubLink: "https://github.com/akshayrivers/BoilerPlateNextjs",
    LiveLink: "",
  },
  {
    title: "QR Code Scanner",
    description:
      "Deployed a web app to verify event registrations using real-time QR code scanning. Integrated QuaggaJS and jsQR libraries for high-accuracy QR code decoding. Designed a secure backend using Node.js and MySQL for event data storage and management.",
    GithubLink: "https://github.com/akshayrivers/BoilerPlateNextjs",
    LiveLink: "https://qr-code-scanner-sand.vercel.app",
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar color="violet" />
      <div className="mt-11">
        <h1 className="custom-font text-9xl text-violet-600 text-center mt-10">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-10">
        {projects.map((project: { title: string; description: string; GithubLink: string; LiveLink: string; }, index: Key) => (
          <Project
            key={index as Key}
            title={project.title}
            description={project.description}
            GithubLink={project.GithubLink}
            LiveLink={project.LiveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
