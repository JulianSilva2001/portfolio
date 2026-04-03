import neurocodecDiagram from "../../assets/Projects/EEG_Fusion/Neurocodec.png";

type Row = {
  key: string;
  label: string;
  image: string;
  audio: string;
  rowClass?: string;
};

type Sample = {
  id: string;
  rows: Row[];
};

const BASE = "neurocodec/Cocktail Party/Samples";

const samples: Sample[] = [
  {
    id: "Sample_1",
    rows: [
      { key: "mix", label: "Mixture", image: `${BASE}/Sample_1/Mixture_1.png`, audio: `${BASE}/Sample_1/Mixture_1.wav` },
      { key: "target", label: "Target", image: `${BASE}/Sample_1/Target_1.png`, audio: `${BASE}/Sample_1/Target_1.wav` },
      { key: "m3anet", label: "M3ANet", image: `${BASE}/Sample_1/Predicted_M3ANet_1.png`, audio: `${BASE}/Sample_1/Predicted_M3ANet_1.wav` },
      {
        key: "ours",
        label: "Ours (Neurocodec)",
        image: `${BASE}/Sample_1/Predicted_Neurocodec_1.png`,
        audio: `${BASE}/Sample_1/Predicted_Neurocodec_1.wav`,
        rowClass: "row-ours",
      },
      {
        key: "ablated",
        label: "Without Mel and GAN losses",
        image: `${BASE}/Sample_1/Predicted_Lmse_Only_1.png`,
        audio: `${BASE}/Sample_1/Predicted_Lmse_Only_1.wav`,
      },
    ],
  },
  {
    id: "Sample_2",
    rows: [
      { key: "mix", label: "Mixture", image: `${BASE}/Sample_2/Mixture_2.png`, audio: `${BASE}/Sample_2/Mixture_2.wav` },
      { key: "target", label: "Target", image: `${BASE}/Sample_2/Target_2.png`, audio: `${BASE}/Sample_2/Target_2.wav` },
      { key: "m3anet", label: "M3ANet", image: `${BASE}/Sample_2/Predicted_M3ANet_2.png`, audio: `${BASE}/Sample_2/Predicted_M3ANet_2.wav` },
      {
        key: "ours",
        label: "Ours (Neurocodec)",
        image: `${BASE}/Sample_2/Predicted_Neurocodec_2.png`,
        audio: `${BASE}/Sample_2/Predicted_Neurocodec_2.wav`,
        rowClass: "row-ours",
      },
      {
        key: "ablated",
        label: "Without Mel and GAN losses",
        image: `${BASE}/Sample_2/Predicted_Lmse_Only_2.png`,
        audio: `${BASE}/Sample_2/Predicted_Lmse_Only_2.wav`,
      },
    ],
  },
  {
    id: "Sample_3",
    rows: [
      { key: "mix", label: "Mixture", image: `${BASE}/Sample_3/Mixture_3.png`, audio: `${BASE}/Sample_3/Mixture_3.wav` },
      { key: "target", label: "Target", image: `${BASE}/Sample_3/Target_3.png`, audio: `${BASE}/Sample_3/Target_3.wav` },
      { key: "m3anet", label: "M3ANet", image: `${BASE}/Sample_3/Predicted_M3ANet_3.png`, audio: `${BASE}/Sample_3/Predicted_M3ANet_3.wav` },
      {
        key: "ours",
        label: "Ours (Neurocodec)",
        image: `${BASE}/Sample_3/Predicted_Neurocodec_3.png`,
        audio: `${BASE}/Sample_3/Predicted_Neurocodec_3.wav`,
        rowClass: "row-ours",
      },
      {
        key: "ablated",
        label: "Without Mel and GAN losses",
        image: `${BASE}/Sample_3/Predicted_Lmse_Only_3.png`,
        audio: `${BASE}/Sample_3/Predicted_Lmse_Only_3.wav`,
      },
    ],
  },
];

const fileName = (path: string) => path.split("/").pop() ?? path;
const assetUrl = (path: string) => encodeURI(`${import.meta.env.BASE_URL}${path}`);

