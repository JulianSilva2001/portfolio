import mainImg from "../../assets/Projects/Xplore/main.jpg";
import aiRouteImg from "../../assets/Projects/Xplore/AI_route_suggestions.png";
import communityImg from "../../assets/Projects/Xplore/Exploring other Travellers.png";
import mapImg from "../../assets/Projects/Xplore/ai_reccomended_iteneries_on_map.png";
import expoImg from "../../assets/Projects/Xplore/presenting_xplore_at_A_Expo.jpeg";

const Xplore = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Xplore - Smart Travel Companion</h3>
                <p>AI-Powered Route Recommendations & Community Sharing</p>
            </div>

            {/* Overview & Core Features */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Vision</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Xplore is a comprehensive travel application that tracks user routes and enables them to publish their journeys.
                            Leveraging AI, it provides personalized itinerary recommendations by analyzing user requirements, historical data from other travelers, and our curated database.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Key Capabilities</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Route Tracking:</strong> Real-time logging of travel paths for personal history or sharing.</li>
                                <li><strong>AI Recommendations:</strong> Generates tailored routes based on user preferences.</li>
                                <li><strong>Community Hub:</strong> Explore and follow routes published by other travelers.</li>
                                <li><strong>Interactive Maps:</strong> Visualizes itineraries directly on the map interface.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Xplore Layout"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>App Interface</p>
                    </div>
                </div>
            </div>

            {/* AI Recommendation Engine */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>AI-Driven Planning</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>

                    {/* Map Visualization */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={mapImg} alt="AI Recommended Routes on Map" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Visual Itineraries</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            Routes are plotted visually, allowing users to understand the geographical flow of their trip.
                        </p>
                    </div>

                    {/* Suggestions List */}
                    <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <img src={aiRouteImg} alt="AI Route Suggestions" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px' }} />
                        <h6 style={{ color: '#e2e8f0', marginBottom: '4px' }}>Tailored Suggestions</h6>
                        <p style={{ fontSize: '13px', color: '#cbd5e1' }}>
                            The engine suggests optimal routes (e.g., fastest, most scenic) based on specific user inputs and community data.
                        </p>
                    </div>

                </div>
            </div>

            {/* Community & Recognition */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                    {/* Community */}
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Community Feed</h5>
                        <div style={{ display: 'flex', justifyContent: 'center', background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <img src={communityImg} alt="Exploring Community" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
                            Browse routes from other travelers to find inspiration for your next adventure.
                        </p>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Achievements</h5>
                        <div style={{ display: 'flex', justifyContent: 'center', background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <img src={expoImg} alt="Presenting Xplore at Expo" style={{ maxHeight: '300px', width: 'auto', maxWidth: '100%', borderRadius: '4px' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '8px' }}>
                            Presenting Xplore at A Expo.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Xplore;
