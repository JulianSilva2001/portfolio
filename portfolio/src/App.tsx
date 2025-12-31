import { useEffect, useState } from "react";
import "./App.css";
import profileImg from "./assets/Julian Silva.png";
import cvPdf from "./assets/Julian_Silva_CV.pdf";
import battlebotImg from "./assets/Projects/Battlebot/main.jpeg";
import dyslexiaImg from "./assets/Projects/Dyslexia/main.jpg";
import pcbDefectsImg from "./assets/Projects/PCB Defects/main.jpg";
import panoramaImg from "./assets/Projects/Panorama/main.jpg";
import teaDefectsImg from "./assets/Projects/Tea/main.png";
import NSImage from "./assets/Projects/EEG_Fusion/main.png";
import guitarPedalImg from "./assets/Projects/GuitarPedal/main.png";
import metrobandImg from "./assets/Projects/Metroband/main.png";
import micromouseImg from "./assets/Projects/Micromouse/main.jpeg";
import nanonautImg from "./assets/Projects/Nanonaut/main.jpg";
import pcbCompanyImg from "./assets/Projects/PCB_company/main.jpg";
import pmfAnalyzerImg from "./assets/Projects/PMF_Analyzer/main.png";
import signifyImg from "./assets/Projects/Signify/main.png";
import sportsenseImg from "./assets/Projects/Sportsense/main.jpg";
import xploreImg from "./assets/Projects/Xplore/main.jpg";
import speedoboImg from "./assets/Projects/SpeedObo/main.jpeg";
import ekfSlamImg from "./assets/Projects/EKF_SLAM/main.png";
import achievementBattlebotImg from "./assets/Achievements/battlebot.jpeg";
import achievementBrainstormImg from "./assets/Achievements/Brainstorm.jpeg";
import achievementDeansListImg from "./assets/Achievements/deansList.png";
import achievementIdealizeRunnerUpImg from "./assets/Achievements/Idealize_2.jpeg";
import achievementIdealizeConceptualistImg from "./assets/Achievements/Idealize_conceptualist.jpeg";
import achievementIESLImg from "./assets/Achievements/IESL.jpeg";
import achievementImagineCupImg from "./assets/Achievements/imagineCup.png";
import achievementMicroMazeImg from "./assets/Achievements/micromaze.jpeg";
import achievementPhysicsImg from "./assets/Achievements/Physics.jpg";
import achievementRobofestImg from "./assets/Achievements/robofest.jpeg";
import achievementSparkImg from "./assets/Achievements/spark.jpg";
import achievementVRCadeImg from "./assets/Achievements/VRCade.jpeg";
import achievementBasketballImg from "./assets/Achievements/basketball.png";
import achievementBylImg from "./assets/Achievements/byl.jpeg";
import achievementChessImg from "./assets/Achievements/chess.png";
import achievementChoirImg from "./assets/Achievements/choir.jpg";
import achievementChoir2Img from "./assets/Achievements/choir2.jpg";
import achievementIgvImg from "./assets/Achievements/igv.jpeg";
import achievementMusicianImg from "./assets/Achievements/musician.jpeg";
import internshipTestJigAppImg from "./assets/Internship/TestJig/app.png";
import internshipTestJigRelayImg from "./assets/Internship/TestJig/relayMatrix.png";
import internshipTestJigBoardImg from "./assets/Internship/TestJig/testJig.png";
import achievementIdealizeImg from "./assets/Achievements/amplifier.jpg";
import achievementChathurmanaImg from "./assets/Achievements/chathurmana.jpeg";
import slamImg from "./assets/Projects/SLAM/main.png";
import teaGrades from "./assets/Internship/Tea/Tea_grades.png";
import teaPipeImg from "./assets/Internship/Tea/pipeline.png";
import teaOutput from "./assets/Internship/Tea/output.png";
import roboticGenProgrammeImg from "./assets/Rgen/programme.jpeg";
import roboticGenSchoolImg from "./assets/Rgen/school.jpeg";
import roboticGenMoraForesightImg from "./assets/Rgen/Moraforesight.jpeg";
import roboticGenMoraForesightAltImg from "./assets/Rgen/Moraforesight2.jpeg";
import compereBasketballImg from "./assets/Others/Public_Speaking/Basketball Tournament.jpg";
import compereCarolServiceImg from "./assets/Others/Public_Speaking/Carol_Service.jpg";
import compereColoursAwards23Img from "./assets/Others/Public_Speaking/Colours_awards_23.jpg";
import compereColoursAwards24Img from "./assets/Others/Public_Speaking/Colours_Awards_24.jpg";
import compereEnvoyageImg from "./assets/Others/Public_Speaking/Envoyage.jpg";
import compereGlobalVillageImg from "./assets/Others/Public_Speaking/Global Village.jpg";
import compereIdealize2023Img from "./assets/Others/Public_Speaking/Idealize_2023.jpg";
import compereMoraForesightAwardingImg from "./assets/Others/Public_Speaking/Moraforesight Awarding Ceremony.jpg";
import compereSlrcFinalsImg from "./assets/Others/Public_Speaking/SLRC_Finals.jpg";
import compereSlugBaseballImg from "./assets/Others/Public_Speaking/SLUG_basballe.jpg";
import aestheticsAbhinaDanceImg from "./assets/Others/Aesthetics/Abhina_Dance.jpeg";
import aestheticsAbhinaDramaImg from "./assets/Others/Aesthetics/Abhina_drama.jpeg";
import aestheticsAbhinaInstrumentsImg from "./assets/Others/Aesthetics/Abhina_Instruments.jpeg";
import aestheticsAnnualCarolConductImg from "./assets/Others/Aesthetics/Annual Unviersity Carol Service_Conduct.jpeg";
import aestheticsBeatboxTronicImg from "./assets/Others/Aesthetics/BeatBox_TronicPadura.jpg";
import aestheticsChathurmanaChoirImg from "./assets/Others/Aesthetics/Chathurmana_Choir.jpg";
import aestheticsColomboCarolsConductImg from "./assets/Others/Aesthetics/Sri Lanka Universities Colombo Region Carols_Conduct.jpeg";
import aestheticsYathraChoirImg from "./assets/Others/Aesthetics/Yathra_choir.jpeg";

