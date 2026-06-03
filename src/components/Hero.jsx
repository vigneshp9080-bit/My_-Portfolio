import "./Hero.css";

export default function Hero() {
  const tags = [
    { label: "# Generative AI", cls: "tag-ai" },
    { label: "# Machine Learning", cls: "tag-ml" },
    { label: "# Data Science", cls: "tag-ds" },
    { label: "# Deep Learning", cls: "tag-ai" },
    { label: "# NLP", cls: "tag-ml" },
    { label: "# Computer Vision", cls: "tag-ds" },
  ];

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Opportunities
        </div>

        <h1 className="font-display hero-title">
          <span className="title-name">Vignesh P</span>
          <span className="title-grad">
            AI Engineer &amp;<br />Data Scientist
          </span>
        </h1>

        <p className="hero-sub">
          Building intelligent systems at the intersection of Machine Learning, Deep Learning,
          and Generative AI — turning complex data into real-world impact.
        </p>

        <div className="hero-tags">
          {tags.map((t) => (
            <span key={t.label} className={`hero-tag ${t.cls}`}>
              {t.label}
            </span>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
