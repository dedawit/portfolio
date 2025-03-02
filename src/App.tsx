import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Skills />
      <MyProjects />
      <Contact />
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dawit Girma. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
