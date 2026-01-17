import roboticGenProgrammeImg from "../../assets/Rgen/programme.jpeg";
import roboticGenSchoolImg from "../../assets/Rgen/school.jpeg";
import roboticGenMoraForesightImg from "../../assets/Rgen/Moraforesight.jpeg";
import roboticGenMoraForesightAltImg from "../../assets/Rgen/Moraforesight2.jpeg";

const RoboticGen = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Robotics Instructor</h3>
                <p>Teaching & Mentorship | RoboticGen Academy</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '32px' }}>
                    Led robotics sessions for students across multiple age groups, focusing on hands-on builds,
                    programming logic, and problem-solving through robotics.
                </p>

                {/* Responsibilities Table */}
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Responsibilities</h5>

                <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #475569', color: '#e2e8f0' }}>
                                <th style={{ padding: '8px', width: '30%' }}>Activity</th>
                                <th style={{ padding: '8px' }}>Impact & Detail</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#94a3b8' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Weekly Programmes</td>
                                <td style={{ padding: '8px' }}>Conducted ongoing sessions covering mechanics and coding fundamentals.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Conducting Sessions</td>
                                <td style={{ padding: '8px' }}>Conducting Robotics and IoT sessions at national level programmes</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Outreach Workshops</td>
                                <td style={{ padding: '8px' }}>Promoted STEM education through school visits and demos.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Image Grid */}
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Session Highlights</h5>

                <div className="experience-media-grid">
                    <div className="experience-media">
                        <img
                            src={roboticGenProgrammeImg}
                            alt="RoboticGen weekly programme session"
                        />
                        <div className="process-content">
                            <h6>Student Mentoring</h6>
                            <p><strong>Focus:</strong> Individual Guidance</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Hands-on debugging and logic building.</p>
                        </div>
                    </div>

                    <div className="experience-media">
                        <img
                            src={roboticGenSchoolImg}
                            alt="Robotics outreach at schools"
                        />
                        <div className="process-content">
                            <h6>School Outreach</h6>
                            <p><strong>Event:</strong> STEM Awareness</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Demonstrating robotics concepts to students.</p>
                        </div>
                    </div>

                    <div className="experience-media">
                        <img
                            src={roboticGenMoraForesightImg}
                            alt="MoraForesight robotics session"
                        />
                        <div className="process-content">
                            <h6>External Sessions </h6>
                            <p><strong>Event:</strong> MoraForesight</p>

                        </div>
                    </div>

                    <div className="experience-media">
                        <img
                            src={roboticGenMoraForesightAltImg}
                            alt="MoraForesight mentoring activity"
                        />
                        <div className="process-content">
                            <h6>Technical Workshops</h6>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoboticGen;
