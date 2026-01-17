import profileImg from "../assets/Julian Silva.png";
import cvPdf from "../assets/Julian_Silva_CV.pdf";

const Home = () => {
    return (
        <section className="home">
            <div className="home-grid">
                <article className="profile-card simple-profile">
                    <div className="simple-photo">
                        <img src={profileImg} alt="Julian Silva" />
                    </div>
                    <h1 className="simple-name">Julian Silva</h1>
                    <p className="simple-title">Final Year Undergraduate</p>
                    <div className="simple-lines">
                        <p>Department of Electronic and Telecommunication Engineering</p>
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
                        (CGPA: 3.82/4.00)
                    </p>
                    <span className="mini-meta">
                        Dean&apos;s List appearance in 6 out of 7 semesters
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
    );
};

export default Home;
