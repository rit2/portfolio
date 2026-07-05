const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p>
        I'm a self-taught developer working through The Odin Project curriculum.
        I enjoy building clean, functional web apps and learning by doing.
      </p>
      <div className="skills">
        {skills.map((s) => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </section>
  );
}
