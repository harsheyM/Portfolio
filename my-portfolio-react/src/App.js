import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sparkles from "./components/Sparkles";
import About from "./components/About";
import "./index.css";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Handle Explore button click
  const handleExploreClick = () => {
    setNavbarVisible(true);

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Sparkles />

      <Hero onExplore={handleExploreClick} />

      <Navbar
        visible={navbarVisible}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />

      <About />

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
