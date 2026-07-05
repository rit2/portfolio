const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p>
      I'm a full-stack developer with a professional certificate from UT Austin. I build responsive web apps with React, Node.js, and MongoDB, and I'm passionate about creating useful products.
      </p>
      <div className="skills">
        {skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </section>
  );
}
