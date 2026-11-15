
import { useState } from 'react';

import {
  Shield,
  ShieldCheck,
  Activity,
  Cloud,
  KeyRound,
  Fingerprint,
  Network,
  Zap,
  LockKeyhole,
  ArrowUpRight,
  CheckCircle2,
  Menu,
  X,
  ChevronDown,
  Cpu,
  Globe2
} from 'lucide-react';

const capabilities = [
  {
    icon: <Network />,
    title: 'Endpoint Micro-Segmentation',
    text: 'Isolates communication between workloads in real time. Enforces fine-grained policies and reduces lateral movement between microservices to minimize internal movement pathways.',
    points: [
      'Kernel eBPF socket restriction',
      'Sub-millisecond container isolation'
    ],
    link: 'Inspect segmentation spec'
  },
  {
    icon: <Zap />,
    title: 'Zero-Day Vulnerability Patching',
    text: 'Dynamic in-flight hotpatch synthesis. Intercepts anomalous assembly execution patterns in memory page segments, nullifying zero-day code paths without node restarts or service redeployment.',
    points: [
      'Live runtime bytecode interception',
      'Automated zero-day signature rollback'
    ],
    link: 'Review hotpatching matrix'
  },
  {
    icon: <LockKeyhole />,
    title: 'Decentralized IAM Enforcer',
    text: 'Cryptographic ephemeral credentials with decentralized public key verification. Validates fine-grained permissions across identity tokens in every ingress flow, with real-time trust boundary mapping.',
    points: [
      'SPIFFE/SPIRE ephemeral trust',
      'Zero hardcoded secrets footprint'
    ],
    link: 'Examine identity architecture'
  }
];

const vectors = [
  [
    'L7 Distributed API Flooding (HTTP/3 SYN Exhaustion)',
    '0.18 ms',
    '99.98%',
    'Defended'
  ],
  [
    'Kernel Privilege Escalation (eBPF Helper Bypass)',
    '0.89 ms',
    '100.00%',
    'Critical Block'
  ],
  [
    'Volumetric NTP Amplification & BGP Hijack Vector',
    '0.42 ms',
    '99.94%',
    'Defended'
  ],
  [
    'Side-Channel Speculative Execution Key Extraction',
    '0.95 ms',
    '100.00%',
    'Critical Block'
  ]
];

