import mainImg from "../../assets/Projects/Dyslexia/main.jpg";
import trackingImg from "../../assets/Projects/Dyslexia/tracking_Hand_posture_and_word_pronouncitation.png";
import levelsImg from "../../assets/Projects/Dyslexia/different_stories_and_different_levels.png";
import presentedImg from "../../assets/Projects/Dyslexia/_presented_at_Brainstorm.jpeg";

const CrystalClear = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Crystal Clear - Dyslexia Learning aid</h3>
                <p>AI-Powered Learning Platform for Dyslexic Students</p>
            </div>

            {/* Overview & Core Tech */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Mission</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Crystal Clear is an interactive learning platform designed to assist dyslexic students.
                            It utilizes Computer Vision to monitor reading engagement by tracking hand movements (finger pointing) and analyzing mouth movements for correct pronunciation.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Capabilities</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Hand Tracking:</strong> Detects if the student is following the lines with their finger.</li>
                                <li><strong>Pronunciation Analysis:</strong> Tracks mouth movements and audio to verify correct reading.</li>
                                <li><strong>Gamified Levels:</strong> Interactive stories and levels to keep students engaged.</li>
                                <li><strong>Progress Monitoring:</strong> Provides feedback to parents and educators.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Crystal Clear Platform"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>Platform Interface</p>
                    </div>
                </div>
            </div>

            {/* AI Analysis & Engagement */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>AI-Driven Interaction</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Hand & Mouth Tracking */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={trackingImg} alt="Tracking Hand and Mouth" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Real-time Monitoring</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            The system uses CV to track finger position to ensure line-following and analyzes lip-sync/audio for pronunciation accuracy.
                        </p>
                    </div>

                    {/* Levels */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={levelsImg} alt="Interactive Stories" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Structured Learning</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Content is organized into different levels and stories, adapting to the student's progress and capabilities.
                        </p>
                    </div>

                </div>
            </div>

            {/* Recognition */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                    {/* Brainstorm Presentation */}
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recognition</h5>
                        <div style={{ display: 'flex', justifyContent: 'center', background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <img src={presentedImg} alt="Presented at Brainstorm" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
                            Presented at Brainstorm Competition.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default CrystalClear;
