import './About.css';

const skills = [
  'AI Agent Development',
  'Workflow Automation (n8n & Power Automate)',
  'API Integration & System Connectivity',
  'LLM Integration (OpenAI, Claude, Gemini)',
  'WhatsApp & Business Process Automation',
  'Cloud & AI Automation Solutions',
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">

        {/* ── LEFT COLUMN ── */}
        <div className="about__left-col">
          <div className="about__image-card">
            <img
              src="/profile.png"
              alt="About Arpit"
              className="about__image"
            />
          </div>

          {/* 2×2 stat grid */}
          <div className="about__stat-grid">
            <div className="about__stat-card">
              <span className="stat-num">74+</span>
              <span className="stat-lbl">Happy Clients</span>
            </div>
            <div className="about__stat-card">
              <span className="stat-num">70+</span>
              <span className="stat-lbl">Projects Done</span>
            </div>
            <div className="about__stat-card">
              <span className="stat-num">2+</span>
              <span className="stat-lbl">Years Experience</span>
            </div>
            <div className="about__stat-card">
              <span className="stat-num">99%</span>
              <span className="stat-lbl">Success Rate</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="about__text-col">
          <span className="about__label">ABOUT ME</span>

          <h2 className="about__heading">
            Building Intelligent{' '}
            <span className="heading-green">AI Automation That Scales.</span>
          </h2>

          <p className="about__para">
            I am a results-driven RPA & AI Automation Developer specializing in building intelligent workflows, AI agents, and scalable automation solutions. I help businesses eliminate manual work, optimize operations, and accelerate growth through AI-powered automation.
          </p>

          <p className="about__para">
            I'm Arpit, a passionate AI Automation & RPA Developer with 2+ years of experience helping businesses automate workflows, build intelligent AI agents, and streamline operations through scalable automation solutions.
          </p>

          {/* Skills checklist — 2 columns */}
          <div className="about__skills">
            {skills.map((skill) => (
              <div className="about__skill-item" key={skill}>
                <svg
                  className="skill-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="11" stroke="#3b82f6" strokeWidth="1.5" />
                  <path
                    d="M7.5 12l3 3 6-6"
                    stroke="#3b82f6"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {skill}
              </div>
            ))}
          </div>

          {/* Download CV */}
          <a href="/Arpit_RPA.pdf" download="Arpit_RPA.pdf" className="about__cv-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;