export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p>Open to opportunities and collaboration. Reach out anytime.</p>
      <div className="contact-links">
        <a href="mailto:you@email.com">you@email.com</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <p className="footer-note">Built with React · {new Date().getFullYear()}</p>
    </footer>
  );
}
