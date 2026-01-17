import mainImg from "../../assets/Projects/Nanonaut/main.jpg";

const Nanonaut = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Robot Nanonaut</h3>
                <p>Multifunction Autonomous Robot (Arduino MEGA 2560)</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Designed for the "Robot Design and Competition" module at the University of Moratuwa.
                            Powered by an <strong>Arduino MEGA 2560</strong>, Nanonaut is a versatile robot engineered to handle complex navigation and manipulation tasks in a competitive arena.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Capabilities</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Navigation:</strong> Line following & ramp climbing (up to 20°).</li>
                                <li><strong>Manipulation:</strong> Mechanical arm for moving 5x5x5cm boxes.</li>
                                <li><strong>Sensing:</strong> Colour detection & object/collision avoidance.</li>
                                <li><strong>Interaction:</strong> Sound-triggered freezing & guard robot avoidance.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Robot Nanonaut"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Task List Grid */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Functional Modules</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>1. Line & Ramp Navigation</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Robust PID-based line following algorithm capable of maintaining traction on inclines up to 20°.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>2. Object Manipulation</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Custom mechanical arm designed to securely grip, lift, and transport standard 5cm cubes to designated zones.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>3. Advanced Sensing</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Integrated colour sensors for zone identification and microphones for sound-based stop/start commands.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>4. Dynamic Avoidance</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Real-time detection of moving obstacles (guard robots) to dynamically alter the path and avoid collisions.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Nanonaut;
