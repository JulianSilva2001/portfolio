import mainImg from "../../assets/Projects/EKF_SLAM/main.png";
import fullFlowImg from "../../assets/Projects/EKF_SLAM/Ful_flow.png";
import mapBuilding1 from "../../assets/Projects/EKF_SLAM/map_building_1.png";
import mapBuilding3 from "../../assets/Projects/EKF_SLAM/map_building_3.png";

const EkfSlam = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>EKF SLAM in ROS</h3>
                <p>Simultaneous Localization and Mapping for Mobile Robots using Extended Kalman Filter</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            Designed and implemented a SLAM system for a TurtleBot3 in an unknown environment. The core objective was to fuse <strong>noisy wheel odometry</strong> with <strong>sparse LiDAR observations</strong> to estimate the robot's pose and build a feature-based map of cylindrical landmarks.
                        </p>
                        <ul style={{ fontSize: '14px', color: '#94a3b8', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Continuous Prediction-Correction loop.</li>
                            <li>Geometric feature extraction pipeline.</li>
                            <li>Robust handling of sensor noise.</li>
                        </ul>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="EKF SLAM Trajectory"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <div className="process-content">
                            <h6>Trajectory Comparison</h6>
                            <p>EKF-SLAM (Green) vs. Drifting Odometry.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Architecture */}
            <div style={{ marginBottom: '56px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>System Architecture & Flow</h5>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '24px' }}>
                    The system generally follows the standard EKF loop: State Prediction based on motion, Feature Extraction from LiDAR, and Correction based on observations.
                </p>
                <div className="experience-media-full">
                    <img
                        src={fullFlowImg}
                        alt="EKF SLAM Flowchart"
                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                    />
                </div>
            </div>

            {/* Core Steps Breakdown */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>The EKF Process</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>

                    {/* Step 1 & 2: State & Prediction */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>1. State & Prediction</h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '16px' }}>
                            The state vector <strong>&mu;<sub>t</sub></strong> contains the robot pose (x, y, &theta;) and N landmarks.
                        </p>
                        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                            &mu;<sub>t</sub> = [x<sub>t</sub>, y<sub>t</sub>, &theta;<sub>t</sub>, m<sub>x,1</sub>...m<sub>y,N</sub>]<sup>T</sup>
                        </div>
                        <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                            <strong>Motion Model:</strong> Propagates pose using velocity inputs. Covariance <strong>&Sigma;<sub>t</sub></strong> is updated using the linearized Jacobian G<sub>t</sub>.
                        </p>
                    </div>

                    {/* Step 3: Perception */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#34d399', marginBottom: '8px' }}>2. Perception (Feature Extraction)</h6>
                        </div>
                        <img src={mapBuilding1} alt="Feature Extraction" style={{ width: '100%', marginBottom: '12px', borderRadius: '4px' }} />
                        <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', margin: 0, lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Clustering:</strong> Groups LiDAR points based on Euclidean distance.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Geometric Filtering:</strong> Rejects walls; retains only pole-like cylindrical features.</li>
                            <li><strong>Output:</strong> Range-bearing measurements z<sub>t</sub> = [r, &phi;]<sup>T</sup>.</li>
                        </ul>
                    </div>

                    {/* Step 4 & 5: Correction & Data Association */}
                    <div style={{ background: '#1e293b', padding: '24px', borderRadius: '8px', border: '1px solid #334155' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <h6 style={{ color: '#f87171', marginBottom: '8px' }}>3. Correction & Association</h6>
                        </div>
                        <img src={mapBuilding3} alt="Data Association" style={{ width: '100%', marginBottom: '12px', borderRadius: '4px' }} />
                        <ul style={{ fontSize: '14px', color: '#cbd5e1', paddingLeft: '16px', margin: 0, lineHeight: '1.6' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Data Association:</strong> Uses Mahalanobis distance to match observations to known landmarks (Gating).</li>
                            <li style={{ marginBottom: '8px' }}><strong>Kalman Gain (K<sub>t</sub>):</strong> Weights the innovation (observation - prediction).</li>
                            <li><strong>Update:</strong> Corrects the state &mu;<sub>t</sub> and reduces uncertainty &Sigma;<sub>t</sub>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Challenges & Solution */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ background: 'rgba(96, 165, 250, 0.05)', padding: '32px', borderRadius: '8px', border: '1px solid rgba(96, 165, 250, 0.2)' }}>
                    <h5 style={{ color: '#60a5fa', marginBottom: '16px', fontSize: '18px' }}>Key Challenge: False Positive Landmarks</h5>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        <div>
                            <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>The Problem</h6>
                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1' }}>
                                Early iterations identified planar walls as cylindrical landmarks, creating non-existent "landmark rings" and destabilizing the filter due to poor observability of wall segments.
                            </p>
                        </div>
                        <div>
                            <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>The Solution</h6>
                            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1' }}>
                                Implemented a strict <strong>Geometric Constraint Pipeline</strong> that validates cluster variance. This ensures only locally isotropic objects (cylinders) are added to the state map.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default EkfSlam;
