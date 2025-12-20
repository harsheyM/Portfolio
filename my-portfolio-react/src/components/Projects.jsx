import React from 'react';
import './Projects.css'; // Separate CSS for projects

function Projects() {
  const projectData = [
    {
      title: 'Copper One',
      summary: 'Fun, kid-friendly financial literacy app.',
      skills: 'React, Tailwind CSS, Firebase, API, HTML',
      details: 'Created a user-friendly and entertaining UI with JavaScript which included parent controls based on pins, an interesting dashboard, learning modules/quizzes, rewards and goals system, and an AI chatbot. Built with React and Tailwind CSS for the frontend, and Firebase for the backend. AI Assistant was a local Ollama instance running Llama 3.2 3B and Phi-3 Mini. The learning modules integrated a Khan Academy API and embedded a HTML5/Canvas-based financial learning mini-game.',
    },

    {
      title: 'Army of Ants',
      summary: 'Grid-based AI simulation in C++.',
      skills: 'C++, Algorithms, Object-Oriented Programming',
      details: 'Designed and implemented a grid-based AI simulation in C++, modeling predator-prey dynamics between ants and beetles. Engineered an autonomous decision-making algorithm that determines ants and beetles behaviors using object-oriented programming. Built a turn-based simulation engine with a 5-phase logic that is compatible for multiple rounds. Ensured a modular, spec-compliant design with strict separation of decision logic and grid mutation for memory-safe design.'
    },

    {
      title: 'Finger Spelling Recognition',
      summary: 'Improved dataset and neural network accuracy.',
      skills: 'Python, Neural Networks, Data Analysis',
      details: 'Worked on improving a dataset of 200+ images to increase its accuracy during performance. Utilized skills in Python coding and understanding of neural networks to increase accuracy to 97% on the validation dataset. Learned to split both testing and training, defined and filtered the data used for testing and training the AI model. Applied skills in data analysis to make conclusions about the information provided and returned.'
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p><br />Skills: {project.skills}</p>
              </div>
              <div className="card-back">
                <p>{project.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


