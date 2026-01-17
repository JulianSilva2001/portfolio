import mainImg from "../../assets/Projects/Battlebot/main.jpeg";
import competitionImg from "../../assets/Projects/Battlebot/competition.jpeg";
import rankingImg from "../../assets/Projects/Battlebot/7th_place_at_Battl_bot_competition.jpeg";

const Battlebot = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>MetroniX Battlebot</h3>
                <p>Combat Robot with Dynamic Lifting Mechanism</p>
            </div>

            {/* Overview & Main Visual */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            MetroniX is a combat robot engineered for the UWV Robot Battle 2024.
                            It features a robust 4-wheel drive system and a specialized active lifting mechanism designed to flip opponent bots.
                            Built with precision using SolidWorks for mechanical design and Altium for custom electronics.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Specifications</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Weapon System:</strong> High-torque lifting arm for flipping opponents.</li>
                                <li><strong>Drive Train:</strong> 4WD with </li>
                                <li><strong>Control:</strong> Custom RF Remote.</li>
                                <li><strong>Chassis:</strong> steel frame.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Metronix Battlebot"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>MetroniX Battlebot</p>
                    </div>
                </div>
            </div>

            {/* Competition Highlights */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Competition Performance</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Ranking */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={rankingImg} alt="7th Place Ranking" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        </div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Top 10 Finish</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Achieved 7th place overall in the highly competitive UWV Robot Battle 2024 against experienced teams.
                        </p>
                    </div>

                    {/* Action Shot */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={competitionImg} alt="Battlebot in Arena" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Arena Combat</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Demonstrated durability and offensive capability in the arena matches.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Battlebot;
