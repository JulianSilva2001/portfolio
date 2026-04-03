import outputGif from "../../assets/Projects/RL/output.gif";
import outputHallGif from "../../assets/Projects/RL/output_hall.gif";

const CrowdNavigationRL = () => {
  return (
    <section className="section">
      <div className="section-header">
        <h3>
          Deep RL Crowd Navigation via Graph Networks and Selective State Space
          Modeling
        </h3>
        <p>
          A real-time robot navigation policy for dense dynamic crowds, designed
          to reduce sensor jitter and computational lag.
        </p>
      </div>

      <section className="neurocodec-paper">
        <h4>Project Summary</h4>
        <p>
          This work combines heterogeneous social graph reasoning with
          linear-time selective state space modeling. The system enables safer
          robot motion in crowded, partially occluded environments by preserving
          temporal intent and staying computationally efficient as crowd size
          increases.
        </p>
      </section>

      <section className="neurocodec-paper">
        <h4>Core Innovation</h4>
        <ol>
          <li>
            <strong>Adaptive Social Filtering (KFGN):</strong> A Kalman
            Filtering Graph Neural Network that fuses spatial social trends and
            raw temporal streams to suppress perceptual jitter.
          </li>
          <li>
            <strong>Graph-Informed Selective Scan (Mamba):</strong> Replaces
            quadratic attention with linear-time selective state space modeling
            and graph-injected dynamics for scalable crowd reasoning.
          </li>
        </ol>
        <pre className="code-block">
          <code>{`pred = (H_graph * sigma_std^2 + H_std * sigma_graph^2) / (sigma_std^2 + sigma_graph^2)
h_t = A h_(t-1) + B x_t`}</code>
        </pre>
      </section>

      <section className="neurocodec-paper">
        <h4>Architecture Pipeline</h4>
        <div className="neurocodec-table-wrap">
          <table className="neurocodec-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Component</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Perception</td>
                <td>1D-CNN and MLPs</td>
                <td>
                  Encodes robot, human, and LiDAR inputs into compact tokens.
                </td>
              </tr>
              <tr>
                <td>Filtering</td>
                <td>HH-RH KFGN</td>
                <td>
                  Removes sensor noise and extracts social interaction
                  structure.
                </td>
              </tr>
              <tr>
                <td>Reasoning</td>
                <td>ST-S3M Mamba</td>
                <td>
                  Performs long-horizon intent modeling with linear-time
                  complexity.
                </td>
              </tr>
              <tr>
                <td>Action</td>
                <td>Actor-Critic (PPO)</td>
                <td>Generates smooth linear and angular velocity commands.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="neurocodec-paper">
        <h4>Results and Impact</h4>
        <ul>
          <li>
            Persistent hidden state improved safety under occlusion and
            re-emergence scenarios.
          </li>
          <li>
            Kalman-fused embeddings produced smoother trajectories than raw
            graph baselines.
          </li>
        </ul>
      </section>

      <section className="neurocodec-paper">
        <h4>Model Outputs</h4>
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <figure style={{ margin: 0 }}>
            <img
              src={outputGif}
              alt="Crowd navigation output"
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #cfcfcf",
              }}
            />
            <figcaption
              style={{ marginTop: "8px", color: "#5f5f5f", fontSize: "13px" }}
            >
              Dynamic crowd scenario output.
            </figcaption>
          </figure>
          <figure style={{ margin: 0 }}>
            <img
              src={outputHallGif}
              alt="Hallway crowd navigation output"
              style={{
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #cfcfcf",
              }}
            />
            <figcaption
              style={{ marginTop: "8px", color: "#5f5f5f", fontSize: "13px" }}
            >
              Hallway occlusion scenario output.
            </figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
};

export default CrowdNavigationRL;
