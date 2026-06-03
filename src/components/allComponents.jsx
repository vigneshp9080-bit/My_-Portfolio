// ============================================================
// ALL COMPONENTS — imports must all be at the top
// ============================================================
import "./components.css";
import { useEffect, useRef, useState } from "react";
import {
  education,
  skills as skillsData,
  projects,
  experience,
  certifications,
  personal,
} from "../data/resumeData";

// ============================================================
// ABOUT COMPONENT
// ============================================================
export function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal about-left">
            <div className="avatar-ring">
              <div className="avatar-inner">VP</div>
            </div>
            <div className="about-stats">
              {[["3+","Internships"],["5+","Projects"],["5","Certifications"],["7.8","CGPA"]].map(([n,l]) => (
                <div key={l} className="stat-card">
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate about<br /><span className="highlight">AI-driven</span> solutions</h2>
            <div className="section-divider" />
            <div className="about-text">
              <p>I'm a B.Tech student in Artificial Intelligence &amp; Data Science at Kathir College of Engineering, Coimbatore. With a strong foundation in ML, Deep Learning, and Generative AI, I build intelligent systems that solve real-world problems.</p>
              <p>My journey spans full-stack web development, robotics, and advanced AI — from sentiment analysis platforms to real-time OS monitoring with anomaly detection.</p>
              <p>I'm actively seeking international opportunities where I can leverage Python, NLP, Computer Vision, and cloud-based AI to deliver high-impact solutions.</p>
            </div>
            <div className="edu-timeline">
              {education.map((e) => (
                <div key={e.degree} className="edu-item">
                  <div className="edu-info">
                    <span className="edu-year">{e.period}</span>
                    <h4>{e.degree}</h4>
                    <p>{e.institution}, {e.location} · {e.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SKILLS COMPONENT
// ============================================================
export function Skills() {
  const gridRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".skill-bar").forEach((bar) => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + "%"; }, 200);
          });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    if (gridRef.current) obs.observe(gridRef.current);
  }, []);

  return (
    <section id="skills" className="section-alt">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="section-divider" style={{ margin: "0 auto" }} />
        </div>
        <div className="skills-grid" ref={gridRef}>
          {skillsData.map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-bar-bg">
                <div className="skill-bar" data-pct={s.level} style={{ width: 0 }} />
              </div>
              <div className="skill-pct">{s.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PROJECTS COMPONENT
// ============================================================
export function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div className="project-top">
                <div className="project-num">{p.id}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.description}</div>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t} className="p-tag">{t}</span>)}
                </div>
                <ul className="project-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="project-bottom">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link primary">
                  ⌥ GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                    ↗ Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// EXPERIENCE COMPONENT
// ============================================================
export function Experience() {
  return (
    <section id="experience" className="section-alt">
      <div className="container">
        <div style={{ marginBottom: "3rem" }}>
          <span className="section-label">Work History</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </div>
        <div className="exp-timeline">
          {experience.map((e) => (
            <div key={e.company} className="exp-item">
              <div className="exp-dot" />
              <div className="exp-header">
                <div className="exp-company">{e.company}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-period">{e.period} · {e.duration}</div>
              </div>
              <div className="exp-desc">{e.description}</div>
              <ul className="exp-responsibilities">
                {e.responsibilities.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <div className="exp-skills">
                {e.skills.map((s) => <span key={s} className="exp-skill">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CERTIFICATIONS COMPONENT
// ============================================================
export function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications &amp; Training</h2>
          <div className="section-divider" style={{ margin: "0 auto" }} />
        </div>
        <div className="certs-grid">
          {certifications.map((c) => (
            <div key={c.name} className="cert-card">
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-period">{c.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// CONTACT COMPONENT
// ============================================================
export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    const name = document.getElementById("c-name")?.value;
    const email = document.getElementById("c-email")?.value;
    const msg = document.getElementById("c-msg")?.value;
    if (!name || !email || !msg) return;
    const sub = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Vignesh,\n\n${msg}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${personal.email}?subject=${sub}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const links = [
    { icon: "✉️", cls: "icon-email", label: "Email", sub: personal.email, href: `mailto:${personal.email}` },
    { icon: "in", cls: "icon-linkedin", label: "LinkedIn", sub: "vignesh-p-53b3a62a4", href: personal.linkedin },
    { icon: "⌥", cls: "icon-github", label: "GitHub", sub: "vigneshp9080-bit", href: personal.github },
  ];

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Let's Build<br />Something <span className="highlight">Great</span></h2>
            <div className="section-divider" />
            <p style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Open to full-time roles, freelance projects, research collaborations, and internships
              in AI, Data Science, and Machine Learning — especially international opportunities.
            </p>
            <p style={{ color: "var(--text2)", lineHeight: 1.8 }}>
              Based in Coimbatore, Tamil Nadu 🇮🇳 · Open to remote &amp; relocation
            </p>
            <div className="contact-links">
              {links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-link">
                  <div className={`contact-link-icon ${l.cls}`}>{l.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{l.label}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text2)" }}>{l.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-card">
            <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
              Send a Message
            </h3>
            <div className="form-group">
              <label>Name</label>
              <input id="c-name" type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input id="c-email" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea id="c-msg" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={handleSubmit}>
              Send Message →
            </button>
            {sent && (
              <div className="form-success">
                ✓ Opening your email client...
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER COMPONENT
// ============================================================
export function Footer() {
  return (
    <footer>
      <p>Designed &amp; Built by <strong>Vignesh P</strong> · AI Engineer &amp; Data Scientist</p>
      <p style={{ marginTop: "0.5rem" }}>
        © 2026 · Coimbatore, India ·{" "}
        <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>LinkedIn</a>
        {" · "}
        <a href={personal.github} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>GitHub</a>
      </p>
    </footer>
  );
}
