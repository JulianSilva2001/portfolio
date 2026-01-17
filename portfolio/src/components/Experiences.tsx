import signaturePipeline from "../assets/Internship/Tea/Images/Signature/Tea Image Vision LLM Model-2026-01-16-071629.png";
import internshipTestJigBoardImg from "../assets/Internship/TestJig/testJig.png";
import roboticGenMoraForesightImg from "../assets/Rgen/Moraforesight.jpeg";

const Experiences = () => {
    return (
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
                            Paraqum Technologies (Pvt) Ltd
                        </p>
                    </div>
                    <div className="timeline-detail">
                        {/* Condensed Paraqum section by removing divisions/CEO */}
                        <div className="experience-two-col">
                            <div className="timeline-subsection">
                                <h5>1. Tea Quality Signature Generation</h5>
                                <p className="muted">AI + Computer Vision</p>
                                <p>
                                    Vision-based system for digital tea grading, reducing
                                    valuation time from 3 weeks to minutes.
                                </p>
                                <div style={{ margin: '12px 0', borderRadius: '8px', overflow: 'hidden' }}>
                                    <img
                                        src={signaturePipeline}
                                        alt="Vision-LLM Pipeline"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <a href="#/experience/tea" target="_blank" className="mini-action" rel="noopener noreferrer">
                                    View Report
                                </a>
                            </div>

                            <div className="timeline-subsection">
                                <h5>2. Industrial Test Jig System</h5>
                                <p className="muted">Hardware + Software Integration</p>
                                <p>
                                    Automated testing system for Receiver and Key-Fob PCBs, validating hardware components and firmware.
                                </p>
                                <div style={{ margin: '12px 0', borderRadius: '8px', overflow: 'hidden' }}>
                                    <img
                                        src={internshipTestJigBoardImg}
                                        alt="Automated Test Jig"
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                                <a href="#/experience/test-jig" target="_blank" className="mini-action" rel="noopener noreferrer">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="timeline-item">
                    <div>
                        <h4>Robotics Instructor</h4>
                        <p className="muted">
                            RoboticGen Academy (Pvt) Ltd
                        </p>
                    </div>
                    <div className="timeline-detail">
                        {/* Moved details to separate page, concise summary here */}
                        <h5>Teaching &amp; Mentorship</h5>
                        <p>
                            Led robotics programmes and mentored students for national competitions, focusing on hands-on critical thinking.
                        </p>
                        <div style={{ margin: '12px 0', borderRadius: '8px', overflow: 'hidden' }}>
                            <img
                                src={roboticGenMoraForesightImg}
                                alt="Robotics Session"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                        <a href="#/experience/robotic-gen" target="_blank" className="mini-action" rel="noopener noreferrer">
                            View Activities
                        </a>
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
    );
};

export default Experiences;
