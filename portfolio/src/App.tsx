import { useEffect, useState } from "react";
import "./App.css";
import profileImg from "./assets/Julian Silva.png";

function App() {
  const routes = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Academics", path: "/academics" },
    { label: "Achievements", path: "/achievements" },
    { label: "Experiences", path: "/experiences" },
    { label: "News", path: "/news" },
  ];

  const getRouteFromHash = () => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) {
      return "/";
    }
    return routes.some((route) => route.path === hash) ? hash : "/";
  };

  const [route, setRoute] = useState(() => getRouteFromHash());
  const [projectFilter, setProjectFilter] = useState("All");

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">Julian Silva</div>
          <nav className="nav">
            {routes.map((navRoute) => (
              <a
                key={navRoute.path}
                href={`#${navRoute.path}`}
                className={route === navRoute.path ? "active" : undefined}
              >
                {navRoute.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {route === "/" && (
          <section className="home">
            <div className="home-grid">
              <article className="profile-card simple-profile">
                <div className="simple-photo">
                  <img src={profileImg} alt="Julian Silva" />
                </div>
                <h1 className="simple-name">Julian Silva</h1>
                <p className="simple-title">Final Year Undergraduate</p>
                <div className="simple-lines">
                  <p>
                    Department of Electronic and Telecommunication Engineering
                  </p>
                  <p>University of Moratuwa</p>
                </div>
                <div className="simple-interests">
                  <span className="simple-interest-chip">Machine Learning</span>
                  <span className="simple-interest-chip">Computer Vision</span>
                  <span className="simple-interest-chip">HCI</span>
                  <span className="simple-interest-chip">Embedded Systems</span>
                  <span className="simple-interest-chip">Robotics</span>
                </div>
                <div className="simple-links">
                  <a href="mailto:silva.ljjp@gmail.com" className="icon-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M3 6.75c0-.97.78-1.75 1.75-1.75h14.5C20.22 5 21 5.78 21 6.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 19 3 18.22 3 17.25V6.75Zm2.1.2 6.9 4.32 6.9-4.32a.25.25 0 0 0-.15-.05H5.25a.25.25 0 0 0-.15.05Zm13.9 2.07-6.62 4.14a1.75 1.75 0 0 1-1.86 0L3.9 9.02v8.23c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V9.02Z"
                        fill="currentColor"
                      />
                    </svg>
                    silva.ljjp@gmail.com
                  </a>
                  <a
                    href="https://github.com/JulianSilva2001"
                    className="icon-link"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.66-.21.66-.47v-1.65c-2.68.6-3.24-1.14-3.24-1.14-.44-1.1-1.07-1.4-1.07-1.4-.88-.6.07-.59.07-.59 1 .07 1.54 1.02 1.54 1.02.88 1.51 2.3 1.07 2.86.82.09-.63.35-1.07.64-1.31-2.14-.24-4.4-1.07-4.4-4.76 0-1.05.38-1.9 1-2.57-.1-.24-.43-1.2.1-2.5 0 0 .82-.26 2.7.98a9.4 9.4 0 0 1 4.9 0c1.88-1.24 2.7-.98 2.7-.98.53 1.3.2 2.26.1 2.5.62.67 1 1.52 1 2.57 0 3.7-2.26 4.51-4.41 4.75.36.31.68.92.68 1.85v2.74c0 .26.18.56.67.47A9.5 9.5 0 0 0 12 2.5Z"
                        fill="currentColor"
                      />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/julian-silva-1abb98263/"
                    className="icon-link"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M4.75 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3.5 9.25h2.5V20.5H3.5V9.25Zm6 0H12v1.6c.35-.62 1.24-1.85 3.1-1.85 2.52 0 3.4 1.66 3.4 3.83v7.67h-2.5v-7.1c0-1.7-.36-2.84-1.98-2.84-1.62 0-2.52 1.23-2.52 2.84v7.1H9.5V9.25Z"
                        fill="currentColor"
                      />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </article>
            </div>

            <div className="home-lower">
              <a className="mini-card mini-link" href="#/academics">
                <div className="mini-card-header">
                  <span className="mini-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 4.25 2.75 9l9.25 4.75L21.25 9 12 4.25Zm-3.5 7.7v3.1c0 .82.46 1.56 1.19 1.93l2.81 1.45c.32.17.69.17 1.01 0l2.81-1.45a2.15 2.15 0 0 0 1.19-1.93v-3.1L12 14.7l-3.5-1.75Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="mini-title">Education &amp; Academics</p>
                </div>
                <h3>University of Moratuwa, Sri Lanka | 2022 - Present</h3>
                <p>
                  B.Sc. Honours in Electronic and Telecommunication Engineering
                  (CGPA: 3.81/4.00)
                </p>
                <span className="mini-meta">
                  Dean&apos;s List appearance in 5 out of 6 semesters
                </span>
                <div className="mini-divider"></div>
                <h3>St. Anthony&apos;s College, Kandy | 2007 - 2020</h3>
                <p>
                  Passed GCE A/L Examination with 3A&apos;s in Physical Stream
                  (University Entrance Examination)
                </p>
                <span className="mini-meta">Z-score: 2.3016</span>
              </a>
              <a className="mini-card mini-link" href="#/experiences">
                <div className="mini-card-header">
                  <span className="mini-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M9 4.5h6a1.5 1.5 0 0 1 1.5 1.5v1.5H19a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2h2.5V6A1.5 1.5 0 0 1 9 4.5Zm0 3h6V6H9v1.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="mini-title">Work Experiences</p>
                </div>
                <h3>Embedded &amp; ML Engineering Intern</h3>
                <p>Paraqum Technologies (Pvt) Ltd, Sri Lanka</p>
                <div className="mini-divider"></div>
                <h3>Robotics Instructor</h3>
                <p>RoboticGen Academy (Pvt) Ltd, Sri Lanka</p>
                <div className="mini-divider"></div>
                <h3>Physics Tutor (Edexcel O/L - IGCSE)</h3>
                <p>Keenbridge English Academy (Pvt) Ltd</p>
              </a>
              <a className="mini-card mini-link" href="#/projects">
                <div className="mini-card-header">
                  <span className="mini-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M6.5 5.5A1.5 1.5 0 0 1 8 4h8a1.5 1.5 0 0 1 1.5 1.5V19a1 1 0 0 1-1.5.86L12 17.5l-4 2.36A1 1 0 0 1 6.5 19V5.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="mini-title">Current Project</p>
                </div>
                <h3>Project Categories &amp; Tools</h3>
                <div className="tools-grid">
                  <div className="tool-block">
                    <h4>AI and Machine Learning</h4>
                    <p>TensorFlow, Mediapipe, OpenCV, YOLO, Scikit-learn</p>
                  </div>
                  <div className="tool-block">
                    <h4>Robotics</h4>
                    <p>ESP32, STM32, Raspberry Pi, Arduino</p>
                  </div>
                  <div className="tool-block">
                    <h4>Embedded Systems</h4>
                    <p>Matlab, Altium, LTspice, Verilog</p>
                  </div>
                  <div className="tool-block">
                    <h4>Software Development</h4>
                    <p>Node.js, React.js, React Native, Spring Boot</p>
                  </div>
                  <div className="tool-block">
                    <h4>Programming Languages</h4>
                    <p>C, C++, Python, Java, Kotlin, JavaScript</p>
                  </div>
                  <div className="tool-block">
                    <h4>Computer-Aided Design</h4>
                    <p>SolidWorks</p>
                  </div>
                </div>
              </a>
              <a className="mini-card mini-link" href="#/achievements">
                <div className="mini-card-header">
                  <span className="mini-icon mini-icon-accent">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M7 4h10a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1v2.5l2.5 1.5a1 1 0 0 1 .5.86V19H8v-2.64a1 1 0 0 1 .5-.86L11 13.5V12H10a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <p className="mini-title">Achievements</p>
                </div>
                <div className="achievement-grid">
                  <div className="achievement-item">
                    <span className="achievement-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M8 4h8a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1Zm2 9.5V15h4v-1.5a6 6 0 0 1-2 0 6 6 0 0 1-2 0ZM6 6H4a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h.5A6 6 0 0 1 6 6Zm12 0a6 6 0 0 1-.5 5H18a3 3 0 0 0 3-3V7a1 1 0 0 0-1-1h-2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h3>8</h3>
                    <p>Total Awards</p>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 3 7 5.5v4.1c0 3.1 2.2 5.8 5 6.6 2.8-.8 5-3.5 5-6.6V5.5L12 3Zm0 4.2 1.1 2.3 2.5.4-1.8 1.7.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.7 2.5-.4L12 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h3>2</h3>
                    <p>Championships</p>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 4.5 14.4 9l4.9.7-3.5 3.4.8 4.8L12 15.6 7.4 17.9l.8-4.8-3.5-3.4 4.9-.7L12 4.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h3>1</h3>
                    <p>1st Runner-Up</p>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M12 5.5 13.8 9l3.8.5-2.8 2.6.7 3.8-3.5-1.9-3.5 1.9.7-3.8-2.8-2.6 3.8-.5L12 5.5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <h3>1</h3>
                    <p>2nd Runner-Up</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        )}

        {route === "/projects" && (
          <section className="section">
            <div className="section-header">
              <h3>Projects</h3>
              <p>Selected work grouped by focus area.</p>
            </div>
            <div className="project-filters">
              {[
                "All",
                "AI & ML",
                "Robotics",
                "Embedded",
                "Software",
              ].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    projectFilter === filter
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  onClick={() => setProjectFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {[
                {
                  title: "Neurosteered Target Speaker Extraction",
                  category: "AI & ML",
                  date: "Ongoing",
                  description:
                    "Combines EEG signals with audio processing to isolate a listener's attended speaker in multi-speaker environments.",
                  tech: "Python, PyTorch, MATLAB, EEGLAB",
                },
                {
                  title: "PCB Defects Detection Device",
                  category: "AI & ML",
                  date: "April 2024",
                  description:
                    "Detects six PCB defect types and component-placement errors, integrated with a web interface.",
                  tech: "Python, YOLOv8, PyTorch, OpenCV, Altium, SolidWorks",
                },
                {
                  title:
                    "Tea Classification and Signature Estimation (Paraqum)",
                  category: "AI & ML",
                  date: "December 2024",
                  description:
                    "Classifies tea grades and estimates visual signatures for automated quality assessment.",
                  tech: "Python, TensorFlow, PyTorch",
                },
                {
                  title:
                    "Panorama Stitching with Feature Matching (GNN)",
                  category: "AI & ML",
                  date: "November 2024",
                  description:
                    "Uses SuperGlue for accurate feature matching and seamless blending across viewpoints.",
                  tech: "SuperGlue, Python, OpenCV, PyTorch, RANSAC",
                },
                {
                  title:
                    "Bidirectional Mapping on Multimodal Neuroimaging Data",
                  category: "AI & ML",
                  date: "Ongoing",
                  description:
                    "Contrastive model linking brain structure and function using HCP/OASIS datasets.",
                  tech: "Python, PyTorch",
                },
                {
                  title: "OboMouse - Micromouse Robot",
                  category: "Robotics",
                  date: "Champions (MicroMaze 2024)",
                  description:
                    "Autonomous maze-solving robot using high-speed sensors and optimization algorithms.",
                  tech: "STM32, C, Altium, SolidWorks",
                },
                {
                  title: "Robot Nanonaut",
                  category: "Robotics",
                  date: "—",
                  description:
                    "Multifunction robot capable of line-following, obstacle avoidance, gripping, and sound recognition.",
                  tech: "Arduino, SolidWorks, Altium",
                },
                {
                  title: "SpeedObo - High-Precision Line Follower",
                  category: "Robotics",
                  date: "—",
                  description:
                    "High-speed, high-accuracy line follower robot for competitive robotics.",
                  tech: "STM32, C++, Altium, SolidWorks",
                },
                {
                  title: "MetroniX Battlebot",
                  category: "Robotics",
                  date: "UWV Robot Battle 2024",
                  description:
                    "Combat robot featuring a dynamic lifting mechanism and RF-based control.",
                  tech: "Arduino, Altium, SolidWorks",
                },
                {
                  title: "Metroband - Tempo-Keeping Wristband",
                  category: "Embedded",
                  date: "Mora Ventures 6.0",
                  description:
                    "Wearable tempo-keeping wristband with vibration cues and beat detection.",
                  tech: "C++, Altium, SolidWorks, Python",
                },
                {
                  title: "Analog Guitar Pedal Board",
                  category: "Embedded",
                  date: "—",
                  description:
                    "Analogue guitar effects pedal board with six sound-processing modules.",
                  tech: "Analog Circuits, LTspice, Altium",
                },
                {
                  title: "Sportsense - AI Sports Trainer",
                  category: "Software",
                  date: "Idealize 2024 (1st Runner-Up)",
                  description:
                    "Real-time CV-based posture and movement analyzer for personalized training feedback.",
                  tech: "Kotlin, Firebase, Mediapipe, YOLO",
                },
                {
                  title: "Signify - Speech-to-Sign-Language AR Glasses",
                  category: "Software",
                  date: "VR Cade 2025 (Champions)",
                  description:
                    "AR system translating speech into sign language in real-time for hearing-impaired users.",
                  tech: "Unity, Blender, OpenCV, Mediapipe",
                },
                {
                  title: "PMF Analysis Agent",
                  category: "Software",
                  date: "Ongoing",
                  description:
                    "AI-driven Product-Market Fit analyzer for SaaS companies using behavioral insights.",
                  tech: "React, Node.js, LangGraph, Python, AWS",
                },
                {
                  title: "Xplore - Travel Companion App",
                  category: "Software",
                  date: "—",
                  description:
                    "Mobile app providing personalized travel planning and location-based insights.",
                  tech: "Next.js, React, Firestore, Firebase Storage",
                },
                {
                  title: "Data Analysis Agent",
                  category: "Software",
                  date: "—",
                  description:
                    "Intelligent agent for automated analysis and reporting on financial data.",
                  tech: "React, AWS, Express.js, Python",
                },
                {
                  title:
                    "Crystal Clear - Platform for Assisting Dyslexic Students",
                  category: "Software",
                  date: "Imagine Cup 2024",
                  description:
                    "AI-powered personalized learning platform using computer vision and voice recognition.",
                  tech: "React, React Native, TensorFlow",
                },
                {
                  title: "PCB Company Web Application",
                  category: "Software",
                  date: "—",
                  description:
                    "Full-stack web system with six subsystems for managing PCB company operations.",
                  tech: "Java, Spring Boot, MongoDB, React",
                },
              ]
                .filter(
                  (project) =>
                    projectFilter === "All" ||
                    project.category === projectFilter
                )
                .map((project) => (
                  <article
                    key={`${project.title}-${project.category}`}
                    className="project-card"
                  >
                    <div className="project-media">Project image</div>
                    <div className="project-meta">
                      <span className="tag">{project.category}</span>
                      <span className="project-date">{project.date}</span>
                    </div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <p className="project-tech">Technologies: {project.tech}</p>
                  </article>
                ))}
            </div>
          </section>
        )}

        {route === "/academics" && (
          <section className="section">
            <div className="section-header">
              <h3>Academics</h3>
              <p>Education milestones and academic highlights.</p>
            </div>
            <div className="list-grid">
              <div className="list-item">
                <h4>University of Moratuwa, Sri Lanka — 2022 - Present</h4>
                <p>
                  B.Sc. Honours in Electronic and Telecommunication Engineering
                  (CGPA: 3.81/4.00)
                </p>
                <p className="muted">
                  Dean&apos;s List appearance in 5 out of 6 semesters
                </p>
              </div>
              <div className="list-item">
                <h4>St. Anthony&apos;s College, Kandy — 2007 - 2020</h4>
                <p>
                  Passed GCE A/L Examination with 3A&apos;s in Physical Stream
                  (University Entrance Examination)
                </p>
                <p className="muted">Z-score: 2.3016</p>
              </div>
            </div>
          </section>
        )}

        {route === "/experiences" && (
          <section className="section">
            <div className="section-header">
              <h3>Experiences</h3>
              <p>Hands-on experience delivering production-grade systems.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div>
                  <h4>Machine Learning Engineer</h4>
                  <p className="muted">Nova Labs Aú 2023 ƒ?" Present</p>
                </div>
                <p>
                  Built forecasting services, automated feature pipelines, and
                  deployed real-time monitoring across ML workflows.
                </p>
              </div>
              <div className="timeline-item">
                <div>
                  <h4>Full Stack Developer</h4>
                  <p className="muted">Pulse Systems Aú 2021 ƒ?" 2023</p>
                </div>
                <p>
                  Delivered customer portals, internal dashboards, and API
                  services used by 30k+ monthly users.
                </p>
              </div>
            </div>
          </section>
        )}

        {route === "/achievements" && (
          <section className="section">
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
        )}

        {route === "/news" && (
          <section className="section">
            <div className="section-header">
              <h3>News</h3>
              <p>Recent updates, events, and publications.</p>
            </div>
            <div className="list-grid">
              <div className="list-item">
                <h4>Volunteer Developer for FloodSupport Sri Lanka</h4>
                <p>
                  Built a disaster analytics dashboard for emergency response
                  coordination.
                </p>
              </div>
              <div className="list-item">
                <h4>DVCon India 2025 - 1st Runners-Up</h4>
                <p>Recognized for an FPGA-based inference accelerator.</p>
              </div>
              <div className="list-item">
                <h4>Campus Tech Talk</h4>
                <p>Presented on deploying ML models on edge devices.</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
