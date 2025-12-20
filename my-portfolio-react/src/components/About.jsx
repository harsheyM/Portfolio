import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <h2>About Me</h2>
      <p>
        Hello! My name is Harshitha Mahesh and I am a developer integrating AI,
        web development, and design to create solutions that enhance user experiences.
        <br />
        I am passionate about technology and am eager to contribute to innovative projects.
      </p>
    </section>
  );
});

export default About;
