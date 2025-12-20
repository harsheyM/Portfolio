import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref}>
      <h2>Contact Me</h2>
      <p><em>Email:</em> harshithamahesh421@gmail.com</p>
      <p><em>LinkedIn:</em> linkedin.com/in/harshitha-mahesh</p>
      <p><em>GitHub:</em> github.com/harsheyM</p>
      <p><em>Phone Number:</em> (469) 894-1294</p>
    </section>
  );
});

export default Contact;
