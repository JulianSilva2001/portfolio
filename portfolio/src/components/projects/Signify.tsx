
import liveTranslationGif from "../../assets/Projects/Signify/Live_translation_to_sign_language.gif";
import avatarImg from "../../assets/Projects/Signify/Customized_avatar.png";
import unityDesignImg from "../../assets/Projects/Signify/desgining_on_unity.png";
import championsImg from "../../assets/Projects/Signify/Champions_VR_Cade_2025.jpg";
import presentingImg from "../../assets/Projects/Signify/Presenting_the_product.jpg";

const Signify = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Signify - AR Speech-to-Sign Assistant</h3>
                <p>Bridging the Gap for Hearing-Impaired Individuals via AR Glasses</p>
            </div>

            {/* Overview & Live Demo */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Mission</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Signify is an Augmented Reality (AR) application designed for smart glasses that translates spoken language into sign language in real-time.
                            It empowers hearing-impaired users to communicate effortlessly in daily conversations without relying on human interpreters.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Core Features</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Voice Recognition:</strong> Instantly detects and transcribes the speaker's voice.</li>
                                <li><strong>Real-Time Translation:</strong> Converts text to accurate sign language gestures.</li>
                                <li><strong>Interpreter Buddy:</strong> A 3D avatar that acts as your personal sign language interpreter.</li>
                                <li><strong>Personalized AR:</strong> Customize the assistant's appearance and hand gestures.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={liveTranslationGif}
                            alt="Live Translation to Sign Language"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>Live AR Translation Demo</p>
                    </div>
                </div>
            </div>

            {/* Awards & Achievements */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Competition Highlights</h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    <div>
                        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', justifyContent: 'center' }}>
                            <img src={presentingImg} alt="Presenting Signify" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>Presenting at VR Cade 2025</p>
                    </div>
                    <div>
                        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', justifyContent: 'center' }}>
                            <img src={championsImg} alt="VR Cade Champions" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>Champions - VR Cade 2025</p>
                    </div>
                </div>
            </div>

            {/* Technical Implementation */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Architecture</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Unity Design */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={unityDesignImg} alt="Designing on Unity" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Unity Engine Development</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            The application is built on Unity, managing the 3D rendering of the avatar and integrating with AR SDKs for glasses.
                        </p>
                    </div>

                    {/* Customized Avatar */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={avatarImg} alt="Customized Avatar" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        </div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Customizable Interpreter</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Users can personalize their "Interpreter Buddy" to suit their preferences, making the experience more engaging and comfortable.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Signify;
