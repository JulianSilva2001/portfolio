import mainImg from "../../assets/Projects/PCB_company/main.jpg";

const PCBCompany = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>PCB Company Web Application</h3>
                <p>Enterprise Management System for PCB Manufacturing</p>
            </div>

            {/* Overview & Core Tech */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>System Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            This full-stack web application is designed to streamline the entire operational workflow of a PCB manufacturing company.
                            It integrates six distinct subsystems to manage everything from order intake to production and delivery, ensuring data consistency and efficiency across departments.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Technical Stack</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Frontend:</strong> React (Single Page Application)</li>
                                <li><strong>Backend:</strong> Java Spring Boot (REST API)</li>
                                <li><strong>Database:</strong> MongoDB (NoSQL for flexible schema)</li>
                                <li><strong>Architecture:</strong> Microservices-ready modular design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="PCB Company Dashboard"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>System Dashboard</p>
                    </div>
                </div>
            </div>

            {/* Functional Modules */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Subsystems</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#34d399', marginBottom: '8px' }}>Order Management</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Handles customer quotes, order tracking, and invoicing.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#f87171', marginBottom: '8px' }}>Inventory Control</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Tracks raw materials (copper, substrate) and stock levels in real-time.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Production Planning</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Schedules manufacturing batches and monitors machine utilization.
                        </p>
                    </div>

                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#fbbf24', marginBottom: '8px' }}>HR & Payroll</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Manages employee shifts, attendance, and salary processing.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default PCBCompany;
