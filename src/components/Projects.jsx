import { useState, useEffect, useCallback } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Solar System",
    description:
      "An animated solar system built with pure HTML and CSS. All 8 planets orbit the Sun with accurate relative speeds, Saturn's rings, a Moon orbiting Earth, and a responsive design that scales to any screen size.",
    tech: ["HTML", "CSS"],
    thumbnail: "/thumbnails/solar-system.jpg",
    github: "https://github.com/rit2/solar-system",
    live: "https://rit2.github.io/solar-system/",
  },
  {
    title: "To-Do App",
    description:
      "Feature-rich task manager with a dashboard, task lists, projects view, calendar, and settings. Built with vanilla HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/thumbnails/todo-app.jpg",
    github: "https://github.com/rit2/to-do",
    live: "https://rit2.github.io/to-do/",
  },
  {
    title: "Netflix Login Clone",
    description:
      "A pixel-perfect Netflix login page clone built with HTML and CSS. Features a two-panel split layout — sign-in form on the left with dark inputs and a red focus ring, and a signup prompt panel on the right with a red gradient. Fully responsive with a CSS Grid layout that stacks to a single column on mobile.",
    tech: ["HTML", "CSS"],
    thumbnail: "/thumbnails/netflix-login.jpg",
    github: "https://github.com/rit2/netflix-login",
    live: "https://rit2.github.io/netflix-login/",
  },
  {
    title: "Math Tug!",
    description:
      "A two-player math game where kids race to answer addition and subtraction questions. Each correct answer pulls the tug-of-war rope toward your side — first to 5 wins. Features animated rope pulls, vintage pastel keypads, and a responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    thumbnail: "/thumbnails/tug-of-war-math.jpg",
    github: "https://github.com/rit2/math-tug",
    live: "https://rit2.github.io/math-tug/",
  },
  {
    title: "Menu",
    description:
      "A restaurant menu page with a clean layout and styling.",
    tech: ["HTML", "CSS"],
    thumbnail: "/thumbnails/menu.jpg",
    github: "https://github.com/rit2/menu",
    live: "https://rit2.github.io/menu/",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % projects.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKey(e) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, goNext, goPrev]);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={p.title} className="project-card">
            {/* Thumbnail */}
            {p.thumbnail && (
              <div
                className="project-thumbnail"
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.title} fullscreen`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
              >
                <img src={p.thumbnail} alt={`${p.title} screenshot`} loading="lazy" />
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
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {activeProject && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={`${activeProject.title} fullscreen view`}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeProject.thumbnail}
              alt={`${activeProject.title} screenshot`}
              className="lightbox-img"
            />

            {/* Info bar */}
            <div className="lightbox-info">
              <h3>{activeProject.title}</h3>
              <div className="lightbox-links">
                {activeProject.live !== "#" && (
                  <a href={activeProject.live} target="_blank" rel="noreferrer">Live ↗</a>
                )}
              </div>
            </div>

            {/* Navigation */}
            <button className="lightbox-nav lightbox-prev" onClick={goPrev} aria-label="Previous project">‹</button>
            <button className="lightbox-nav lightbox-next" onClick={goNext} aria-label="Next project">›</button>
          </div>

          {/* Close button */}
          <button className="lightbox-close" onClick={close} aria-label="Close fullscreen view">✕</button>
        </div>
      )}
    </section>
  );
}
