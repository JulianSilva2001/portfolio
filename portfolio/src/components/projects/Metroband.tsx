import mainImg from "../../assets/Projects/Metroband/main.png";
import deviceImg from "../../assets/Projects/Metroband/metroband.jpg";
import pcbImg from "../../assets/Projects/Metroband/pcb.jpg";

const Metroband = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Metroband - Tempo-Keeping Wristband</h3>
                <p>Wearable Haptic Metronome for Musicians</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Goal</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            We developed a wearable and versatile '<strong>Metroband</strong>', a device which pulsates to a pre-set frequency to aid musicians in adhering to a constant tempo. This project seeks to mitigate the drawbacks of traditional audible metronomes and intrusive in-ear monitors.
                        </p>
                        <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Tactile feedback (Vibration) instead of Sound.</li>
                            <li>Wearable & Portable wristband form factor.</li>
                            <li>Custom PCB with tempo control.</li>
                        </ul>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Metroband Device"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Video Demo & Hardware */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Hardware & Demo</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Video Link Card */}
                    <div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '12px' }}>Product Demo</h6>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '16px' }}>
                            Watch the Metroband in action on YouTube.
                        </p>
                        <a
                            href="https://www.youtube.com/watch?v=N5GJq5FccDs"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'block', position: 'relative', borderRadius: '8px', overflow: 'hidden', border: '1px solid #334155', cursor: 'pointer' }}
                        >
                            <img
                                src={deviceImg}
                                alt="Watch Demo Video"
                                style={{ width: '100%', display: 'block', transition: 'transform 0.3s' }}
                            />
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'rgba(239, 68, 68, 0.9)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
                                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* PCB Design */}
                    <div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '12px' }}>Electronics Design</h6>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '16px' }}>
                            Compact PCB integration featuring microcontroller, vibration motor driver, and user interface buttons.
                        </p>
                        <img
                            src={pcbImg}
                            alt="Metroband PCB"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Metroband;
