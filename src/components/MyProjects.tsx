import React from "react";
import ProjectCarousel from "./ProjectCarousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string; // Optional link for the project
}

const projects: Project[] = [
  {
    id: 1,
    title: "Inventory Management System",
    description:
      "A full-stack inventory management solution with payment integration",
    image: "projects/inventory.png",
    technologies: ["React", "Node.js", "NestJs", "Postgres"],
    link: "https://bell-bit.com/", // Add link here
  },
  {
    id: 2,
    title: "A Set of Graphics Works",
    description: "My behance account for creating graphics designs",
    image: "projects/canada.png",
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
    link: "https://www.behance.net/gallery/203917495/My-best-flyers", // Add link here
  },
  {
    id: 3,
    title: "My Music Media",
    description: "A marketing platform for music-oriented peoples",
    image: "projects/mmm.png",
    technologies: ["HTML", "CSS", "Javascript", "PHP"],
    link: "https://mymusicmedia.vip/", // Add link here
  },
];

const MyProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Some of My Projects
        </h2>
        <ProjectCarousel projects={projects} />
      </div>
    </section>
  );
};

export default MyProjects;
