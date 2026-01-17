import mainImg from "../../assets/Projects/SpeedObo/main.jpeg";
import pcb3d from "../../assets/Projects/SpeedObo/Final_PCB_design_3D_view.jpeg";
import pcbTop from "../../assets/Projects/SpeedObo/PCB_top.jpeg";
import pcbBottom from "../../assets/Projects/SpeedObo/PCB_bottom.jpeg";

const SpeedObo = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>SpeedObo - High-Precision Line Follower</h3>
                <p>Competitive Robotics Platform</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            <strong>SpeedObo</strong> is a high-speed, high-precision line follower robot engineered for competitive robotics.
                            Leveraging an STM32 microcontroller and custom-designed PCB, it implements advanced PID control algorithms to navigate complex tracks at top speeds while maintaining millimeter-level accuracy.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Specifications</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Controller:</strong> STM32 (High-performance ARM Cortex-M).</li>
                                <li><strong>Algorithms:</strong> Advanced PID for smooth path tracking.</li>
                                <li><strong>Electronics:</strong> Custom 2-layer PCB designed in Altium.</li>
                                <li><strong>Mechanical:</strong> Lightweight chassis modeled in SolidWorks.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="SpeedObo Robot"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Electronics Design Gallery */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Custom Electronics Design</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>

                    <div>
                        <img
                            src={pcb3d}
                            alt="PCB 3D View"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>Final 3D Render (Altium)</p>
                    </div>

                    <div>
                        <img
                            src={pcbTop}
                            alt="PCB Top Layer"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>Top Layer Routing</p>
                    </div>

                    <div>
                        <img
                            src={pcbBottom}
                            alt="PCB Bottom Layer"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>Bottom Layer Routing</p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default SpeedObo;