const cases = [
  {
    tag: 'GLOBAL TIER-1 FINANCIAL CLEARING',
    id: 'INC-8892-FIN',
    title: 'Cross-Border Settlement Ransomware Blockade',
    text: 'A multi-vector supply-chain attack targeted data privacy systems. AegisCore’s eBPF mesh isolated compromised worker nodes and protected transaction data integrity.',
    loss: '$14.2M USD',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85'
  },
  {
    tag: 'INTEGRATED HOSPITAL INFRASTRUCTURE',
    id: 'INC-9146-HLTH',
    title: 'Medical IoT Mesh Firmware Hijack Neutralization',
    text: 'Malicious firmware payloads were transferred over telemetry channels. The platform halted propagation and isolated affected devices while maintaining critical monitoring.',
    loss: '$8.6M USD',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85'
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [tier, setTier] = useState('Standard');

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    architecture: 'Multi-Cloud Hybrid (AWS / Azure / GCP)',
    anomalies: ''
  });

  const [sources, setSources] = useState([
    'Public API / HTTP Endpoints',
    'Bastion Jump Hosts & WebGuard Portals'
  ]);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const toggleSource = (value) => {
    setSources((old) =>
      old.includes(value)
        ? old.filter((x) => x !== value)
        : [...old, value]
    );
  };

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });

    setMobileOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm({
      name: '',
      email: '',
      architecture: 'Multi-Cloud Hybrid (AWS / Azure / GCP)',
      anomalies: ''
    });

    setTier('Standard');
    setSources([]);
    setSubmitted(false);
  };

  return (
    <>
      {/* TOP SYSTEM BAR */}

      <div className="system-bar">
        <span>
          <i className="live-dot" />
          SIMULATED TEST ENVIRONMENT V3.8 ·
          CIPHERGUARD CYBER DEFENSE SUITE
        </span>

        <span>
          ALLOTTED DURATION: 05:00:00
          <b> · </b>
          SYSTEM: <strong>THREAT SAFE</strong>
        </span>
      </div>

      {/* NAVBAR */}

      <header className="navbar">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            goTo('top');
          }}
        >
          <span className="brand-mark">
            <ShieldCheck size={20} />
          </span>

          <span>
            <b>AegisCore</b>

            <small>
              CYBER DEFENSE
              <br />
              ENGINEERING
            </small>

            <small className="version">V4.2</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        <nav className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          {[
            ['Overview', 'top'],
            ['Capabilities', 'capabilities'],
            ['Matrix', 'matrix'],
            ['Projects', 'projects'],
            ['Contact', 'audit']
          ].map(([label, id]) => (
            <button key={id} onClick={() => goTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => goTo('audit')}>
          Start Assessment <ArrowUpRight size={14} />
        </button>

        <span className="profile">
          <Fingerprint size={17} />
        </span>
      </header>

      <main id="top">

        {/* HERO SECTION */}

        <section className="hero section-pad">
          <div className="hero-copy">
            <span className="pill">
              <span className="live-dot" />
              ZERO-TRUST EDGE INTELLIGENCE // 5 HOUR EXAM
            </span>

            <h1>
              Autonomous Threat
              <em> Neutralization</em> at Cloud Edge
            </h1>

            <p>
              Hardened real-time packet surveillance and isolated
              memory segment filtering. Defend mission-critical
              infrastructure against stealth state-sponsored
              intrusions without human intervention latency.
            </p>

            <div className="hero-actions">
              <button
                className="primary"
                onClick={() => goTo('audit')}
              >
                <Shield size={15} />
                Deploy Sentinel Agent
              </button>

              <button
                className="secondary"
                onClick={() => goTo('audit')}
              >
                <LockKeyhole size={14} />
                Request Threat Audit
              </button>
            </div>

            <div className="stats">
              <div>
                <b>{'<0.24ms'}</b>
                <small>Edge Latency</small>
              </div>

              <div>
                <b>0.0001%</b>
                <small>False-Positive Rate</small>
              </div>

              <div>
                <b>100%</b>
                <small>Agent Integrity</small>
              </div>
            </div>
          </div>

          {/* TELEMETRY DASHBOARD */}

          <div className="telemetry">
            <div className="telemetry-top">
              <span>
                <ShieldCheck size={15} />
                Security Telemetry Node
              </span>

              <b className="status">ACTIVE DEFENSE</b>
            </div>

            <div className="telemetry-row">
              <span>
                <Activity />
                L7 Ingress Sanitization
                <small>Request filtering &amp; policy</small>
              </span>

              <b>DEFENDED</b>
            </div>

            <div className="telemetry-row">
              <span>
                <Cpu />
                eBPF Kernel Inspection
                <small>Syscall &amp; memory isolation</small>
              </span>

              <b className="purple">NEUTRALIZED</b>
            </div>

            <div className="telemetry-row">
              <span>
                <Globe2 />
                Lateral Mesh Extraction
                <small>East-west traffic monitor</small>
              </span>

              <b>DEFENDED</b>
            </div>

            <div className="telemetry-foot">
              <span>
                Cypher: <b>AES-256-GCM</b>
              </span>

              <span>
                Handshake: <b>TLS 1.3 / mTLS</b>
              </span>
            </div>

            <div className="telemetry-foot">
              <span>
                Cluster State: 14,892 Nodes Synchronized
              </span>

              <b className="green">100.0% HEALTH</b>
            </div>
          </div>
        </section>

        {/* PARTNERS */}

        <section className="partners">
          <span className="eyebrow">
            TRUSTED DEFENSE SIMULATIONS &amp; PARTNERS
          </span>

          <div className="partner-list">
            <b><ShieldCheck /> CrowdStrike</b>
            <b><Cloud /> Cloudflare</b>
            <b><Shield /> Palo Alto Networks</b>
            <b><KeyRound /> Okta</b>
            <b><Fingerprint /> HashiCorp</b>
          </div>
        </section>

        {/* CAPABILITIES */}

        <section
          className="section-pad capabilities"
          id="capabilities"
        >
          <SectionHeading
            eyebrow="ARCHITECTURAL SPECIFICATION"
            title="Autonomous Perimeter Capabilities"
            text="Zero-latency distributed enforcement layers embedded natively in Linux kernel spaces and edge hypervisors."
          />

          <div className="cap-grid">
            {capabilities.map((item, i) => (
              <article className="cap-card" key={item.title}>
                <span className={'cap-icon icon-' + i}>
                  {item.icon}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 />
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  className="text-link"
                  onClick={() => goTo('matrix')}
                >
                  {item.link}
                  <ArrowUpRight size={12} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* THREAT MATRIX */}

        <section
          className="section-pad matrix-section"
          id="matrix"
        >
          <SectionHeading
            eyebrow="TELEMETRY & AUDIT OVERVIEW"
            title="Threat Vector Response & Compliance Matrix"
          />

          <div className="matrix-note">
            SIMULATED THREAT DATA · TYPE: DEMONSTRATION
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Protocol Layer</th>
                  <th>Mean Time to Detect (MTTD)</th>
                  <th>Mitigation Rate</th>
                  <th>Severity Status</th>
                </tr>
              </thead>

              <tbody>
                {vectors.map((row) => (
                  <tr key={row[0]}>
                    <td>
                      <span className="table-icon">◈</span>
                      {row[0]}
                    </td>

                    <td>{row[1]}</td>

                    <td className="rate">{row[2]}</td>

                    <td>
                      <span
                        className={
                          row[3] === 'Defended'
                            ? 'badge defended'
                            : 'badge blocked'
                        }
                      >
                        {row[3]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* PROJECTS */}

        <section
          className="section-pad projects"
          id="projects"
        >
          <SectionHeading
            eyebrow="REAL-WORLD VALIDATION"
            title="Security Incident Case Studies"
            text="Zero-compromise forensic telemetry extracted from live production mission-critical failovers."
          />

          <div className="case-grid">
            {cases.map((item) => (
              <article className="case-card" key={item.id}>
                <div className="case-image">
                  <img
                    src={item.image}
                    alt="Cybersecurity infrastructure"
                  />

                  <span>{item.id}</span>
                </div>

                <div className="case-content">
                  <div className="case-meta">
                    <b>{item.tag}</b>
                    <span>01 Incident Response</span>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="case-stats">
                    <span>
                      Loss Prevented:
                      <b>{item.loss}</b>
                    </span>

                    <span>
                      Uptime Sustained:
                      <b className="green">100.00%</b>
                    </span>
                  </div>

                  <button
                    className="text-link"
                    onClick={() => goTo('audit')}
                  >
                    Read complete incident forensic report
                    <ArrowUpRight size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AUDIT FORM */}

        <section
          className="audit-section section-pad"
          id="audit"
        >
          <div className="audit-heading">
            <span className="eyebrow">
              ZERO-TRUST SECURITY ENGAGEMENT
            </span>

            <h2>Initiate Enterprise Infrastructure Audit</h2>

            <p>
              Deploy an air-gapped forensic audit across your VPCs,
              bare metal clusters, or container regions.
            </p>
          </div>

          <form className="audit-form" onSubmit={submit}>
            <div className="form-grid">
              <label>
                Security Officer Name

                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="e.g. Alex Rivera, CISSP"
                  required
                />
              </label>

              <label>
                Enterprise Email

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="alex@enterprise-corp.com"
                  required
                />
              </label>
            </div>

            <label>
              Infrastructure Architecture

              <div className="select-wrap">
                <select
                  name="architecture"
                  value={form.architecture}
                  onChange={update}
                >
                  <option>
                    Multi-Cloud Hybrid (AWS / Azure / GCP)
                  </option>

                  <option>Private Cloud Infrastructure</option>

                  <option>On-Premises Data Center</option>

                  <option>Kubernetes / Container Cluster</option>
                </select>

                <ChevronDown size={15} />
              </div>
            </label>

            <label>
              Assessment Protocol Tier

              <div className="tier-grid">
                {[
                  ['Standard', 'Edge / API Scan'],
                  ['Advanced', 'eBPF Kernel Audit'],
                  ['Red Team', 'Full Spectrum Zero-Day']
                ].map(([name, desc]) => (
                  <button
                    type="button"
                    key={name}
                    className={
                      tier === name ? 'tier active' : 'tier'
                    }
                    onClick={() => setTier(name)}
                  >
                    <span className="radio-dot" />

                    <b>{name}</b>

                    <small>{desc}</small>
                  </button>
                ))}
              </div>
            </label>

            <label>Monitored Ingress Surfaces</label>

            <div className="checks">
              {[
                'Public API / HTTP Endpoints',
                'Bastion Jump Hosts & WebGuard Portals',
                'CI/CD Supply Chain Artifacts',
                'Encrypted Relational Shards'
              ].map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    checked={sources.includes(item)}
                    onChange={() => toggleSource(item)}
                  />

                  {item}
                </label>
              ))}
            </div>

            <label>
              Known Vector Anomalies or Specific Target Boundaries

              <textarea
                name="anomalies"
                value={form.anomalies}
                onChange={update}
                placeholder="Describe anomalous packet patterns, suspicious memory reads, or target VPC / server clusters..."
                rows="4"
              />
            </label>

            {submitted && (
              <div className="success-message">
                <CheckCircle2 size={17} />

                Audit request prepared for {form.name}.
                This demo does not send data to a server.
              </div>
            )}

            <div className="form-actions">
              <button
                type="button"
                className="secondary"
                onClick={reset}
              >
                Reset Fields
              </button>

              <button className="primary" type="submit">
                Submit Audit Request
                <ArrowUpRight size={13} />
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}

      <footer className="footer section-pad">
        <div className="footer-grid">
          <div>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">
                <ShieldCheck size={19} />
              </span>

              <b>AegisCore Architecture</b>
            </a>

            <p>
              Standardized examination environment for cloud-edge
              cybersecurity, autonomous threat-vector containment,
              and zero-trust verification engines.
            </p>

            <div className="certs">
              <span>ISO/IEC 27001</span>
              <span>SOC 2 Type II</span>
              <span>NIST 800-53</span>
            </div>
          </div>

          <div>
            <h4>Defense Frameworks</h4>

            <a href="#capabilities">CSPF Socket Filters</a>
            <a href="#capabilities">Heuristic Micro-Sandboxing</a>
            <a href="#matrix">Layer 7 Anomaly Routing</a>
            <a href="#matrix">Post-Quantum Cryptography</a>
            <a href="#matrix">Hardware Security Modules (HSM)</a>
          </div>

          <div>
            <h4>Assessment Tracks</h4>

            <a href="#audit">Standardized Exam #1 (Infra)</a>
            <a href="#audit">Standardized Exam #2 (Cloud)</a>
            <a href="#audit">Assessment #3 (Hybrid/Cloud)</a>
            <a href="#audit">Assessment #4 (Mesh Networking)</a>
            <a href="#audit">Enterprise Examiner Console</a>
          </div>

          <div>
            <h4>Syllabus Compliance</h4>

            <div className="compliance">
              <b>Exam Track <span>SEC-03-SH</span></b>
              <b>Version Spec <span>2025.3.1-HF</span></b>
              <b>Completion Level <span>Tier 4 / Advanced</span></b>
              <b>Execution Engine <span>Pure HTML/CSS/JS</span></b>

              <a href="#audit">
                ✓ Verify Certificate Specs
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2025 AegisCore Stellar Engine &amp; CipherGuard Defense
            Suite. All rights reserved.
          </span>

          <span>
            <a href="#audit">Privacy Architecture</a>
            <a href="#audit">Candidate Verification</a>
            <a href="#audit">Terms of Examination</a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
