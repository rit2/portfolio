// Projects.jsx
import "./Projects.css";

const projects = [
  {
    title: "Solar System",
    description:
      "An animated solar system built with pure HTML and CSS. All 8 planets orbit the Sun with accurate relative speeds, Saturn's rings, a Moon orbiting Earth, and a responsive design that scales to any screen size.",
    tech: ["HTML", "CSS"],
    thumbnail: "/thumbnails/solar-system.jpg",
    github: "#",
    live: "http://127.0.0.1:5500/solar/index.html", // update with hosted URL when deployed
  },
  {
    title: "To-Do App",
    description:
      "Feature-rich task manager with a dashboard, task lists, projects view, calendar, and settings. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/thumbnails/todo-app.jpg",
    github: "https://github.com/rit2/to-do",
    live: "#",
  },
  {
    title: "Netflix Login Clone",
    description:
      "A pixel-perfect Netflix login page clone built with HTML and CSS. Features a two-panel split layout — sign-in form on the left with dark inputs and a red focus ring, and a signup prompt panel on the right with a red gradient. Fully responsive with a CSS Grid layout that stacks to a single column on mobile.",
    tech: ["HTML", "CSS"],
    thumbnail: "/thumbnails/netflix-login.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Math Tug!",
    description:
      "A two-player math game where kids race to answer addition and subtraction questions. Each correct answer pulls the tug-of-war rope toward your side — first to 5 wins. Features animated rope pulls, vintage pastel keypads, and a responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/thumbnails/tug-of-war-math.jpg",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">

            {/* Thumbnail */}
            {p.thumbnail && (
              <div className="project-thumbnail">
                <img src={p.thumbnail} alt={`${p.title} screenshot`} loading="lazy" />
                {p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="thumbnail-overlay"
                    aria-label={`Open ${p.title} live demo`}
                  >
                    <span className="overlay-icon">↗</span>
                    <span className="overlay-label">View Live</span>
                  </a>
                )}
              </div>
            )}

            {/* Card body */}
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                {p.github !== "#" && (
                  <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
