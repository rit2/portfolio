export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">Rithvicca</h1>
      <p className="hero-role">Frontend Developer</p>
      <p className="hero-bio">
        I create responsive, accessible, and modern web applications using HTML, CSS, JavaScript, and React. Currently expanding my backend skills with Node.js, Express, and MongoDB.
      </p>
      <div className="hero-links">
        <a href="#projects" className="btn">Portfolio</a>
        <a href="https://github.com/rit2" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        <a href="https://linkedin.com/in/rithvicca" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
      </div>
    </section>
  );
}
