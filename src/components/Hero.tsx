import React from "react";
import SkillsOrbit from "./SkillsOrbit";

const Hero: React.FC = () => {
  return (
    <section id="about" className=" flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-400">Dawit Girma</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
          <p className="text-gray-400 mb-8 max-w-lg">
            I specialize in building exceptional digital experiences. With a
            focus on both frontend and backend technologies, I create responsive
            and scalable applications that solve real-world problems.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-400 hover:bg-blue-600/20 px-6 py-3 rounded-md transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <img
                src="profile/dawit.jpg"
                alt="Dawit Girma Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <SkillsOrbit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
