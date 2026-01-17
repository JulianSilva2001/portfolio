import systemArchImg from "../../assets/Projects/EEG_Fusion/system_architecture.png";
import discriminativePipelineImg from "../../assets/Projects/EEG_Fusion/Disciminative_pipline_full.png";
import hierarchicalFusionImg from "../../assets/Projects/EEG_Fusion/H_Fuision_in_discriminative.png";
import generativePipelineImg from "../../assets/Projects/EEG_Fusion/Generative_pipline.png";
import eegEncoderImg from "../../assets/Projects/EEG_Fusion/UDIT_Block_generative_pipline (1).png"; // Assuming (1) is EEG Encoder
import uditBlockImg from "../../assets/Projects/EEG_Fusion/UDIT_Block_generative_pipline (2).png";   // Assuming (2) is uDiT

const NeurosteeredSpeaker = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Neurosteered Target Speaker Extraction</h3>
                <p>Decoding Neural Attention for Multi-Speaker Audio Separation</p>
            </div>

            {/* Overview Section */}
            <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 600px' }}>
                        <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '16px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Project Approach</h5>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '16px' }}>
                            We developed a robust system to isolate a target speaker's voice in a multi-talker environment using neural feedback. Our approach employs a <strong>dual-pipeline strategy</strong> integrating discriminative and generative modeling.
                        </p>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1' }}>
                            By fusing EEG signals (temporal convolutional networks) with advanced acoustic features (Wav2vec 2.0), the system decodes the user's auditory attention. This hierarchical multi-modal alignment captures both low-level sensory responses and high-level cognitive intent.
                        </p>
                    </div>
                </div>
            </div>

            {/* Architecture Section */}
            <div style={{ marginBottom: '48px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>System Architecture</h5>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', alignItems: 'center' }}>
                    <img
                        src={systemArchImg}
                        alt="Neurosteered System Architecture Diagram"
                        style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                    />
                    <div>
                        <h6 style={{ color: '#e2e8f0', marginBottom: '12px' }}>Dual-Path Pipeline</h6>
                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '12px' }}>
                            <strong>Input:</strong> Multi-speaker audio mix + EEG signals.
                        </p>
                        <p style={{ fontStyle: 'italic', fontSize: '13px', color: '#94a3b8' }}>
                            Combines Audio Enzyme and EEG Encoder through a Fusion layer for decoding.
                        </p>
                    </div>
                </div>
            </div>

            {/* Methodology Comparison Table */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Methodology Comparison</h5>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
                    Comparison of the two parallel paths implemented to ensure robustness across varying conditions:
                </p>

                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #334155' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead style={{ background: '#1e293b' }}>
                            <tr>
                                <th style={{ padding: '12px 16px', color: '#e2e8f0', width: '20%' }}>Feature</th>
                                <th style={{ padding: '12px 16px', color: '#60a5fa', width: '40%' }}>Discriminative Path (Extraction)</th>
                                <th style={{ padding: '12px 16px', color: '#34d399', width: '40%' }}>Generative Path (Reconstruction)</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#cbd5e1' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Core Mechanism</td>
                                <td style={{ padding: '12px 16px' }}><strong>Masking:</strong> Predicts a spectral mask to suppress noise.</td>
                                <td style={{ padding: '12px 16px' }}><strong>Synthesis:</strong> Reconstructs speech waveform from scratch using neural priors.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Primary Benefit</td>
                                <td style={{ padding: '12px 16px' }}>High speed, low latency (Real-time ready).</td>
                                <td style={{ padding: '12px 16px' }}>Robust to noise, high audio fidelity.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Signal Quality</td>
                                <td style={{ padding: '12px 16px' }}>Preserves authentic acoustic features.</td>
                                <td style={{ padding: '12px 16px' }}>Smoother, more natural sounding output.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Data Efficiency</td>
                                <td style={{ padding: '12px 16px' }}>Works well with smaller EEG datasets.</td>
                                <td style={{ padding: '12px 16px' }}>Handles missing neural info via generative priors.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Detailed Network Architecture Section */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '24px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Detailed Network Architecture</h5>

                {/* 3.4.1 Discriminative Method */}
                <div style={{ marginBottom: '48px' }}>
                    <h6 style={{ color: '#e2e8f0', marginBottom: '12px', fontSize: '16px' }}>3.4.1 Discriminative Method</h6>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '24px' }}>
                        The discriminative path implements an end-to-end pipeline utilizing a <strong>hierarchical fusion strategy</strong>.
                        It aligns multi-level EEG representations with corresponding speech features to capture both acoustic cues and user intent.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '40px', alignItems: 'center' }}>
                        <img
                            src={discriminativePipelineImg}
                            alt="Discriminative Pipeline Block Diagram"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <div>
                            <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>Figure 3.2: Discriminative Pipeline</h6>
                            <p style={{ fontSize: '14px', color: '#cbd5e1' }}><strong>Stages:</strong> Feature Extraction → Cross-Modal Fusion → Mask Estimation → Decoding</p>
                        </div>
                    </div>

                    <h6 style={{ color: '#94a3b8', marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase' }}>Hierarchical Fusion Strategy</h6>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '32px', alignItems: 'center' }}>
                        <div>
                            <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>Figure 3.3: Hierarchical Fusion Block</h6>
                            <p style={{ fontSize: '14px', color: '#cbd5e1' }}><strong>Alignment:</strong> Maps Low/Mid/High EEG features to Acoustic/Linguistic/Semantic speech layers.</p>
                        </div>
                        <img
                            src={hierarchicalFusionImg}
                            alt="Hierarchical Fusion Block Diagram"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                    </div>

                    {/* EEG Feature Extraction Table */}
                    <div style={{ marginBottom: '24px' }}>
                        <h6 style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '12px', textTransform: 'uppercase' }}>EEG Feature Extraction Strategy</h6>
                        <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #334155' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                <thead style={{ background: '#1e293b' }}>
                                    <tr>
                                        <th style={{ padding: '12px 16px', color: '#e2e8f0', width: '30%' }}>Mechanism</th>
                                        <th style={{ padding: '12px 16px', color: '#60a5fa', width: '70%' }}>Purpose & Implementation</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: '#cbd5e1' }}>
                                    <tr style={{ borderBottom: '1px solid #334155' }}>
                                        <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Param-Efficient Preprocessing</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <strong>Depthwise Separable 1D Convs:</strong> Uses per-channel filtering to reduce spatial redundancy and improve parameter efficiency compared to standard convolutions.
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                        <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Exact Temporal Alignment</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <strong>Causal Padding + Positional Enc:</strong> Strictly preserves temporal order and prevents future information leakage ("shifting receptive centers").
                                        </td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #334155' }}>
                                        <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Exponential Receptive Field</td>
                                        <td style={{ padding: '12px 16px' }}>
                                            <strong>Dilated TCN (d = 1, 2, 4...):</strong> Captures both fast transient responses and slow cortical rhythms without high computational cost.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 3.4.2 Generative Method */}
                <div style={{ marginBottom: '32px' }}>
                    <h6 style={{ color: '#e2e8f0', marginBottom: '12px', fontSize: '16px' }}>3.4.2 Generative Method (Diffusion-Based)</h6>
                    <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '24px' }}>
                        The generative path implements a <strong>conditional generation task</strong>, adapted from the SoloSpeech model.
                        It recovers the target audio distribution conditioned on neural activity using a cascaded diffusion pipeline.
                        <br /><span style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>(Red blocks = New EEG specific modules; Blue blocks = Modified SoloSpeech components)</span>
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '24px', alignItems: 'center' }}>
                        <img
                            src={generativePipelineImg}
                            alt="Generative Pipeline"
                            style={{ width: '100%', borderRadius: '8px', border: '1px solid #334155' }}
                        />
                        <div>
                            <h6 style={{ color: '#e2e8f0', marginBottom: '8px' }}>Figure 3.6: Overall Generative Pipeline</h6>
                            <p style={{ fontSize: '14px', color: '#cbd5e1' }}><strong>Flow:</strong> Audio Compressor → Diffusion Transformer (with EEG Context) → Decompressor + Corrector</p>
                        </div>
                    </div>

                    <h6 style={{ color: '#94a3b8', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase' }}>Key Modules</h6>

                    {/* Generative Components Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>

                        {/* Audio Compression */}
                        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Audio Compression (Modified)</h6>
                            <ul style={{ fontSize: '13px', color: '#94a3b8', paddingLeft: '16px', margin: 0 }}>
                                <li style={{ marginBottom: '4px' }}><strong>Feature Mapping:</strong> STFT + TF-GridNet Blocks.</li>
                                <li><strong>Latent Bottleneck:</strong> Conv encoder with sampling layer for tractable diffusion distribution.</li>
                            </ul>
                        </div>

                        {/* Neural EEG Encoder */}
                        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Target Extractor</h6>
                            <img src={eegEncoderImg} alt="EEG Encoder" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px', border: '1px solid #334155' }} />
                            <ul style={{ fontSize: '13px', color: '#94a3b8', paddingLeft: '16px', marginTop: '8px' }}>
                            </ul>
                        </div>

                        {/* Target Extractor */}
                        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
                            <h6 style={{ color: '#60a5fa', marginBottom: '8px' }}>Neural EEG Encoder (DiT)</h6>
                            <img src={uditBlockImg} alt="uDiT Block" style={{ width: '100%', borderRadius: '4px', marginBottom: '12px', border: '1px solid #334155' }} />
                            <ul style={{ fontSize: '13px', color: '#94a3b8', paddingLeft: '16px', margin: 0 }}>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* Techniques and Tools Section */}
            <div style={{ marginBottom: '40px' }}>
                <h5 style={{ borderBottom: '1px solid #334155', paddingBottom: '8px', marginBottom: '20px', color: '#94a3b8', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Techniques and Tools</h5>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '24px' }}>
                    Key technologies selected for high-dimensional time-series processing:
                </p>

                <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #334155' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                        <thead style={{ background: '#1e293b' }}>
                            <tr>
                                <th style={{ padding: '12px 16px', color: '#e2e8f0', width: '25%' }}>Category</th>
                                <th style={{ padding: '12px 16px', color: '#60a5fa', width: '30%' }}>Tool / Technique</th>
                                <th style={{ padding: '12px 16px', color: '#94a3b8', width: '45%' }}>Role in Architecture</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#cbd5e1' }}>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>DL Framework</td>
                                <td style={{ padding: '12px 16px' }}>PyTorch</td>
                                <td style={{ padding: '12px 16px' }}>Dynamic computation graph, extensive signal processing support.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Audio Processing</td>
                                <td style={{ padding: '12px 16px' }}>Torchaudio & Wav2Vec 2.0</td>
                                <td style={{ padding: '12px 16px' }}>Waveform manipulation and feature extraction.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Temporal Modeling</td>
                                <td style={{ padding: '12px 16px' }}>TCN (Temporal Conv. Net)</td>
                                <td style={{ padding: '12px 16px' }}>Captures long-range temporal dependencies in EEG signals.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Sequence Modeling</td>
                                <td style={{ padding: '12px 16px' }}>DPRNN (Dual-Path RNN)</td>
                                <td style={{ padding: '12px 16px' }}>Efficient sequence modeling for speech separation tasks.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Multi-Modal Fusion</td>
                                <td style={{ padding: '12px 16px' }}>Cross-Attention</td>
                                <td style={{ padding: '12px 16px' }}>Aligns EEG and Audio modalities in a shared latent space.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #334155', background: 'rgba(255,255,255,0.02)' }}>
                                <td style={{ padding: '12px 16px', fontWeight: '500', color: '#e2e8f0' }}>Generative Modeling</td>
                                <td style={{ padding: '12px 16px' }}>Diffusion Transformer (DiT)</td>
                                <td style={{ padding: '12px 16px' }}>Iteratively refines audio latent space conditioned on EEG.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default NeurosteeredSpeaker;
