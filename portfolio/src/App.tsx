import "./App.css";

function App() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const techStack = [
    "Python",
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind",
    "TensorFlow",
    "PostgreSQL",
    "AWS",
  ];

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">Portfolio</div>
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="cta" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Hello, it&apos;s me</p>
            <h1>Julian Silva</h1>
            <h2>
              Machine Learning Engineer
              <span className="accent"> &amp; Full Stack Builder</span>
            </h2>
            <p className="summary">
              I craft AI-powered products and reliable web platforms, blending
              applied research with clean, scalable engineering. Currently
              focused on ML systems, data storytelling, and delightful user
              experiences.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#projects">
                View Projects
              </a>
              <a className="ghost" href="#">
                Download CV
              </a>
            </div>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="GitHub">
                gh
              </a>
              <a href="mailto:hello@example.com" aria-label="Email">
                mail
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="portrait">
              <span>DM</span>
            </div>
            <div className="hero-badge">Open to ML + full stack roles</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h3>About</h3>
            <p>
              I enjoy translating complex problems into products people love to
              use. My work blends model experimentation, API engineering, and
              sleek front-end design.
            </p>
          </div>
          <div className="about-grid">
            <div className="info-card">
              <h4>Focus Areas</h4>
              <ul>
                <li>End-to-end ML pipelines and deployment</li>
                <li>Cloud-native web apps and dashboards</li>
                <li>UX-driven engineering for product teams</li>
              </ul>
            </div>
            <div className="info-card">
              <h4>Recent Highlights</h4>
              <ul>
                <li>Reduced model inference latency by 35%</li>
                <li>Designed a zero-downtime data migration</li>
                <li>Mentored 6 junior developers</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <h3>Experience</h3>
            <p>Hands-on experience delivering production-grade systems.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div>
                <h4>Machine Learning Engineer</h4>
                <p className="muted">Nova Labs · 2023 — Present</p>
              </div>
              <p>
                Built forecasting services, automated feature pipelines, and
                deployed real-time monitoring across ML workflows.
              </p>
            </div>
            <div className="timeline-item">
              <div>
                <h4>Full Stack Developer</h4>
                <p className="muted">Pulse Systems · 2021 — 2023</p>
              </div>
              <p>
                Delivered customer portals, internal dashboards, and API
                services used by 30k+ monthly users.
              </p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-header">
            <h3>Education</h3>
            <p>Foundation in electronics, telecom, and data science.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div>
                <h4>BSc in Electronics &amp; Telecommunications</h4>
                <p className="muted">University of Example · 2017 — 2021</p>
              </div>
              <p>
                Final-year research on intelligent network optimization and
                real-time analytics.
              </p>
            </div>
          </div>
        </section>

        <section id="tech" className="section">
          <div className="section-header">
            <h3>Tech Stack</h3>
            <p>Tooling I rely on to build, ship, and scale.</p>
          </div>
          <div className="chip-grid">
            {techStack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <h3>Projects</h3>
            <p>Recent builds with measurable impact.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <h4>InsightFlow</h4>
              <p>
                Streaming analytics platform with anomaly detection and
                explainable dashboards for ops teams.
              </p>
              <span className="tag">ML Ops</span>
            </article>
            <article className="project-card">
              <h4>SignalScope</h4>
              <p>
                Signal classification toolkit using CNNs and on-device inference
                optimizations.
              </p>
              <span className="tag">Computer Vision</span>
            </article>
            <article className="project-card">
              <h4>Atlas Studio</h4>
              <p>
                Collaboration suite for product teams with real-time updates,
                role-based access, and analytics.
              </p>
              <span className="tag">Full Stack</span>
            </article>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-header">
            <h3>Achievements</h3>
            <p>Milestones I&apos;m proud of.</p>
          </div>
          <div className="list-grid">
            <div className="list-item">
              <h4>Best Innovation Award</h4>
              <p>Recognized for a predictive maintenance solution.</p>
            </div>
            <div className="list-item">
              <h4>Top 1% Kaggle Ranking</h4>
              <p>Active competitor in tabular and vision challenges.</p>
            </div>
            <div className="list-item">
              <h4>Speaker</h4>
              <p>Presented on ML deployment at regional tech meets.</p>
            </div>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="section-header">
            <h3>Certifications</h3>
            <p>Credentials that keep my skills current.</p>
          </div>
          <div className="list-grid">
            <div className="list-item">
              <h4>AWS Machine Learning Specialty</h4>
              <p>Amazon Web Services · 2024</p>
            </div>
            <div className="list-item">
              <h4>Google Data Analytics</h4>
              <p>Coursera · 2023</p>
            </div>
            <div className="list-item">
              <h4>DeepLearning.AI TensorFlow</h4>
              <p>DeepLearning.AI · 2022</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-header">
            <h3>Contact</h3>
            <p>Let&apos;s build something bold together.</p>
          </div>
          <div className="contact-card">
            <div>
              <h4>Let&apos;s connect</h4>
              <p className="muted">
                Reach out for collaborations, contract work, or full-time
                opportunities.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary" href="mailto:hello@example.com">
                Email me
              </a>
              <a className="ghost" href="#">
                Schedule a call
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
