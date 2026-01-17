import mainImg from "../../assets/Projects/GuitarPedal/main.png";
import pcbImg from "../../assets/Projects/GuitarPedal/pcb.jpg";

const GuitarPedal = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Analog Guitar Pedal Board</h3>
                <p>Multi-Effects Audio Processing Unit</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Goal</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            A versatile analog signal processing unit designed to shape the audio input from electric guitars, basses, or synthesizers.
                            This project implements a chain of classic analog audio effects on a single board, allowing for rich sonic customization.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Supported Effects</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Tone Control:</strong> Equalization and frequency shaping.</li>
                                <li><strong>Dynamics:</strong> Compression (sustain/leveling).</li>
                                <li><strong>Filter:</strong> Wah effect (spectral glide).</li>
                                <li><strong>Drive:</strong> Overdrive (Soft clip) & Distortion (Hard clip).</li>
                                <li><strong>Fuzz:</strong> Square-wave clipping for vintage grit.</li>
                                <li><strong>Modulation:</strong> Tremolo (amplitude modulation).</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Guitar Pedal Board"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Circuit Design */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Analog Circuit Design</h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>

                    <div>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            The system is built entirely using discrete analog components and OpAmps.
                            The PCB layout is optimized for low noise floor and minimal signal crosstalk between high-gain stages (Distortion/Fuzz) and modulation stages (Tremolo).
                        </p>
                        <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Low-noise OpAmp based gain stages.</li>
                            <li>True bypass switching.</li>
                            <li>Modular PCB design for easy debugging.</li>
                        </ul>
                    </div>

                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img
                            src={pcbImg}
                            alt="Guitar Pedal PCB"
                            style={{ width: '100%', borderRadius: '4px', marginBottom: '8px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#cbd5e1', textAlign: 'center' }}>
                            Internal PCB Layout
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default GuitarPedal;
