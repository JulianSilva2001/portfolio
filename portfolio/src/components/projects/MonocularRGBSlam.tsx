import mainImg from "../../assets/Projects/SLAM/main.png";
import pipelineImg from "../../assets/Projects/SLAM/Full pipleine.png";
import renderLossImg from "../../assets/Projects/SLAM/Render_loss.png";
import uncertaintyLossImg from "../../assets/Projects/SLAM/Uncertainty_loss.png";
import optimizationEqImg from "../../assets/Projects/SLAM/optimization_euqation.png";

const MonocularRGBSlam = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Monocular RGB SLAM in Dynamic Environments</h3>
                <p>Robust 3D Mapping and Pose Tracking using Uncertainty-Aware Gaussian Splatting</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Motivation & Problem</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Most SLAM systems assume a <strong>static world</strong>. When moving objects (people, cars) are present, traditional methods fail, leading to <strong>pose drift</strong> and "ghosting" artifacts in the map.
                        </p>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#60a5fa', marginBottom: '16px' }}>
                            <strong>Our Goal:</strong> Build a clean 3D Gaussian Splatting (3DGS) map of <em>only</em> the static scene using a monocular camera, even in the wild.
                        </p>
                        <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Robust to dynamic movers.</li>
                            <li>High-quality real-time rendering.</li>
                            <li>Monocular RGB input (no depth sensor required).</li>
                        </ul>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="SLAM Result Visual"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>
                </div>
            </div>

            {/* Overall Pipeline */}
            <div style={{ marginBottom: '56px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>System Architecture</h5>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '24px' }}>
                    Our pipeline integrates three core blocks: <strong>Uncertainty Estimation</strong>, <strong>Pose Tracking</strong>, and <strong>Mapping</strong>.
                    The uncertainty map filters out dynamic regions, allowing the tracker and mapper to focus on static geometry.
                </p>
                <div className="experience-media-full">
                    <img
                        src={pipelineImg}
                        alt="Full SLAM Pipeline Architecture"
                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                    />
                    <div className="process-content">
                        <h6>Pipeline Flow</h6>
                        <p>Input Frames &rarr; DINOv2 Feature Extraction &rarr; Uncertainty Prediction &rarr; Weighted Pose Optimization &rarr; 3DGS Mapping</p>
                    </div>
                </div>
            </div>

            {/* The 3 Main Blocks */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>The 3 Core Blocks</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                    {/* Block 1: Uncertainty Estimation */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>1. Uncertainty Estimation</h6>
                            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Detecting what to ignore.</p>
                        </div>
                        <img src={uncertaintyLossImg} alt="Uncertainty Loss Equation" style={{ width: '100%', marginBottom: '16px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', padding: '8px' }} />
                        <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', margin: 0, lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>DINOv2 Features:</strong> Extracts semantic-rich features F<sub>i</sub> from frames.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Shallow MLP:</strong> Predicts per-pixel uncertainty map &beta;<sub>i</sub>.</li>
                            <li><strong>Role:</strong> Down-weights dynamic/unreliable pixels in downstream tasks.</li>
                        </ul>
                    </div>

                    {/* Block 2: Pose Tracking */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#34d399', marginBottom: '8px' }}>2. Pose Tracking</h6>
                            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Robust trajectory estimation.</p>
                        </div>
                        <img src={optimizationEqImg} alt="Optimization Equation" style={{ width: '100%', marginBottom: '16px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', padding: '8px' }} />
                        <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', margin: 0, lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Based on DROID-SLAM:</strong> Uses ConvGRU optical flow + Dense Bundle Adjustment (DBA).</li>
                            <li style={{ marginBottom: '8px' }}><strong>Weighted Optimization:</strong> Reduces the influence of dynamic regions using &beta;<sub>i</sub>.</li>
                            <li><strong>Metric Depth Prior:</strong> Stabilizes tracking in early frames.</li>
                        </ul>
                    </div>

                    {/* Block 3: Mapping */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#f87171', marginBottom: '8px' }}>3. Mapping (3DGS)</h6>
                            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Static scene reconstruction.</p>
                        </div>
                        <img src={renderLossImg} alt="Render Loss" style={{ width: '100%', marginBottom: '16px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', padding: '8px' }} />
                        <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', margin: 0, lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Representation:</strong> Static scene modeled as 3D Gaussians G = {'{'} &mu;, &Sigma;, c, o {'}'}.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Uncertainty-Aware:</strong> Rendering loss is weighted by uncertainty to ignore transients.</li>
                            <li><strong>Result:</strong> Clean background map without "ghost" trails of moving objects.</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Technical Detail Table */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Component Breakdown</h5>
                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #334155' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead style={{ background: '#1e293b' }}>
                            <tr>
                                <th style={{ padding: '12px 16px', color: '#e2e8f0', width: '25%' }}>Module</th>
                                <th style={{ padding: '12px 16px', color: '#60a5fa', width: '35%' }}>Method / Tool</th>
                                <th style={{ padding: '12px 16px', color: '#94a3b8', width: '40%' }}>Function</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#cbd5e1' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Feature Extraction</td>
                                <td style={{ padding: '12px 16px' }}>DINOv2 (Fine-tuned)</td>
                                <td style={{ padding: '12px 16px' }}>Extracts high-level semantic features from RGB frames.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Tracking Core</td>
                                <td style={{ padding: '12px 16px' }}>DROID-SLAM (ConvGRU)</td>
                                <td style={{ padding: '12px 16px' }}>Predicts optical flow and keyframe poses.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Mapping Core</td>
                                <td style={{ padding: '12px 16px' }}>3D Gaussian Splatting</td>
                                <td style={{ padding: '12px 16px' }}>Represents scene as explicit 3D primitives for fast rendering.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Dynamic Handling</td>
                                <td style={{ padding: '12px 16px' }}>Uncertainty Map (&beta;)</td>
                                <td style={{ padding: '12px 16px' }}>Weights loss functions to mask out moving objects.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default MonocularRGBSlam;
