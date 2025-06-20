import React, { useEffect, useRef, useState } from "react";
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaDocker,
  FaPython,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";
import {
  SiCanva,
  SiExpress,
  SiNestjs,
  SiAdobe,
  SiAdobephotoshop,
} from "react-icons/si";

const skills = [
  {
    name: "NestJS",
    icon: <SiNestjs className="w-4 h-4 mr-1 text-red-500" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="w-4 h-4 mr-1 text-blue-400" />,
  },
  // {
  //   name: "Photoshop",
  //   icon: <SiAdobephotoshop className="w-4 h-4 mr-1 text-blue-600" />,
  // },
  // {
  //   name: "Canva",
  //   icon: <SiCanva className="w-4 h-4 mr-1 text-blue-500" />,
  // },
  {
    name: "Express.js",
    icon: <SiExpress className="w-4 h-4 mr-1 text-gray-400" />,
  },
  // {
  //   name: "Laravel",
  //   icon: <FaLaravel className="w-4 h-4 mr-1 text-red-500" />,
  // },
  {
    name: "Docker",
    icon: <FaDocker className="w-4 h-4 mr-1 text-blue-400" />,
  },
  {
    name: "Python",
    icon: <FaPython className="w-4 h-4 mr-1 text-yellow-500" />,
  },
  {
    name: "Mongoose",
    icon: <FaDatabase className="w-4 h-4 mr-1 text-green-600" />,
  },
  {
    name: "PostgreSQL",
    icon: <FaDatabase className="w-4 h-4 mr-1 text-blue-600" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="w-4 h-4 mr-1 text-yellow-400" />,
  },
];

const SkillsOrbit = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(160);

  // Update radius based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(130);
      } else if (window.innerWidth < 768) {
        setRadius(120);
      } else if (window.innerWidth < 1024) {
        setRadius(140);
      } else {
        setRadius(160);
      }
    };

    // Initial call
    updateRadius();

    // Add event listener for resize
    window.addEventListener("resize", updateRadius);

    // Cleanup
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const skillElements = orbit.querySelectorAll(".skill-item");
    const totalSkills = skillElements.length;

    // Initialize angle first
    let angle = 0;
    const rotationSpeed = 0.0005;

    // Position skills function
    function positionSkills() {
      skillElements.forEach((skill, index) => {
        const skillAngle = angle + index * ((2 * Math.PI) / totalSkills);
        const x = radius * Math.cos(skillAngle);
        const y = radius * Math.sin(skillAngle);

        const skillElement = skill as HTMLElement;
        skillElement.style.transform = `translate(${x}px, ${y}px)`;

        // Adjust z-index based on y position to create depth effect
        const zIndex = Math.round(y + radius);
        skillElement.style.zIndex = zIndex.toString();

        // Adjust opacity based on y position
        const opacity = 0.5 + (y + radius) / (2 * radius);
        skillElement.style.opacity = opacity.toString();

        // Adjust scale based on y position
        const scale = 0.8 + (y + radius) / (4 * radius);
        skillElement.style.scale = scale.toString();
      });
    }

    // Initial positioning
    positionSkills();

    // Rotation animation
    function animate() {
      angle += rotationSpeed;
      positionSkills();
      requestAnimationFrame(animate);
    }

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [radius]);

  return (
    <div className="absolute inset-0 pointer-events-none" ref={orbitRef}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-item absolute top-20 left-20 -translate-x-1/2 -translate-y-1/2 bg-blue-800 text-white px-3 py-1 rounded-full text-sm shadow-lg transition-transform duration-300 flex items-center z-20"
        >
          {skill.icon}
          {skill.name}
        </div>
      ))}
    </div>
  );
};

export default SkillsOrbit;
