import mainImg from "../../assets/Projects/PMF_Analyzer/main.png";
import insightsImg from "../../assets/Projects/PMF_Analyzer/Key_insights.jpg";
import blockersImg from "../../assets/Projects/PMF_Analyzer/Critical_product_blockers.jpg";

const PMFAnalyzer = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>PMF Analysis Agent</h3>
                <p>AI-Driven Product-Market Fit Analyzer for SaaS</p>
            </div>

            {/* Overview & Dashboard */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            A specialized agent designed for SaaS products to quantify and accelerate Product-Market Fit.
                            It aggregates quantitative data (Mixpanel) and qualitative feedback (Reddit, social forums) to provide actionable improvement roadmaps.
                        </p>
                        <div style={{ background: '#1e293b', padding: '16px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Core Capabilities</h6>
                            <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                                <li><strong>Metric Tracking:</strong> Page visits, traffic sources, heatmaps, and conversion funnels.</li>
                                <li><strong>Sentiment Analysis:</strong> Correlates Reddit feedback with usage data to find root causes.</li>
                                <li><strong>Bottleneck Detection:</strong> Identifies drop-off points in the user journey.</li>
                                <li><strong>Actionable Insights:</strong> Prioritizes features based on impact calculation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="PMF Analyzer Dashboard"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '8px' }}>Main Dashboard Interface</p>
                    </div>
                </div>
            </div>

            {/* Insights & Blockers Gallery */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Analysis Output</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                    {/* Insights */}
                    <div>
                        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155', marginBottom: '16px' }}>
                            <img src={insightsImg} alt="Key Insights" style={{ width: '100%', borderRadius: '4px' }} />
                        </div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>Key Insights Generation</h6>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            The agent synthesizes complex data into clear, numbered insights, highlighting what to improve and estimating the potential impact on PMF score.
                        </p>
                    </div>

                    {/* Blockers */}
                    <div>
                        <div style={{ background: '#1e293b', padding: '12px', borderRadius: '8px', border: '1px solid #334155', marginBottom: '16px' }}>
                            <img src={blockersImg} alt="Critical Blockers" style={{ width: '100%', borderRadius: '4px' }} />
                        </div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>Critical Blocker Identification</h6>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            Visualizes high-severity issues (blockers) affecting user retention and conversion, allowing teams to focus on the "burning fires" first.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default PMFAnalyzer;