const NeurosteeredSpeaker = () => {
  return (
    <section className="section neurocodec-page">
      <div className="section-header">
        <h3>NeuroCodec: EEG-Guided Target Speaker Extraction</h3>
        <p>
          A generative, mask-free EEG-guided framework for extracting a listener-attended speaker from complex mixtures.
        </p>
      </div>

      <section className="neurocodec-note">
        <h4>Summary</h4>
        <p>
          NeuroCodec replaces conventional low-resolution masking with latent-domain speech generation. It predicts
          target codec latents from mixture audio and EEG, then reconstructs high-fidelity 44.1 kHz speech. The
          model uses graph-based EEG spatial encoding, Causal Mamba temporal fusion, and a staged training strategy
          with reconstruction, spectral, and adversarial objectives.
        </p>
      </section>

      <section className="neurocodec-paper">
        <h4>Problem Setting</h4>
        <p>
          EEG-guided target speaker extraction infers auditory attention from brain signals and uses that neural cue
          to recover the intended speaker in multi-talker environments.
        </p>
        <p>Key limitations in prior systems:</p>
        <ul>
          <li>Masking-based extraction leaks interference under severe overlap.</li>
          <li>Many methods are offline and weak for real-time streaming use.</li>
          <li>Most systems are narrowband and lose high-frequency detail.</li>
        </ul>
      </section>

      <section className="neurocodec-paper">
        <h4>Main Contributions</h4>
        <ul>
          <li>Generative mask-free EEG-guided TSE in codec latent space.</li>
          <li>Graph EEG encoder plus cross-modal selective state-space fusion.</li>
          <li>High-fidelity 44.1 kHz reconstruction with robust overlap handling.</li>
          <li>Causal online extension for low-latency neural-steered inference.</li>
        </ul>
      </section>

      <section className="neurocodec-paper">
        <h4>Architecture Overview</h4>
        <div className="neurocodec-figure">
          <img src={neurocodecDiagram} alt="NeuroCodec architecture diagram" />
          <p>
            Figure 1: Frozen DAC encoder provides mixture latents; EEG features are fused via CM-S3 blocks to
            predict target latents, then decoded by DAC.
          </p>
        </div>
        <ol>
          <li><strong>Audio Encoder:</strong> Frozen DAC maps waveform to structured latent representation.</li>
          <li><strong>EEG Encoder:</strong> Graph spatial modeling + multi-scale temporal projection.</li>
          <li><strong>CM-S3 Fusion:</strong> Cross-attention + Causal Mamba for long-context alignment.</li>
          <li><strong>Latent Decoder:</strong> RVQ + DAC decoder reconstruct target waveform.</li>
        </ol>
      </section>

      <section className="neurocodec-paper">
        <h4>Training Strategy</h4>
        <p>
          The generator is optimized with latent reconstruction, multi-scale Mel spectral consistency, adversarial
          realism, and feature matching:
        </p>
        <pre className="code-block">
          <code>LG = lambda_recon * Lrecon + lambda_mel * Lmel + lambda_adv * Ladv + lambda_fm * Lfm</code>
        </pre>
        <p>
          A phased curriculum is used for stability: latent warm-up, spectral integration, critic pretraining,
          adversarial ramp-up, and full min-max optimization.
        </p>
      </section>

      <section className="neurocodec-paper">
        <h4>Online Streaming</h4>
        <p>
          Online NeuroCodec runs causal hop-wise inference (2 s window, 0.5 s hop) with EMA latent feedback and
          FiLM conditioning from prior predictions, enabling low-latency deployment with stable continuity.
        </p>
      </section>

      <section className="neurocodec-paper">
        <h4>Table 1: Performance Comparison</h4>
        <p>
          Part (a) reports Cocktail Party results and part (b) reports KUL results. NeuroCodec is evaluated at
          44.1 kHz for Cocktail Party and 8 kHz for KUL. Baselines are reproduced where marked (*), and KUL baseline
          references follow the comparative reporting in Neuro-Spex+.
        </p>
        <div className="neurocodec-table-wrap">
          <table className="neurocodec-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>STOI</th>
                <th>ESTOI</th>
                <th>PESQ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={4}><strong>(a) Cocktail Party Dataset</strong></td></tr>
              <tr><td>NeuroHeed</td><td>0.7148</td><td>0.5479</td><td>1.45</td></tr>
              <tr><td>BASEN*</td><td>0.7904</td><td>0.7154</td><td>1.91</td></tr>
              <tr><td>M3ANet*</td><td>0.8124</td><td>0.7256</td><td>2.23</td></tr>
              <tr><td><strong>NeuroCodec</strong></td><td><strong>0.8273</strong></td><td>0.7213</td><td><strong>2.31</strong></td></tr>
              <tr><td colSpan={4}><strong>(b) KUL Dataset</strong></td></tr>
              <tr><td>NeuroHeed</td><td>0.637</td><td>-</td><td>2.282</td></tr>
              <tr><td>Neuro-Spex+</td><td>0.859</td><td>-</td><td>2.514</td></tr>
              <tr><td><strong>NeuroCodec</strong></td><td><strong>0.868</strong></td><td><strong>0.7544</strong></td><td><strong>2.562</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="neurocodec-paper">
        <h4>Table 2: Online Evaluation</h4>
        <p>
          Comparison against Online NeuroHeed on GTX 1080 Ti with window length 2.0 s and hop length 0.2 s.
          <code>**</code> denotes inclusion of speaker encoder/attractor.
        </p>
        <div className="neurocodec-table-wrap">
          <table className="neurocodec-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>STOI</th>
                <th>ESTOI</th>
                <th>PESQ</th>
                <th>RTF</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>NeuroHeed</td><td>0.588</td><td>0.4969</td><td>1.037</td><td>8.9</td></tr>
              <tr><td>NeuroHeed**</td><td>0.612</td><td>0.5716</td><td>1.290</td><td>7.2</td></tr>
              <tr><td>Online NeuroCodec</td><td>0.742</td><td>0.6864</td><td>1.501</td><td><strong>0.94</strong></td></tr>
              <tr><td>Online NeuroCodec**</td><td><strong>0.803</strong></td><td><strong>0.7105</strong></td><td><strong>1.662</strong></td><td>1.21</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="neurocodec-paper">
        <h4>Table 3: Ablation Study (KUL)</h4>
        <p>
          Part (a) compares temporal backbones using only reconstruction loss. Part (b) evaluates objective
          combinations with Mamba backbone.
        </p>
        <div className="neurocodec-table-wrap">
          <table className="neurocodec-table">
            <thead>
              <tr>
                <th>Configuration</th>
                <th>ESTOI</th>
                <th>PESQ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td colSpan={3}><strong>(a) Backbone Architecture (Base)</strong></td></tr>
              <tr><td>Transformer</td><td>0.4703</td><td>0.8702</td></tr>
              <tr><td>Transformer + Snake</td><td>0.5162</td><td>1.034</td></tr>
              <tr><td>Mamba</td><td><strong>0.5734</strong></td><td><strong>1.503</strong></td></tr>
              <tr><td colSpan={3}><strong>(b) Training Objectives</strong></td></tr>
              <tr><td>Lrecon (Base)</td><td>0.5734</td><td>1.503</td></tr>
              <tr><td>Lrecon + Lmel</td><td>0.6861</td><td>1.9204</td></tr>
              <tr><td>Lrecon + Lmel + Ladv/fm (Final)</td><td><strong>0.7544</strong></td><td><strong>2.562</strong></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="neurocodec-paper">
        <h4>Qualitative Results (Cocktail Party)</h4>
        <p className="neurocodec-sub">
          Order per sample: Mixture, Target, M3ANet, Ours (Neurocodec), Without Mel and GAN losses.
        </p>
        <p>
          On KUL qualitative inspection, NeuroCodec reconstructions preserve target harmonic structure and reduce
          interfering speech components, with clearer formant continuity and fewer masking artifacts.
        </p>
      </section>

      {samples.map((sample) => (
        <section key={sample.id} className="neurocodec-sample">
          <h4>{sample.id}</h4>
          <div className="neurocodec-rows">
            <div className="neurocodec-col-head">
              <div>Method</div>
              <div>Spectrogram</div>
              <div>Audio</div>
            </div>

            {sample.rows.map((row) => (
              <article key={row.key} className={`neurocodec-row ${row.rowClass ?? ""}`.trim()}>
                <div className="neurocodec-label">{row.label}</div>
                <div className="neurocodec-media">
                  <img loading="lazy" src={assetUrl(row.image)} alt={fileName(row.image)} />
                </div>
                <div className="neurocodec-audio">
                  <div className="neurocodec-fname">{fileName(row.audio)}</div>
                  <audio controls preload="none" src={assetUrl(row.audio)} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default NeurosteeredSpeaker;
