import React from "react";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaJava,
  FaPython,
  FaLaravel,
} from "react-icons/fa";
import {
  SiNestjs,
  SiExpress,
  SiSharp,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skillsWithIcons: Skill[] = [
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-5 h-5 mr-2 text-green-400" />,
  },
  { name: "Nest.js", icon: <SiNestjs className="w-5 h-5 mr-2 text-red-400" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="w-5 h-5 mr-2 text-gray-300" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="w-5 h-5 mr-2 text-blue-400" />,
  },
  { name: "HTML", icon: <FaHtml5 className="w-5 h-5 mr-2 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-5 h-5 mr-2 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="w-5 h-5 mr-2 text-yellow-400" />,
  },
  { name: "PHP", icon: <FaPhp className="w-5 h-5 mr-2 text-purple-400" /> },
  {
    name: "Laravel",
    icon: <FaLaravel className="w-5 h-5 mr-2 text-red-500" />,
  },
  { name: "Docker", icon: <FaDocker className="w-5 h-5 mr-2 text-blue-400" /> },
  { name: "Java", icon: <FaJava className="w-5 h-5 mr-2 text-red-500" /> },
  { name: "C#", icon: <SiSharp className="w-5 h-5 mr-2 text-purple-500" /> },
  {
    name: "Python",
    icon: <FaPython className="w-5 h-5 mr-2 text-yellow-500" />,
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="w-5 h-5 mr-2 text-blue-600" />,
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator className="w-5 h-5 mr-2 text-orange-600" />,
  },
  { name: "Canva", icon: <SiCanva className="w-5 h-5 mr-2 text-blue-500" /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-blue-950/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Competencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsWithIcons.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-900/40 p-4 rounded-lg shadow-md hover:shadow-blue-500/20 hover:bg-blue-800/40 transition-all flex items-center"
            >
              {skill.icon}
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
