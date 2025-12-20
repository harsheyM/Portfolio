import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "C++",
    "AI & Machine Learning",
    "Data Structures & Algorithms",
    "Swift UI/UX",
    "Mobile App Development",
    "Java",
  ];

  return (
    <section id="skills" ref={ref}>
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
