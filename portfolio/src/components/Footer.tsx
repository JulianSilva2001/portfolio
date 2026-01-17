import cvPdf from "../assets/Julian_Silva_CV.pdf";

const Footer = () => {
    return (
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
    );
};

export default Footer;
