
import appVideo from "../../assets/Projects/Sportsense/app_video.gif";
import batDetection from "../../assets/Projects/Sportsense/Detecting_sports_equipments(bat).png";
import ballDetection from "../../assets/Projects/Sportsense/YOLO_model_outputs_on_detecting_the_ball.png";
import poseCorrection from "../../assets/Projects/Sportsense/detecting_and_correcting_the_pose.png";
import idealizeImg from "../../assets/Projects/Sportsense/Idealize_2024_prepresenting (1).jpg";
import runnersUpImg from "../../assets/Projects/Sportsense/Runners_up.jpg";
import conceptualistImg from "../../assets/Projects/Sportsense/conceptualist award.jpg";

const Sportsense = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Sportsense - AI Sports Trainer</h3>
                <p>Personalized Real-Time Feedback using Edge AI</p>
            </div>

            {/* Overview & App Demo */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Value Proposition</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Sportsense is a customized sport and workout trainer app offering <strong>real-time feedback</strong> at a lower cost with vast adaptability.
                            Unlike generic fitness apps, it uses multimodal analysis to correct form instantly.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Features</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Live Feedback:</strong> Text-to-Speech API provides instant audio cues.</li>
                                <li><strong>Privacy First:</strong> All models run on-device (Edge AI).</li>
                                <li><strong>Gamification:</strong> Leaderboards to compete with others.</li>
                                <li><strong>Diverse Exercises:</strong> Multimodal sets for various sports.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={appVideo}
                            alt="Sportsense App Demo"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>App Interface in Action</p>
                    </div>
                </div>
            </div>

            {/* Awards & Achievements */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Competition Highlights</h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    <div>
                        <img src={idealizeImg} alt="Idealize 2024 Presentation" style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }} />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>Presenting at Idealize 2024</p>
                    </div>
                    <div>
                        <img src={runnersUpImg} alt="Runners Up Award" style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }} />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>1st Runners Up</p>
                    </div>
                    <div>
                        <img src={conceptualistImg} alt="Conceptualist Award" style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155', marginBottom: '8px' }} />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center' }}>Best Conceptualist Award</p>
                    </div>
                </div>
            </div>

            {/* Technical Deep Dive */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Architecture</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

                    {/* Model 1: Body Landmarks */}
                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', flexDirection: 'column' }}>
                        <h6 style={{ color: '#34d399', marginBottom: '12px' }}>1. Pose Estimation</h6>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', background: '#0f172a', borderRadius: '4px', padding: '8px' }}>
                            <img src={poseCorrection} alt="Pose Correction" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Integrated body landmark models identify joints and limbs to verify correct movement patterns and detect improper form.
                        </p>
                    </div>

                    {/* Model 2: Equipment Detection */}
                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#f87171', marginBottom: '12px' }}>2. Equipment Tracking</h6>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
                            <img src={batDetection} alt="Bat Detection" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
                            <img src={ballDetection} alt="Ball Detection" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Custom trained vision models specifically land-marked for sports equipment (bats, balls) to analyze technique.
                        </p>
                    </div>

                    {/* Model 3: Transition Logic */}
                    <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <h6 style={{ color: '#60a5fa', marginBottom: '12px' }}>3. Transition Analysis</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            A secondary model estimates the accuracy of movement transitions by fusing data from both equipment and body landmarks.
                        </p>
                        <h6 style={{ color: '#e2e8f0', marginTop: '16px', marginBottom: '8px', fontSize: '13px' }}>Audio Feedback</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Real-time corrections are delivered via TTS (Text-to-Speech) API ("Keep your arm straight", "Good shot").
                        </p>
                    </div>

                </div>
            </div>

            {/* Business Model */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <h5 style={{ color: '#e2e8f0', marginBottom: '16px', fontSize: '16px' }}>Business Model Canvas</h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                        <div>
                            <h6 style={{ color: '#94a3b8', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Customer Segments</h6>
                            <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', lineHeight: '1.6' }}>
                                <li>Sport Trainees (Beginners/Pros)</li>
                                <li>Gym Goers</li>
                                <li>Coaches (Hybrid training)</li>
                            </ul>
                        </div>
                        <div>
                            <h6 style={{ color: '#94a3b8', fontSize: '13px', textTransform: 'uppercase', marginBottom: '8px' }}>Key Relationships</h6>
                            <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', lineHeight: '1.6' }}>
                                <li>Community Forums</li>
                                <li>Co-Creation (User feedback loops)</li>
                                <li>Dedicated Customer Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Sportsense;
