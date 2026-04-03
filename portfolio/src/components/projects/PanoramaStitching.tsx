import mainImg from "../../assets/Projects/Panorama/main.png";
import superglueArchImg from "../../assets/Projects/Panorama/Superglue.jpg";
import recursionGif from "../../assets/Projects/Panorama/Using recursion to stitch new images to the Current Image.gif";
// import comparisonGif from "../../assets/Projects/Panorama/Using recursion to stitch new images to the Current Image after comparing the matches with each other.gif"; // Optional if needed relative to layout

const PanoramaStitching = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Panorama Stitching with Feature Matching (GNN)</h3>
                <p>Creating seamless panoramic images using Graph Neural Networks and Homography Estimation</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <div>
                        <h5 style={{ borderBottom: '1px solid #d0d0d0', paddingBottom: '8px', marginBottom: '16px', color: '#5f5f5f', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Overview</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444444', marginBottom: '16px' }}>
                            We developed a robust pipeline to generate high-resolution panoramic images by stitching multiple overlapping photos.
                            Leveraging <strong>SuperGlue</strong>, a Graph Neural Network (GNN) based matcher, the system achieves precise keypoint correspondence even in challenging conditions with occlusions or viewpoint changes.
                        </p>
                        <ul style={{ fontSize: '14px', color: '#5f5f5f', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>state-of-the-art feature matching.</li>
                            <li>Robust outlier rejection (RANSAC).</li>
                            <li>Usage of Affine Transformations for alignment.</li>
                        </ul>
                    </div>
                    <div className="experience-media-full">
                        <img
                            src={mainImg}
                            alt="Final Stitched Panorama Prediction"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #d0d0d0' }}
                        />
                        <div className="process-content">
                            <h6>Feature Matching</h6>
                            <p>Key points matching using SuperGlue</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Workflow Cards */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #d0d0d0', paddingBottom: '8px', marginBottom: '24px', color: '#5f5f5f', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Workflow</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>

                    {/* Step 1: Feature Extraction */}
                    <div style={{ background: '#f7f7f7', padding: '24px', borderRadius: '8px', border: '1px solid #d0d0d0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#ededed', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b2b2b', fontWeight: 'bold', marginRight: '12px', border: '1px solid #d0d0d0' }}>1</div>
                            <h6 style={{ margin: 0, color: '#1a1a1a' }}>Feature Extraction</h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6' }}>
                            Uses <strong>SuperPoint</strong> (via SuperGlue) to detect interest points and compute descriptors across all source images.
                        </p>
                    </div>

                    {/* Step 2: Feature Matching */}
                    <div style={{ background: '#f7f7f7', padding: '24px', borderRadius: '8px', border: '1px solid #d0d0d0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#ededed', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b2b2b', fontWeight: 'bold', marginRight: '12px', border: '1px solid #d0d0d0' }}>2</div>
                            <h6 style={{ margin: 0, color: '#1a1a1a' }}>Feature Matching</h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6' }}>
                            <strong>SuperGlue</strong> matches descriptors using attentional GNNs, handling occlusions and lighting variations better than traditional heuristics.
                        </p>
                    </div>

                    {/* Step 3: Affine Transformation */}
                    <div style={{ background: '#f7f7f7', padding: '24px', borderRadius: '8px', border: '1px solid #d0d0d0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#ededed', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b2b2b', fontWeight: 'bold', marginRight: '12px', border: '1px solid #d0d0d0' }}>3</div>
                            <h6 style={{ margin: 0, color: '#1a1a1a' }}>Transformation (Homography)</h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6' }}>
                            Computes the <strong>Affine Transformation Matrix</strong> (using RANSAC for outlier rejection) to map points from the source to the target plane.
                        </p>
                    </div>

                    {/* Step 4: Stitching */}
                    <div style={{ background: '#f7f7f7', padding: '24px', borderRadius: '8px', border: '1px solid #d0d0d0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#ededed', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2b2b2b', fontWeight: 'bold', marginRight: '12px', border: '1px solid #d0d0d0' }}>4</div>
                            <h6 style={{ margin: 0, color: '#1a1a1a' }}>Image Stitching</h6>
                        </div>
                        <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6' }}>
                            Warps images based on the calculated matrix and blends them recursively to form the final high-res panorama.
                        </p>
                    </div>
                </div>
            </div>

            {/* Deep Dive: Why SuperGlue? */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #d0d0d0', paddingBottom: '8px', marginBottom: '24px', color: '#5f5f5f', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Deep Dive</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'start' }}>
                    <div>
                        <h6 style={{ color: '#1a1a1a', marginBottom: '12px' }}>Why SuperGlue?</h6>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444444', marginBottom: '20px' }}>
                            Traditional descriptors (SIFT/ORB) often fail with repetitive textures or extreme viewpoint changes. SuperGlue approaches matching as a <strong>learnable graph assignment problem</strong>.
                        </p>

                        <img
                            src={superglueArchImg}
                            alt="SuperGlue Architecture"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #d0d0d0', marginBottom: '20px' }}
                        />

                        <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #d0d0d0' }}>
                            <h6 style={{ fontSize: '14px', color: '#2f2f2f', marginBottom: '8px' }}>Feature Matching Logic</h6>
                            <ul style={{ fontSize: '13px', color: '#444444', paddingLeft: '16px', margin: 0, lineHeight: '1.7' }}>
                                <li><strong>Context Awareness:</strong> GNNs aggregates information from all keypoints (unlike nearest-neighbor).</li>
                                <li><strong>Occlusion Handling:</strong> Explicitly models unmatched points ("dustbin" mechanism).</li>
                                <li><strong>Differentiation:</strong> Fully differentiable pipeline allowing end-to-end training.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h6 style={{ color: '#1a1a1a', marginBottom: '12px' }}>Robust Estimation (RANSAC)</h6>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444444', marginBottom: '20px' }}>
                            Even with good matches, outliers exist. We use <strong>RANSAC (Random Sample Consensus)</strong> to fit the optimal transformation model.
                        </p>
                        <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px', border: '1px solid #d0d0d0' }}>
                            <h6 style={{ fontSize: '14px', color: '#2f2f2f', marginBottom: '8px' }}>The RANSAC Process</h6>
                            <ol style={{ fontSize: '13px', color: '#444444', paddingLeft: '16px', margin: 0, lineHeight: '1.7' }}>
                                <li><strong>Sample:</strong> Randomly select a minimal subset of keypoint pairs.</li>
                                <li><strong>Model:</strong> Compute the hypothetical homography matrix.</li>
                                <li><strong>Verify:</strong> Count "inliers" (points that fit the model within a threshold).</li>
                                <li><strong>Iterate:</strong> Repeat to find the model with the most inliers.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sequence Stitching Demo */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #d0d0d0', paddingBottom: '8px', marginBottom: '24px', color: '#5f5f5f', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recursive Stitching Process</h5>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444444', marginBottom: '24px' }}>
                    The system processes images sequentially. Each new image is registered against the current "canvas" (accumulated panorama) &rarr; Features are matched &rarr; Homography calculated &rarr; Image warped and blended.
                </p>

                <div className="experience-media-full">
                    <img
                        src={recursionGif}
                        alt="Recursive Stitching Animation"
                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #d0d0d0' }}
                    />
                    <div className="process-content">
                        <h6>Dynamic Recursive Stitching</h6>
                        <p>Real-time visualization of adding new frames to the expanding panorama.</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PanoramaStitching;
