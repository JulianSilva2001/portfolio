// Procedure Images (Orthodox)
import orthoWithering from "../../assets/Internship/Tea/Images/bakground research/Method 2/a_Withering.jpeg";
import orthoRolling from "../../assets/Internship/Tea/Images/bakground research/Method 2/b_Rolling.png";
import orthoSorting from "../../assets/Internship/Tea/Images/bakground research/Method 2/c_Sorting 1.jpeg";
import orthoFermenting from "../../assets/Internship/Tea/Images/bakground research/Method 2/d_Fermenting.jpeg";
import orthoDrying from "../../assets/Internship/Tea/Images/bakground research/Method 2/e_Drying.png";
import orthoColorGrading from "../../assets/Internship/Tea/Images/bakground research/Method 2/f_Colour Grading.jpeg";

// Data Augmentation

// Model Evaluation
import denseNetOutput from "../../assets/Internship/Tea/Images/Tea_classification_grade_and_quality/Densenet_output.png";
import dinoEmbedding3D from "../../assets/Internship/Tea/Images/Tea_classification_grade_and_quality/3d_feature_embedding_visualization..png";
import dinoQuality from "../../assets/Internship/Tea/Images/Tea_classification_grade_and_quality/DINO_for_quality_estimation_embedding_space.png";

// Regression
import actualVsPredicted from "../../assets/Internship/Tea/Images/Regression_task/actual_vs_predicted_by_lot.jpeg";

// Signature
import signaturePipeline from "../../assets/Internship/Tea/Images/Signature/Tea Image Vision LLM Model-2026-01-16-071629.png";

