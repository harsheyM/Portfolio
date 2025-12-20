import React from "react";
import "../index.css";

function Navbar({ visible, darkMode, toggleDarkMode, scrollToSection }) {
  return (
    <nav id="navbar" className={visible ? "visible" : ""}>
      <ul>
        <li>
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
      <button id="darkModeBtn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