function App() {
  const routes = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Academics", path: "/academics" },
    { label: "Achievements", path: "/achievements" },
    { label: "Experiences", path: "/experiences" },
    { label: "Other", path: "/news" },
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
  const [achievementFilter, setAchievementFilter] = useState("All");
  const [newsFilter, setNewsFilter] = useState("All");
  const [navOpen, setNavOpen] = useState(false);
  const getProjectCategories = (category: string | string[]) =>
    Array.isArray(category) ? category : [category];

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      setNavOpen(false);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">Julian Silva</div>
          <button
            type="button"
            className={`nav-toggle${navOpen ? " nav-toggle-open" : ""}`}
            onClick={() => setNavOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`nav${navOpen ? " nav-open" : ""}`}>
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
                  <span className="simple-interest-chip">
                    Human Computer Interaction
                  </span>
                  <span className="simple-interest-chip">
                    Brain Computer Interfaces
                  </span>
                  <span className="simple-interest-chip">Generative AI</span>
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
                  <a
                    href="https://medium.com/@silva.ljjp"
                    className="icon-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M4 6.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13C4.67 19 4 18.33 4 17.5v-11Zm4.2 9.25V8.25l3.35 4.92 3.35-4.92v7.5h1.7V7h-1.86l-3.19 4.73L8.36 7H6.5v8.75h1.7Z"
                        fill="currentColor"
                      />
                    </svg>
                    Medium
                  </a>
                  <a
                    href={cvPdf}
                    className="icon-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 3a1 1 0 0 1 1 1v8.17l2.59-2.58a1 1 0 1 1 1.41 1.42l-4.3 4.29a1 1 0 0 1-1.4 0l-4.3-4.29a1 1 0 0 1 1.41-1.42L11 12.17V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
                        fill="currentColor"
                      />
                    </svg>
                    Download CV
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
                  <span className="mini-action">View all</span>
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
                  <span className="mini-action">View all</span>
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
                  <span className="mini-action">View all</span>
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
                  <p className="mini-title">Technical Achievements</p>
                  <span className="mini-action">View all</span>
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
                    <h3>10</h3>
                    <p>Total Technical Achievements</p>
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
              {["All", "AI & ML", "Robotics", "Embedded", "Software"].map(
                (filter) => (
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
                )
              )}
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
                  image: NSImage,
                },
                {
                  title: "PCB Defects Detection Device",
                  category: "AI & ML",
                  date: "April 2024",
                  description:
                    "Detects six PCB defect types and component-placement errors, integrated with a web interface.",
                  tech: "Python, YOLOv8, PyTorch, OpenCV, Altium, SolidWorks",
                  image: pcbDefectsImg,
                },
                {
                  title:
                    "Tea Classification and Signature Estimation (Paraqum)",
                  category: "AI & ML",
                  date: "December 2024",
                  description:
                    "Classifies tea grades and estimates visual signatures for automated quality assessment.",
                  tech: "Python, TensorFlow, PyTorch",
                  image: teaDefectsImg,
                },
                {
                  title: "Panorama Stitching with Feature Matching (GNN)",
                  category: "AI & ML",
                  date: "November 2024",
                  description:
                    "Uses SuperGlue for accurate feature matching and seamless blending across viewpoints.",
                  tech: "SuperGlue, Python, OpenCV, PyTorch, RANSAC",
                  image: panoramaImg,
                },
                {
                  title: "Monocular RGB SLAM in Dynamic Environments",
                  category: ["AI & ML", "Robotics"],
                  date: "Ongoing",
                  description:
                    "A robust monocular RGB SLAM system that uses uncertainty-aware tracking and mapping for dynamic object removal.",
                  tech: "Python, PyTorch, Gaussian Splatting",
                  image: slamImg,
                },
                {
                  title: "EKF SLAM in ROS",
                  category: ["Robotics"],
                  date: "2024",
                  description:
                    "Implemented EKF-based SLAM in ROS for real-time localization and mapping with noisy sensor streams.",
                  tech: "ROS, Python, EKF",
                  image: ekfSlamImg,
                },
                {
                  title: "OboMouse - Micromouse Robot",
                  category: ["Robotics", "Embedded"],
                  date: "Champions (MicroMaze 2024)",
                  description:
                    "Autonomous maze-solving robot using high-speed sensors and optimization algorithms.",
                  tech: "STM32, C, Altium, SolidWorks",
                  image: micromouseImg,
                },
                {
                  title: "Robot Nanonaut",
                  category: ["Robotics", "Embedded"],
                  date: "—",
                  description:
                    "Multifunction robot capable of line-following, obstacle avoidance, gripping, and sound recognition.",
                  tech: "Arduino, SolidWorks, Altium",
                  image: nanonautImg,
                },
                {
                  title: "SpeedObo - High-Precision Line Follower",
                  category: ["Robotics", "Embedded"],
                  date: "—",
                  description:
                    "High-speed, high-accuracy line follower robot for competitive robotics.",
                  tech: "STM32, C++, Altium, SolidWorks",
                  image: speedoboImg,
                },
                {
                  title: "MetroniX Battlebot",
                  category: ["Robotics", "Embedded"],
                  date: "UWV Robot Battle 2024",
                  description:
                    "Combat robot featuring a dynamic lifting mechanism and RF-based control.",
                  tech: "Arduino, Altium, SolidWorks",
                  image: battlebotImg,
                },
                {
                  title: "Metroband - Tempo-Keeping Wristband",
                  category: "Embedded",
                  date: "Mora Ventures 6.0",
                  description:
                    "Wearable tempo-keeping wristband with vibration cues and beat detection.",
                  tech: "C++, Altium, SolidWorks, Python",
                  image: metrobandImg,
                },
                {
                  title: "Analog Guitar Pedal Board",
                  category: "Embedded",
                  date: "—",
                  description:
                    "Analogue guitar effects pedal board with six sound-processing modules.",
                  tech: "Analog Circuits, LTspice, Altium",
                  image: guitarPedalImg,
                },
                {
                  title: "Sportsense - AI Sports Trainer",
                  category: ["Software", "AI & ML"],
                  date: "Idealize 2024 (1st Runner-Up)",
                  description:
                    "Real-time CV-based posture and movement analyzer for personalized training feedback.",
                  tech: "Kotlin, Firebase, Mediapipe, YOLO",
                  image: sportsenseImg,
                },
                {
                  title: "Signify - Speech-to-Sign-Language AR Glasses",
                  category: "Software",
                  date: "VR Cade 2025 (Champions)",
                  description:
                    "AR system translating speech into sign language in real-time for hearing-impaired users.",
                  tech: "Unity, Blender, OpenCV, Mediapipe",
                  image: signifyImg,
                },
                {
                  title: "PMF Analysis Agent",
                  category: ["Software", "AI & ML"],
                  date: "Ongoing",
                  description:
                    "AI-driven Product-Market Fit analyzer for SaaS companies using behavioral insights.",
                  tech: "React, Node.js, LangGraph, Python, AWS",
                  image: pmfAnalyzerImg,
                },
                {
                  title: "Xplore - Travel Companion App",
                  category: ["Software", "AI & ML"],
                  date: "—",
                  description:
                    "Mobile app providing personalized travel planning and location-based insights.",
                  tech: "Next.js, React, Firestore, Firebase Storage",
                  image: xploreImg,
                },
                {
                  title:
                    "Crystal Clear - Platform for Assisting Dyslexic Students",
                  category: ["Software", "AI & ML"],
                  date: "Imagine Cup 2024",
                  description:
                    "AI-powered personalized learning platform using computer vision and voice recognition.",
                  tech: "React, React Native, TensorFlow",
                  image: dyslexiaImg,
                },
                {
                  title: "PCB Company Web Application",
                  category: "Software",
                  date: "—",
                  description:
                    "Full-stack web system with six subsystems for managing PCB company operations.",
                  tech: "Java, Spring Boot, MongoDB, React",
                  image: pcbCompanyImg,
                },
              ]
                .filter(
                  (project) =>
                    projectFilter === "All" ||
                    getProjectCategories(project.category).includes(
                      projectFilter
                    )
                )
                .map((project) => (
                  <article
                    key={`${project.title}-${project.category}`}
                    className="project-card"
                  >
                    <div className="project-media">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        "Project image"
                      )}
                    </div>
                    <div className="project-meta">
                      <div className="tag-group">
                        {getProjectCategories(project.category).map(
                          (category) => (
                            <span
                              key={`${project.title}-${category}`}
                              className="tag"
                            >
                              {category}
                            </span>
                          )
                        )}
                      </div>
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
            <div className="project-grid">
              <div className="list-item">
                <h4>University of Moratuwa, Sri Lanka | 2022 - Present</h4>
                <p>
                  B.Sc. Honours in Electronic and Telecommunication Engineering
                  (CGPA: 3.81/4.00)
                </p>
                <p className="muted">
                  Dean&apos;s List appearance in 5 out of 6 semesters
                </p>
              </div>
              <div className="list-item">
                <h4>St. Anthony&apos;s College, Kandy | 2007 - 2020</h4>
                <p>
                  Passed GCE A/L Examination with 3A&apos;s in Physical Stream
                  (University Entrance Examination)
                </p>
                <p className="muted">Z-score: 2.3016</p>
                <p>Winner of Best Student in Physics for the Year 2025 Award</p>
              </div>
            </div>
          </section>
        )}

        {route === "/experiences" && (
          <section className="section">
            <div className="section-header">
              <h3>Experiences</h3>
              <p>Industry, teaching, and mentoring roles.</p>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div>
                  <h4>Embedded &amp; ML Engineering Intern</h4>
                  <p className="muted">
                    Paraqum Technologies (Pvt) Ltd, Sri Lanka
                  </p>
                </div>
                <div className="timeline-detail">
                  <h5>Where I Worked</h5>
                  <p>
                    Company Divisions: Embedded Systems, Analog Inference,
                    Network Solutions, Marketing &amp; Human Resource
                  </p>
                  <p className="muted">
                    Established: 2014 | CEO: Dr Ajith Pasqual
                  </p>
                  <div className="experience-two-col">
                    <div className="timeline-subsection">
                      <h5>1. Tea Quality Signature Generation</h5>
                      <p className="muted">AI + Computer Vision</p>
                      <p>
                        A vision-based system to generate a digital signature
                        for tea samples, enabling faster and more consistent
                        quality assessment.
                      </p>
                      <p className="muted">
                        Traditional tea grading can delay distribution by up to
                        three weeks. This system supports faster
                        decision-making.
                      </p>
                      <div className="experience-media">
                        <img src={teaGrades} alt="Tea quality signature" />
                      </div>

                      <h6>What I worked on</h6>
                      <ul>
                        <li>Tea image analysis using deep learning</li>
                        <li>Feature extraction for quality indicators</li>
                        <li>
                          AI-assisted interpretation of tea characteristics
                        </li>
                      </ul>

                      <div className="experience-media">
                        <img src={teaPipeImg} alt="Tea model pipeline" />
                      </div>

                      <h6>Outputs (visual-first)</h6>
                      <ul>
                        <li>Tea grade image comparisons</li>
                        <li>Quality feature visualizations</li>
                        <li>End-to-end pipeline diagrams</li>
                      </ul>

                      <div className="experience-media">
                        <img src={teaOutput} alt="Tea quality output charts" />
                      </div>
                    </div>
                    <div className="timeline-subsection">
                      <h5>3. Industrial Test Jig System</h5>
                      <p className="muted">Hardware + Software Integration</p>
                      <p>
                        A complete testing system used to validate Receiver and
                        Key-Fob PCBs during production.
                      </p>
                      <h6>What I delivered</h6>
                      <ul>
                        <li>
                          Full-stack web application for automated testing
                        </li>
                        <li>Hardware-software integration for diagnostics</li>
                        <li>Structured test workflows for production use</li>
                      </ul>
                      <h6>Key-Fob tests</h6>
                      <ul>
                        <li>RGB LED</li>
                        <li>EEPROM</li>
                        <li>Microcontroller</li>
                        <li>Battery voltage</li>
                        <li>Idle power consumption</li>
                        <li>Button inputs</li>
                      </ul>
                      <h6>Receiver tests</h6>
                      <ul>
                        <li>RGB LED</li>
                        <li>Learn &amp; reset switches</li>
                        <li>Logic inputs</li>
                        <li>Configuration switches</li>
                        <li>RNG, EEPROM, fuses</li>
                        <li>Power supplies &amp; microcontroller</li>
                      </ul>
                      <div className="experience-media-grid">
                        <div className="experience-media">
                          <img
                            src={internshipTestJigAppImg}
                            alt="Test jig application UI"
                          />
                        </div>
                        <div className="experience-media">
                          <img
                            src={internshipTestJigBoardImg}
                            alt="PCB under test"
                          />
                        </div>
                        <div className="experience-media">
                          <img
                            src={internshipTestJigRelayImg}
                            alt="Relay matrix wiring"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div>
                  <h4>Robotics Instructor</h4>
                  <p className="muted">
                    RoboticGen Academy (Pvt) Ltd, Sri Lanka
                  </p>
                </div>
                <div className="timeline-detail">
                  <h5>Teaching &amp; Mentorship</h5>
                  <p>
                    Led robotics sessions for students across multiple age
                    groups, with a focus on hands-on builds and problem-solving.
                  </p>
                  <div className="experience-media-grid">
                    <figure className="experience-figure">
                      <div className="experience-media">
                        <img
                          src={roboticGenProgrammeImg}
                          alt="RoboticGen weekly programme session"
                        />
                      </div>
                      <figcaption className="experience-caption">
                        RoboticGen programme, One-on-one student mentoring
                      </figcaption>
                    </figure>

                    <figure className="experience-figure">
                      <div className="experience-media">
                        <img
                          src={roboticGenSchoolImg}
                          alt="Robotics outreach at schools"
                        />
                      </div>
                      <figcaption className="experience-caption">
                        School outreach programmes
                      </figcaption>
                    </figure>
                    <figure className="experience-figure">
                      <div className="experience-media">
                        <img
                          src={roboticGenMoraForesightImg}
                          alt="MoraForesight robotics session"
                        />
                      </div>
                      <figcaption className="experience-caption">
                        MoraForesight top-100 selection session
                      </figcaption>
                    </figure>
                    <figure className="experience-figure">
                      <div className="experience-media">
                        <img
                          src={roboticGenMoraForesightAltImg}
                          alt="MoraForesight mentoring activity"
                        />
                      </div>
                      <figcaption className="experience-caption">
                        Robotics workshops and demos
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div>
                  <h4>Physics Tutor (Edexcel O/L - IGCSE)</h4>
                  <p className="muted">Keenbridge English Academy (Pvt) Ltd</p>
                </div>
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
            <div className="project-filters">
              {[
                "All",
                "Technical & Innovation Competitions",
                "Academic Excellence",
                "Leadership & AIESEC",
                "Music & Performing Arts",
                "Sports",
              ].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    achievementFilter === filter
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  onClick={() => setAchievementFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="list-grid">
              {[
                {
                  title: "Champions - VR Cade 2025 (Mixed Reality Competition)",
                  category: "Technical & Innovation Competitions",
                  description: "IEEE IAS at UoM",
                  image: achievementVRCadeImg,
                },
                {
                  title: "Champions - MicroMaze 2024 (Micromouse)",
                  category: "Technical & Innovation Competitions",
                  description: "IEEE RAS at IIT",
                  image: achievementMicroMazeImg,
                },
                {
                  title:
                    "1st Runner-Up - Idealize 2024 (Ideathon & Mobile App)",
                  category: "Technical & Innovation Competitions",
                  description: "AIESEC UoM",

                  image: achievementIdealizeRunnerUpImg,
                },

                {
                  title: "2nd Runner-Up - Robofest 2024 (Micromouse)",
                  category: "Technical & Innovation Competitions",
                  description: "SLIIT",
                  image: achievementRobofestImg,
                },
                {
                  title: "5th Place - SPARK 2024 Innovation Competition",
                  category: "Technical & Innovation Competitions",
                  description: "Electronic Club UoM",
                  image: achievementSparkImg,
                },
                {
                  title: "7th Place - UWU Robot Battle Competition",
                  category: "Technical & Innovation Competitions",
                  image: achievementBattlebotImg,
                },

                {
                  title: "Conceptualist Award - Idealize 2024",
                  category: "Technical & Innovation Competitions",
                  description: "AIESEC UoM",
                  image: achievementIdealizeConceptualistImg,
                },
                {
                  title:
                    "Finalist - Brainstorm 2024 (Sri Lanka’s Premier Healthcare Innovation Competition)",
                  category: "Technical & Innovation Competitions",
                  image: achievementBrainstormImg,
                },
                {
                  title: "Finalist - IESL Startup Challenge 20205",
                  category: "Technical & Innovation Competitions",
                  image: achievementIESLImg,
                },
                {
                  title:
                    "Semifinalist - Microsoft ImagineCup 2024 (AI-Driven Student Startups)",
                  category: "Technical & Innovation Competitions",
                  image: achievementImagineCupImg,
                },

                {
                  title:
                    "Dean’s List - 6/7 semesters (Level 1 (Sem 1 & 2), Level 2 (Sem 2), Level 3 (Sem 1 & 2))",
                  category: "Academic Excellence",
                  description: "University of Moratuwa",
                  image: achievementDeansListImg,
                },
                {
                  title: "Winner - Best Student in Physics of the Year (2020)",
                  category: "Academic Excellence",
                  image: achievementPhysicsImg,
                  description: "St. Anthony’s College Kandy",
                },

                {
                  title: "Best Young Leader Nominee",
                  category: "Leadership & AIESEC",
                  description: "AIESEC Sri Lanka (2022)",
                  image: achievementBylImg,
                },

                {
                  title: "Best Team Leader & Best Project of the Quarter - IGV",
                  category: "Leadership & AIESEC",
                  description: "AIESEC UoM",
                  image: achievementIgvImg,
                },
                {
                  title: "Second Best Leader - AMPLIFIER 2021",
                  category: "Leadership & AIESEC",
                  description: "AIESEC Sri Lanka",
                  image: achievementIdealizeImg,
                },

                {
                  title:
                    "Finalist - Chathurmana ’23 (Inter-University Talent Competition)",
                  category: "Music & Performing Arts",
                  description: "Choir TripleG",
                  image: achievementChathurmanaImg,
                },
                {
                  title: "Winner - Best Musician of the Year (2019)",
                  category: "Music & Performing Arts",
                  description: "St. Anthony’s College Kandy",
                  image: achievementMusicianImg,
                },
                {
                  title:
                    "First Place - Three times| All-Island Choir Competitions ",
                  category: "Music & Performing Arts",
                  description: "2019, 2017, 2015",
                  image: achievementChoirImg,
                },
                {
                  title:
                    "Second Place - Two Times | All-Island Choir Competitions ",
                  category: "Music & Performing Arts",
                  description: "2018, 2016",
                  image: achievementChoir2Img,
                },
                {
                  title: "Runner-Up - Inter-School Basketball Tournament",
                  category: "Sports",
                  description: "2016",
                  image: achievementBasketballImg,
                },
                {
                  title: "Runner-Up - Zonal Chess Championship",
                  category: "Sports",
                  description: "2015",
                  image: achievementChessImg,
                },
              ]
                .filter(
                  (achievement) =>
                    achievementFilter === "All" ||
                    achievement.category === achievementFilter
                )
                .map((achievement) => (
                  <article
                    key={`${achievement.title}-${achievement.category}`}
                    className="project-card"
                  >
                    <div className="project-media">
                      {achievement.image ? (
                        <img src={achievement.image} alt={achievement.title} />
                      ) : (
                        "Achievement image"
                      )}
                    </div>
                    <div className="project-meta">
                      <span className="tag">{achievement.category}</span>
                    </div>
                    <h4>{achievement.title}</h4>
                    {achievement.description && (
                      <p>{achievement.description}</p>
                    )}
                  </article>
                ))}
            </div>
          </section>
        )}

        {route === "/news" && (
          <section className="section">
            <div className="section-header">
              <h3>News</h3>
              <p>Compere appearances and aesthetics performances.</p>
            </div>
            <div className="project-filters">
              {["All", "Compere", "Aesthetics"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    newsFilter === filter ? "filter-chip active" : "filter-chip"
                  }
                  onClick={() => setNewsFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="project-grid">
              {[
                {
                  title: "Carol Service",
                  category: "Compere",
                  description:
                    "Hosted the annual carol service of University of Moratuwa.",
                  image: compereCarolServiceImg,
                },
                {
                  title: "Colours Awards 2023",
                  category: "Compere",
                  description: "Compere for Colours Awards 2023.",
                  image: compereColoursAwards23Img,
                },
                {
                  title: "Colours Awards 2024",
                  category: "Compere",
                  description: "Compere for Colours Awards 2024.",
                  image: compereColoursAwards24Img,
                },
                {
                  title: "Envoyage",
                  category: "Compere",
                  description:
                    "Hosted Envoyage organized by the Department of ENTC.",
                  image: compereEnvoyageImg,
                },
                {
                  title: "Basketball Tournament",
                  category: "Compere",
                  description:
                    "Hosted the Inter-University basketball tournament program.",
                  image: compereBasketballImg,
                },
                {
                  title: "Global Village",
                  category: "Compere",
                  description: "Compere for the Global Village showcase.",
                  image: compereGlobalVillageImg,
                },
                {
                  title: "Idealize 2023",
                  category: "Compere",
                  description: "Compere for the Idealize 2023 event.",
                  image: compereIdealize2023Img,
                },
                {
                  title: "MoraForesight Awarding Ceremony",
                  category: "Compere",
                  description: "Hosted the MoraForesight awarding ceremony.",
                  image: compereMoraForesightAwardingImg,
                },
                {
                  title: "SLRC Finals",
                  category: "Compere",
                  description: "Compere for the SLRC Grand Finale.",
                  image: compereSlrcFinalsImg,
                },
                {
                  title: "SLUG Baseball Ceremony",
                  category: "Compere",
                  description: "Hosted the SLUG Baseball Ceremonies.",
                  image: compereSlugBaseballImg,
                },

                {
                  title: "Annual University Carol Service",
                  category: "Aesthetics",
                  description: "Conducted the annual university carol service.",
                  image: aestheticsAnnualCarolConductImg,
                },

                {
                  title: "Colombo Region Carols",
                  category: "Aesthetics",
                  description: "Conducted Colombo Region university carols.",
                  image: aestheticsColomboCarolsConductImg,
                },

                {
                  title: "Abhina Dance",
                  category: "Aesthetics",
                  description: "Dance performance at Abhina.",
                  image: aestheticsAbhinaDanceImg,
                },
                {
                  title: "Abhina Drama",
                  category: "Aesthetics",
                  description: "Drama performance at Abhina.",
                  image: aestheticsAbhinaDramaImg,
                },
                {
                  title: "Abhina Instruments",
                  category: "Aesthetics",
                  description: "Instrumental performance at Abhina.",
                  image: aestheticsAbhinaInstrumentsImg,
                },

                {
                  title: "BeatBox Tronic Padura",
                  category: "Aesthetics",
                  description: "Beatbox performance at Tronic Padura.",
                  image: aestheticsBeatboxTronicImg,
                },
                {
                  title: "Chathurmana Choir",
                  category: "Aesthetics",
                  description: "Choir performance at Chathurmana.",
                  image: aestheticsChathurmanaChoirImg,
                },

                {
                  title: "Yathra Choir",
                  category: "Aesthetics",
                  description: "Choir performance at Yathra.",
                  image: aestheticsYathraChoirImg,
                },
              ]
                .filter(
                  (newsItem) =>
                    newsFilter === "All" || newsItem.category === newsFilter
                )
                .map((newsItem) => (
                  <article
                    key={`${newsItem.title}-${newsItem.category}`}
                    className="project-card"
                  >
                    <div className="project-media">
                      <img src={newsItem.image} alt={newsItem.title} />
                    </div>
                    <div className="project-meta">
                      <span className="tag">{newsItem.category}</span>
                    </div>
                    <h4>{newsItem.title}</h4>
                    <p>{newsItem.description}</p>
                  </article>
                ))}
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>Julian Silva</h3>
            <p>
              Final year Electronic &amp; Telecommunication Engineering student
              focused on robotics, machine learning, and embedded systems.
            </p>
            <div className="footer-socials">
              <a href="mailto:silva.ljjp@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M3 6.75c0-.97.78-1.75 1.75-1.75h14.5C20.22 5 21 5.78 21 6.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 19 3 18.22 3 17.25V6.75Zm2.1.2 6.9 4.32 6.9-4.32a.25.25 0 0 0-.15-.05H5.25a.25.25 0 0 0-.15.05Zm13.9 2.07-6.62 4.14a1.75 1.75 0 0 1-1.86 0L3.9 9.02v8.23c0 .41.34.75.75.75h14.5c.41 0 .75-.34.75-.75V9.02Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/JulianSilva2001"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.66-.21.66-.47v-1.65c-2.68.6-3.24-1.14-3.24-1.14-.44-1.1-1.07-1.4-1.07-1.4-.88-.6.07-.59.07-.59 1 .07 1.54 1.02 1.54 1.02.88 1.51 2.3 1.07 2.86.82.09-.63.35-1.07.64-1.31-2.14-.24-4.4-1.07-4.4-4.76 0-1.05.38-1.9 1-2.57-.1-.24-.43-1.2.1-2.5 0 0 .82-.26 2.7.98a9.4 9.4 0 0 1 4.9 0c1.88-1.24 2.7-.98 2.7-.98.53 1.3.2 2.26.1 2.5.62.67 1 1.52 1 2.57 0 3.7-2.26 4.51-4.41 4.75.36.31.68.92.68 1.85v2.74c0 .26.18.56.67.47A9.5 9.5 0 0 0 12 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/julian-silva-1abb98263/"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4.75 3.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM3.5 9.25h2.5V20.5H3.5V9.25Zm6 0H12v1.6c.35-.62 1.24-1.85 3.1-1.85 2.52 0 3.4 1.66 3.4 3.83v7.67h-2.5v-7.1c0-1.7-.36-2.84-1.98-2.84-1.62 0-2.52 1.23-2.52 2.84v7.1H9.5V9.25Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://medium.com/@silva.ljjp"
                aria-label="Medium"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 6.5c0-.83.67-1.5 1.5-1.5h13c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-13C4.67 19 4 18.33 4 17.5v-11Zm4.2 9.25V8.25l3.35 4.92 3.35-4.92v7.5h1.7V7h-1.86l-3.19 4.73L8.36 7H6.5v8.75h1.7Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href={cvPdf} target="_blank" rel="noreferrer" aria-label="CV">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 3a1 1 0 0 1 1 1v8.17l2.59-2.58a1 1 0 1 1 1.41 1.42l-4.3 4.29a1 1 0 0 1-1.4 0l-4.3-4.29a1 1 0 0 1 1.41-1.42L11 12.17V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#/">Home</a>
            <a href="#/projects">Projects</a>
            <a href={cvPdf} target="_blank" rel="noreferrer">
              CV
            </a>
            <a href="#/news">News</a>
            <a href="#/achievements">Achievements</a>
            <a href="#/experiences">Experiences</a>
          </div>
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <a href="mailto:silva.ljjp@gmail.com">silva.ljjp@gmail.com</a>
            <a href="https://github.com/JulianSilva2001">
              github.com/JulianSilva2001
            </a>
            <a href="https://www.linkedin.com/in/julian-silva-1abb98263/">
              LinkedIn Profile
            </a>
            <a href="https://medium.com/@silva.ljjp" target="_blank" rel="noreferrer">
              Medium Blog
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Julian Silva. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
