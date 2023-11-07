"use client";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "SimplyAI",
    description: "Description of Project 1",
    githubLink: "https://github.com/project1",
    liveSiteLink: "https://project1.com",
    imageSrc: "/NextWebsite.png",
    technologiesUsed: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Quantum Robotics",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    liveSiteLink: "https://project2.com",
    imageSrc: "/images/project2.jpg",
    technologiesUsed: ["Angular", "Express.js", "MySQL"],
  },
  {
    title: "Sumorize",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    liveSiteLink: "https://project2.com",
    imageSrc: "/images/project2.jpg",
    technologiesUsed: ["Angular", "Express.js", "MySQL"],
  },
  {
    title: "Empower Advocacy LLC",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    liveSiteLink: "https://project2.com",
    imageSrc: "/images/project2.jpg",
    technologiesUsed: ["Angular", "Express.js", "MySQL"],
  },
  {
    title: "Precision Stoneworks",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    liveSiteLink: "https://project2.com",
    imageSrc: "/images/project2.jpg",
    technologiesUsed: ["Angular", "Express.js", "MySQL"],
  },
  {
    title: "JamSesh",
    description: "Description of Project 2",
    githubLink: "https://github.com/project2",
    liveSiteLink: "https://project2.com",
    imageSrc: "/images/project2.jpg",
    technologiesUsed: ["Angular", "Express.js", "MySQL"],
  },

  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-cover bg-center p-4 rounded-md hover:scale-105 hover:shadow-lg transition-transform cursor-pointer w-full h-full"
            style={{ backgroundImage: `url(${project.imageSrc})` }}
          >
            <h2 className="text-white text-xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-white">{project.description}</p>
            <div className="mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mr-2"
              >
                GitHub
              </a>
              <a
                href={project.liveSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
