import './Experience.css';

const experiences = [
  {
    role: 'Agentic AI Developer',
    company: 'Clicode Private Limited',
    period: 'Dec, 2025 – Present',
    type: 'Full-time | Remote',
    desc: 'Designed and implemented AI-powered automation workflows using n8n, Power Automate, and LLMs. Delivered scalable AI agents, API integrations, and business process automation solutions to streamline operations and enhance productivity.',
    skills: ['REST API Integration', 'n8n', 'Business Process Automation', 'OpenRPA', 'Python'],
    icon: 'F',
  },
  {
    role: 'RPA & Agentic AI Developer',
    company: 'The Automation Lab',
    period: 'Nov, 2024 – Nov, 2025',
    type: 'Full-time | On-Site',
    desc: 'Developed intelligent automation solutions for clients by building AI agents, workflow automations, API integrations, and WhatsApp automation systems. Delivered scalable solutions that streamlined operations and increased productivity.',
    skills: ['AI Agent Development', 'LLM Integration', 'REST APIs', 'OpenAI / Claude / Gemini APIs', 'Workflow Automation', 'WhatsApp Cloud API'],
    icon: 'T',
  },
  {
    role: 'Internship Trainee - Python Developer',
    company: 'Axisray',
    period: 'Feb, 2024 – Nov, 2024',
    type: 'Internship',
    desc: 'Developed backend web applications and RESTful APIs using Python, Flask, and Django. Collaborated with senior developers to build scalable backend solutions, debug applications, and optimize performance while following OOP principles and Agile development practices.',
    skills: ['Python', 'Flask', 'Django', 'Mysql', 'Agile Development', 'OOPs'],
    icon: 'S',
  },
  {
    role: 'Internship Trainee - Cloud Computing & DevOps',
    company: 'Sahana System Limited',
    period: 'Jun, 2024 – July, 2024',
    type: 'Internship',
    desc: 'Gained hands-on experience with AWS cloud services, including Amazon EC2, RDS, Lambda, and Bedrock. Built foundational knowledge in cloud infrastructure, serverless computing, database management, and AI model integration while exploring cloud-native deployment and automation practices.',
    skills: ['AWS Cloud Service', 'EC2', 'RDS', 'Lambda', 'Bedrock', 'Lightsail'],
    icon: 'D',
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__inner">

        {/* Header */}
        <div className="experience__header">
          <span className="experience__label">MY JOURNEY</span>
          <h2 className="experience__heading">Work Experience</h2>
          <p className="experience__sub">
            A timeline of roles where I've built, shipped, and scaled real automation solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="experience__grid">
          {experiences.map((exp, idx) => (
            <div className="exp-card" key={idx}>
              <div className="exp-card__glow" />

              {/* Card Header */}
              <div className="exp-card__header">
                <div className="exp-card__avatar">{exp.icon}</div>
                <div className="exp-card__title-group">
                  <h3 className="exp-card__role">{exp.role}</h3>
                  <p className="exp-card__company">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="exp-card__meta">
                <span className="exp-card__period">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {exp.period}
                </span>
                <span className="exp-card__type">{exp.type}</span>
              </div>

              {/* Description */}
              <p className="exp-card__desc">{exp.desc}</p>

              {/* Skills */}
              <div className="exp-card__skills">
                {exp.skills.map((skill) => (
                  <span className="exp-skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;