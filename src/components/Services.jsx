import './Services.css';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1h1a2 2 0 012 2v3a2 2 0 01-2 2h-1v1a4 4 0 01-8 0v-1H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a4 4 0 014-4z"/>
        <circle cx="9" cy="10" r="1" fill="#3b82f6"/>
        <circle cx="15" cy="10" r="1" fill="#3b82f6"/>
        <path d="M9 15s1 1.5 3 1.5 3-1.5 3-1.5"/>
      </svg>
    ),
    title: 'AI Agent Development',
    desc: 'Build intelligent AI agents that can reason, automate tasks, interact with users, and integrate seamlessly with your business tools.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="5" height="5" rx="1"/>
        <rect x="16" y="3" width="5" height="5" rx="1"/>
        <rect x="3" y="16" width="5" height="5" rx="1"/>
        <path d="M8 5.5h4a1 1 0 011 1V10"/>
        <path d="M13 10h3.5a1 1 0 011 1v2.5"/>
        <path d="M8 18.5h4"/>
      </svg>
    ),
    title: 'Workflow Automation',
    desc: 'Automate repetitive business processes using n8n, Power Automate, and no-code/low-code platforms to save time and improve efficiency.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: 'API Integration',
    desc: 'Connect CRMs, ERPs, payment gateways, cloud platforms, and third-party applications through secure API and webhook integrations.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z"/>
        <path d="M19 13l.75 1.75L21.5 15.5l-1.75.75L19 18l-.75-1.75L16.5 15.5l1.75-.75L19 13z"/>
        <path d="M5 17l.5 1.25L6.75 19l-1.25.5L5 21l-.5-1.25L3.25 19l1.25-.5L5 17z"/>
      </svg>
    ),
    title: 'LLM & AI Integration',
    desc: 'Integrate OpenAI, Claude, Gemini, and other large language models to build AI-powered assistants, copilots, and intelligent business workflows.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
    title: 'WhatsApp & Business Automation',
    desc: 'Create automated WhatsApp solutions for lead management, customer support, notifications, reminders, and business communication.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
      </svg>
    ),
    title: 'RPA & Process Automation',
    desc: 'Eliminate manual work with intelligent RPA solutions that automate repetitive tasks, improve productivity, and streamline business operations.',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__header">
        <span className="services__label">SERVICES</span>
        <h2 className="services__heading">What I Do</h2>
        <p className="services__sub">
          End-to-end automation solutions to launch, scale, and grow your business.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;