const TeaResearch = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Tea Quality Signature Generation</h3>
                <p>AI + Computer Vision</p>
            </div>
            <div className="timeline-subsection" style={{ background: 'transparent', border: 'none', padding: 0 }}>

                {/* Executive Summary */}
                <div style={{ background: 'rgba(15, 23, 42, 0.4)', borderRadius: '12px', padding: '20px', marginBottom: '32px', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
                    <h5 style={{ marginTop: 0, color: 'var(--accent)' }}>Project Executive Summary</h5>
                    <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        This research aims to digitize the tea grading process, reducing valuation time from <strong>3 weeks to minutes</strong>.
                        By analyzing visual features of tea samples using Advanced Computer Vision and Large Language Models, we developed an
                        <strong>Interpretable Digital Signature</strong> that correlates with expert tasters' valuations.
                    </p>

                    <div style={{ margin: '20px 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(148, 163, 184, 0.1)' }}>
                        <img
                            src={signaturePipeline}
                            alt="Project Visual Abstract"
                            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '300px', objectFit: 'cover', objectPosition: 'top' }}
                        />
                    </div>

                    <div style={{ overflowX: 'auto', marginTop: '16px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                    <td style={{ padding: '8px 0', color: 'var(--text-subtle)' }}>Classification</td>
                                    <td style={{ padding: '8px 0', fontWeight: 'bold' }}>100% Validation Accuracy (DenseNet)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                    <td style={{ padding: '8px 0', color: 'var(--text-subtle)' }}>Feature Extraction</td>
                                    <td style={{ padding: '8px 0', fontWeight: 'bold' }}>DINO (Self-Supervised) for robust embeddings</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                    <td style={{ padding: '8px 0', color: 'var(--text-subtle)' }}>Price Prediction</td>
                                    <td style={{ padding: '8px 0', fontWeight: 'bold' }}>94.6% Accuracy (Regression)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px 0', color: 'var(--text-subtle)' }}>GenAI</td>
                                    <td style={{ padding: '8px 0', fontWeight: 'bold' }}>Vision-LLM pipeline for quality reports</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="mini-divider" />

                <h5>1. Orthodox Manufacturing Process</h5>
                <p>
                    Understanding the traditional manufacturing steps was crucial for designing our data capture strategy.
                    Each stage significantly impacts the visual attributes of the final product.
                </p>

                <div className="experience-media-grid">
                    <div className="experience-media">
                        <img src={orthoWithering} alt="Step 1: Withering" />
                        <div className="process-content">
                            <h6>1. Withering</h6>
                            <p><strong>Method:</strong> Drying leaves to reduce moisture.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Determines Grade/Shape</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={orthoRolling} alt="Step 2: Rolling" />
                        <div className="process-content">
                            <h6>2. Rolling</h6>
                            <p><strong>Method:</strong> Twisting leaves to release enzymes.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Determines Grade/Shape</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={orthoSorting} alt="Step 3: Initial Sorting" />
                        <div className="process-content">
                            <h6>3. Initial Sorting</h6>
                            <p><strong>Method:</strong> Separating stalks and size.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Classification Baseline</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={orthoFermenting} alt="Step 4: Fermenting" />
                        <div className="process-content">
                            <h6>4. Fermenting</h6>
                            <p><strong>Method:</strong> Controlled oxidation.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Color (Black/Brown)</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={orthoDrying} alt="Step 5: Drying" />
                        <div className="process-content">
                            <h6>5. Drying</h6>
                            <p><strong>Method:</strong> Firing to stop fermentation.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Prevents Spoilage</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={orthoColorGrading} alt="Step 6: Grading" />
                        <div className="process-content">
                            <h6>6. Color Grading</h6>
                            <p><strong>Method:</strong> Optical sorting by color.</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Impact: Final Market Value</p>
                        </div>
                    </div>
                </div>



                <h5>2. Data Pipeline</h5>
                <p>
                    To handle the high variance in tea appearance, we implemented a rigorous data pipeline:
                </p>

                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Step</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Methodology</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Reasoning</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>Imaging</strong></td>
                                <td style={{ padding: '12px' }}>Tungsten-lit Lightbox</td>
                                <td style={{ padding: '12px' }}>Consistent color spectrum (Color Constancy).</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>Sampling</strong></td>
                                <td style={{ padding: '12px' }}>Algorithmic crop <code>min(H,W) &gt; 2r</code></td>
                                <td style={{ padding: '12px' }}>Generates 40+ samples per image for statistical robustness.</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px' }}><strong>Augmentation</strong></td>
                                <td style={{ padding: '12px' }}>Rotation, White-bg Removal</td>
                                <td style={{ padding: '12px' }}>Ensures model focuses on leaf texture, not orientation.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="mini-divider" />

                <h5>3. Model Evaluation: Classification & Embedding</h5>
                <p>
                    We compared multiple architectures to identify the best feature extractor for tea leaves.
                    Transfer learning with <strong>DenseNet</strong> proved most effective for pure classification, while <strong>DINO</strong> excelled at unsupervised clustering.
                </p>

                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Model</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Task</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Performance</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Key Insight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>DenseNet</strong></td>
                                <td style={{ padding: '12px' }}>Grade Classification</td>
                                <td style={{ padding: '12px' }}><strong>98.3% Val Acc</strong></td>
                                <td style={{ padding: '12px' }}>Unfreezing 5 layers was optimal.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>DINO</strong></td>
                                <td style={{ padding: '12px' }}>Self-Supervised</td>
                                <td style={{ padding: '12px' }}>Clear Clustering</td>
                                <td style={{ padding: '12px' }}>Distinguished feature clusters without any labels.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>Autoencoders</strong></td>
                                <td style={{ padding: '12px' }}>Dim. Reduction</td>
                                <td style={{ padding: '12px' }}>99.8% Retention</td>
                                <td style={{ padding: '12px' }}>Compressed features to 10 dims with high fidelity.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="experience-media-grid">
                    <div className="experience-media">
                        <img src={denseNetOutput} alt="DenseNet Predictions" />
                        <div className="process-content">
                            <h6>Classification Output</h6>
                            <p><strong>Model:</strong> DenseNet-121</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>High confidence on texture-based classes.</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={dinoEmbedding3D} alt="3D Embedding" />
                        <div className="process-content">
                            <h6>3D Feature Space</h6>
                            <p><strong>Model:</strong> DINO (ViT-S/8)</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Distinct clusters emerge unsupervised.</p>
                        </div>
                    </div>
                    <div className="experience-media">
                        <img src={dinoQuality} alt="Quality Clustering" />
                        <div className="process-content">
                            <h6>Quality Clustering</h6>
                            <p><strong>Insight:</strong> Price Proxy</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Clusters align with expert valuation.</p>
                        </div>
                    </div>
                </div>

                <hr className="mini-divider" />

                <h5>4. Regression for Value Prediction</h5>
                <p>
                    Beyond classification, we successfully predicted the <strong>exact sold price</strong> of tea lots.
                    Using <strong>Random Forest</strong> on DINO-extracted features and averaging predictions across samples in a lot, we achieved high reliability.
                </p>

                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.2)' }}>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Metric</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Value</th>
                                <th style={{ padding: '12px', color: 'var(--accent)' }}>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                                <td style={{ padding: '12px' }}><strong>Training Acc</strong></td>
                                <td style={{ padding: '12px' }}>97.90%</td>
                                <td style={{ padding: '12px' }}>At 100 Trees</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '12px' }}><strong>Validation Acc</strong></td>
                                <td style={{ padding: '12px' }}>94.65%</td>
                                <td style={{ padding: '12px' }}>Achieved using Lot Averaging technique.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="experience-media-grid">
                    <div className="experience-media">
                        <img src={actualVsPredicted} alt="Actual vs Predicted" />
                        <div className="process-content">
                            <h6>Actual vs Predicted Price</h6>
                            <p><strong>Method:</strong> Random Forest Regressor</p>
                            <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>High correlation (R² = 0.94) with Lot Averaging.</p>
                        </div>
                    </div>
                </div>

                <hr className="mini-divider" />

                <h5>5. Future: Interpretable Digital Signatures</h5>
                <p>
                    The final phase integrates these visual insights with an <strong>LLM</strong> (Large Language Model) to generate human-readable quality reports.
                    This "Digital Signature" combines the objective visual features extracted by the model with domain knowledge (grading standards, market trends).
                </p>

                <div className="experience-media-full">
                    <img src={signaturePipeline} alt="Tea Signature Generation Pipeline" />
                    <div className="process-content">
                        <h6>Vision-LLM Pipeline</h6>
                        <p><strong>Architecture:</strong> Vision Model + Knowledge Base + LLM</p>
                        <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '12px' }}>Synthesizes visual features into human-readable quality reports.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeaResearch;
