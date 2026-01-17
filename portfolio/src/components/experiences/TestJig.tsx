import internshipTestJigAppImg from "../../assets/Internship/TestJig/app.png";
import internshipTestJigRelayImg from "../../assets/Internship/TestJig/relayMatrix.png";
import internshipTestJigBoardImg from "../../assets/Internship/TestJig/testJig.png";
import internshipTestJigSchematic1 from "../../assets/Internship/TestJig/schematic_01.png";
import internshipTestJigSchematic2 from "../../assets/Internship/TestJig/schematic_02.png";
import internshipTestJigSchematic3 from "../../assets/Internship/TestJig/schematic_03.png";

const TestJig = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Industrial Test Jig System</h3>
                <p>Hardware + Software Integration</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '32px' }}>
                    Developed a comprehensive automated testing ecosystem to validate production PCBs.
                    The system integrates a full-stack web interface with custom hardware to perform rigid diagnostic workflows.
                </p>

                {/* Software Section */}
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Software Control System</h5>

                <div className="experience-media-full" style={{ marginBottom: '24px' }}>
                    <img
                        src={internshipTestJigAppImg}
                        alt="Test jig application UI"
                    />
                    <div className="process-content">
                        <h6>Test App UI</h6>
                        <p><strong>Stack:</strong> React + Node.js</p>
                        <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Full-stack automated testing interface for operator control.</p>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #475569', color: '#e2e8f0' }}>
                                <th style={{ padding: '8px', width: '30%' }}>Component</th>
                                <th style={{ padding: '8px' }}>Implementation Detail</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#94a3b8' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Web Interface</td>
                                <td style={{ padding: '8px' }}>React Dashboard for real-time status and control</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Backend Logic</td>
                                <td style={{ padding: '8px' }}>Node.js server handling serial communication queues</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Hardware Section */}
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>2. Hardware Validation</h5>

                <div className="experience-media-full" style={{ marginBottom: '24px' }}>
                    <img
                        src={internshipTestJigBoardImg}
                        alt="The Relay Matrix and Current and Voltage measuring PCB Connections"
                    />
                    <div className="process-content">
                        <h6>Hardware Integration</h6>
                        <p><strong>Setup:</strong> Relay Matrix + Measurement PCB</p>
                        <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Connections for precise current and voltage measurement.</p>
                    </div>
                </div>

                <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #475569', color: '#e2e8f0' }}>
                                <th style={{ padding: '8px', width: '30%' }}>Target Device</th>
                                <th style={{ padding: '8px' }}>Validated Coverage</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#94a3b8' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Key-Fob Unit</td>
                                <td style={{ padding: '8px' }}>RGB LED, EEPROM, Microcontroller, Battery Voltage, Idle Power, Buttons</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '8px', color: '#e2e8f0' }}>Receiver Unit</td>
                                <td style={{ padding: '8px' }}>Power Supplies, RGB LED, Learn/Reset Switches, Logic Inputs, Config Switches, Fuses</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Schematics Section */}
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>3. DC Switch Matrix Design</h5>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px' }}>
                    Custom PCB designs for signal routing and power management using Relay Matrices.
                </p>

                <div className="experience-media-grid">
                    <div className="experience-media">
                        <img src={internshipTestJigSchematic1} alt="Schematic Part 1" />
                        <div className="process-content">
                            <h6>Power Regulators</h6>
                            <p style={{ fontSize: '12px' }}>Voltage Regulation Circuitry</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={internshipTestJigSchematic2} alt="Schematic Part 2" />
                        <div className="process-content">
                            <h6>Relay Logic</h6>
                            <p style={{ fontSize: '12px' }}>Signal Switching Network</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={internshipTestJigSchematic3} alt="Schematic Part 3" />
                        <div className="process-content">
                            <h6>Microcontroller IO</h6>
                            <p style={{ fontSize: '12px' }}>Digital Control Interface</p>
                        </div>
                    </div>
                </div>
                <div className="experience-media-full" style={{ marginTop: '16px' }}>
                    <img
                        src={internshipTestJigRelayImg}
                        alt="Relay matrix wiring"
                    />
                    <div className="process-content">
                        <h6>Physical Implementation</h6>
                        <p><strong>Hardware:</strong> Assembled Relay Matrix</p>
                        <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Real-world realization of the switch matrix schematics.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestJig;
