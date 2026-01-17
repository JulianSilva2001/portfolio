import mainImg from "../../assets/Projects/Micromouse/main.jpeg";
import robofest1 from "../../assets/Projects/Micromouse/Robofest_second_runners_up (1).jpeg";
import robofest2 from "../../assets/Projects/Micromouse/Robofest_second_runners_up (2).jpeg";

const Micromouse = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>OboMouse - Micromouse Robot</h3>
                <p>Autonomous Maze Solving Robot</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            <strong>OboMouse</strong> is an autonomous robot designed to navigate and solve unknown mazes in the shortest possible time. Built for competitive robotics, it utilizes high-speed sensors, efficient motor control, and flood-fill optimization algorithms to map the maze and race to the center.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Achievements</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Champions:</strong> MicroMaze 2024 (IEEE RAS IIT).</li>
                                <li><strong>2nd Runners-Up:</strong> Robofest 2024 (SLIIT).</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="OboMouse Robot"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Hardware & Competition Gallery */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Competition Highlights</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Robofest Image 1 */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img
                            src={robofest1}
                            alt="Robofest Awards Ceremony"
                            style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#cbd5e1', textAlign: 'center' }}>
                            Securing 2nd Runners-Up at Robofest 2024 (SLIIT).
                        </p>
                    </div>

                    {/* Robofest Image 2 */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img
                            src={robofest2}
                            alt="Team at Robofest"
                            style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#cbd5e1', textAlign: 'center' }}>
                            Our team demonstrating the OboMouse's navigation skills.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Micromouse;
