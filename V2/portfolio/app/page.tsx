'use client'
import { FaDharmachakra, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import Link from "next/link";
import Skills from "@/components/skills";
import Navbar from "@/components/Navbar";
import { SiLeetcode } from "react-icons/si";
import { PiLinktreeLogo } from "react-icons/pi";
import Card from "@/components/Card";
import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Project from "@/components/project";
import { FcDocument } from "react-icons/fc";
import { RxResume } from "react-icons/rx";
import { GrDocumentDownload, GrDocumentPdf, GrDocumentTxt, GrDocumentUser, GrResume } from "react-icons/gr";
export default function Home() {
  const[Back,setBack]=useState('pf1.jpeg')
  const changeBack = () => {
    if (Back === 'pf1.jpeg') {
      setBack('pf.jpeg');
    } else {
      setBack('pf1.jpeg');
    }
  };
  return (
    <div className="relative min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('/Picture/${Back}')` }} >

    <Navbar color="orange"></Navbar>
      <h1 className="custom-font text-[10rem] mt-32 text-white text-center hover:text-slate-200 transition duration-300 ">
        Vinod Akshat
      </h1>
      {/* light and Dark Mode */}
      <button
          className="fixed md:top-6 right-6 z-50 text-3xl text-green-500 hover:text-green-600 sm:text-2xl sm:top-4 sm:right-4 sm:z-50"
          onClick={changeBack}
        > 
          <MdDarkMode /> 
        </button>

      <div className="mt-20">  
        <h2 className="custom-font text-4xl text-green-600 mt-2 text-center ">
         | Full Stack Developer | Writer | 
        </h2>
        <p className=" text-xl sigmar-regular text-white mt-20 text-center ">Currently pursuing B.TECH in Computer Science and Engineering from NIT Srinagar</p>
        <p className="text-lg  mt-3 text-center sigmar-regular text-white text-wrap w-1/2 mx-auto">
          I love turning fresh ideas into functional, visually striking projects.
          Exploring the intersections of technology and creativity through software development and storytelling.
        </p>
      </div>
    
      {/* <Skills /> */}
      <div className="mt-52">
          <h2 className="custom-font text-6xl text-slate-500 mt-2 text-center border-red-400">Latest Projects</h2>
          
          {/* Cards Container */}
          <div className="flex flex-wrap justify-center gap-4 ">
            
            {/* Card 1 */}
            <div className="w-full sm:w-80 pl-7 my-4 ">
              {/* <Card title={"Anonymous Messaging website "} description={"AnonyMessages is a platform that enables users to send and receive anonymous messages. It features AI-powered message suggestions based on usernames and employs OTP-based email verification for enhanced security"} link={"https://anony-messages-seven.vercel.app"} /> */}
              <Project title={"Anonymous Messaging website "} description={"AnonyMessages is a platform that enables users to send and receive anonymous messages. It features AI-powered message suggestions based on usernames and employs OTP-based email verification for enhanced security"} GithubLink={"https://github.com/akshayrivers/AnonyMessages"} LiveLink={"https://anony-messages-seven.vercel.app"}  ></Project>
            </div>
            
            {/* Card 2 */}
            <div className="w-full sm:w-80 pl-7 my-20 ">
              <Card title={"AI Agents "} description={"Developed AI agents using JavaScript and Gemini models. Built a Weather AI Agent leveraging a chain-of-thought approach with Tomorrow.io API. Built an AI Agent that can search on Web using Tavily and custom search engines and can read Pdf using the AI model on my local machine."} link={"https://github.com/akshayrivers/AI-Agents"} />
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-80 pl-7 hidden  md:block ">
              {/* <Card title={"Custom Memory Allocator"} description={"A custom thread-safe memory allocator implemented in C, using the slab allocation technique. This allocator efficiently manages memory blocks of fixed sizes, reducing fragmentation and improving allocation speed. It uses a free list to manage memory inside slabs and supports multithreading with mutex locks."} link={"https://github.com/akshayrivers/Memory-Allocator"} /> */}
              <Project title={"Custom Memory Allocator"} description={"A custom thread-safe memory allocator implemented in C, using the slab allocation technique. This allocator efficiently manages memory blocks of fixed sizes, reducing fragmentation and improving allocation speed. It uses a free list to manage memory inside slabs and supports multithreading with mutex locks."} GithubLink={"https://github.com/akshayrivers/Memory-Allocator"} LiveLink={""}></Project>
            </div>
          </div>
        </div>

        <div >
          <h2 className="custom-font text-6xl text-slate-500 mt-2 text-center">Featured Stories and Blogs</h2>
          
          {/* Cards Container */}
          <div className="flex flex-wrap justify-center gap-4 mt-7 ">
            
            {/* Card 1 */}
            <div className="w-full sm:w-80 pl-7 my-4 ">
              <Card title={"A Feast on Life"} description={"A Feast on Life interweaves dark, lyrical tales exploring wishes with dire consequences, familial tragedy, and societal honor. Through magical realism and existential musings, it questions reality, memory, and sanity, anchored by the enigmatic Arish, whose gifts unravel lives in haunting, poetic cycles."} link={"https://docs.google.com/document/d/1v64LXfd4UjCis7unArQ0b-s5oezpRxsxC6nvY3ay_yU/edit?usp=sharing"} />
            </div>
            
            {/* Card 2 */}
            <div className="w-full sm:w-80 pl-7 my-20 ">
            <Card  title={"Children Of God"} description={"Children of God is a poignant tale intertwining themes of fate, loss, and redemption. Set during a vibrant festival, it follows Megha and Aaradhya as they confront buried secrets and tragic pasts. Through haunting memories and divine rituals, the story explores the fragility of hope, the weight of guilt, and the enduring power of love amidst despair."} link={"https://docs.google.com/document/d/1zTfDgiUot0uGpImmWTYF4eQV_6NlrS_E0vuyVK-87no/edit?usp=sharing"} color={"orange"}/>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-80 pl-7 hidden  md:block ">
            <Card title={"Short Stories Collection"} description={"Short Stories by Vinod Akshat explores existential themes through the lens of mental health, hope, and friendship. Stories like 'Rain' and 'Drowning' use vivid imagery to delve into characters' inner struggles and their search for meaning in a challenging world."} link={"https://docs.google.com/document/d/1_PB7qot00JLigRuocgWVvw55tPinwOreP4m4BhKyH0Y/edit?usp=sharing" }  />
            </div>
          </div>
        </div>


        <div className="fixed bottom-8 left-6 sm: left-1 z-50">
  <a
    href="/RESUME_VINOD_AKSHAT.pdf"
    download
    className="flex items-center gap-2 text-white  px-4 py-2 rounded-lg font-bold shadow-md md:px-5 md:py-3"
  >
    <GrDocumentPdf className="w-8 h-8" />
    <span className="hidden sm:block">Resume</span>
  </a>
</div>

      
        


      
      <div className="flex gap-4 mt-6 p-4 text-4xl justify-center">
        <a href="https://github.com/akshayrivers" target="_blank" className="text-gray-400 hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/vinod-akshat/" target="_blank" className="text-blue-400 hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://x.com/Vinodakshat1" target="_blank" className="text-blue-300 hover:text-white">
          <FaTwitter />
        </a>
        <a href="https://linktr.ee/vinodakshat" target="_blank" className="text-blue-300 hover:text-white">
          <PiLinktreeLogo />
        </a>
      </div>
    </div>
  );
}

