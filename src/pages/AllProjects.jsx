import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './AllProjects.css';

const AllProjects = () => {
  return (
    <div className="ap-page">
      {/* Top bar */}
      <div className="ap-topbar">
        <Link to="/" className="ap-back-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="ap-inner">
        {/* Header */}
        <div className="ap-header">
          <span className="ap-label">ALL PROJECTS</span>
          <h1 className="ap-heading">Complete Project Portfolio</h1>
          <p className="ap-sub">
            All 12 automation projects — from AI agents to RPA bots, workflow automation to API integrations.
          </p>
        </div>

        {/* Row 1: projects 1-3 */}
        <div className="ap-row ap-row--3">
          {projects.slice(0, 3).map((p) => (
            <div className="ap-card" key={p.id}>
              <div className="ap-card__img-wrap">
                <img src={p.image} alt={p.title} className="ap-card__img" />
                <div className="ap-card__overlay">
                  <Link to={`/project/${p.id}`} className="ap-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="ap-card__number">{p.number}</span>
                <span className="ap-card__tag">{p.tag}</span>
              </div>
              <div className="ap-card__body">
                <h3 className="ap-card__title">{p.title}</h3>
                <p className="ap-card__desc">{p.shortDesc}</p>
                <div className="ap-card__tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span className="ap-tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: projects 4-6 */}
        <div className="ap-row ap-row--3">
          {projects.slice(3, 6).map((p) => (
            <div className="ap-card" key={p.id}>
              <div className="ap-card__img-wrap">
                <img src={p.image} alt={p.title} className="ap-card__img" />
                <div className="ap-card__overlay">
                  <Link to={`/project/${p.id}`} className="ap-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="ap-card__number">{p.number}</span>
                <span className="ap-card__tag">{p.tag}</span>
              </div>
              <div className="ap-card__body">
                <h3 className="ap-card__title">{p.title}</h3>
                <p className="ap-card__desc">{p.shortDesc}</p>
                <div className="ap-card__tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span className="ap-tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3: projects 7-9 */}
        <div className="ap-row ap-row--3">
          {projects.slice(6, 9).map((p) => (
            <div className="ap-card" key={p.id}>
              <div className="ap-card__img-wrap">
                <img src={p.image} alt={p.title} className="ap-card__img" />
                <div className="ap-card__overlay">
                  <Link to={`/project/${p.id}`} className="ap-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="ap-card__number">{p.number}</span>
                <span className="ap-card__tag">{p.tag}</span>
              </div>
              <div className="ap-card__body">
                <h3 className="ap-card__title">{p.title}</h3>
                <p className="ap-card__desc">{p.shortDesc}</p>
                <div className="ap-card__tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span className="ap-tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 4: projects 10-12 */}
        <div className="ap-row ap-row--3">
          {projects.slice(9, 12).map((p) => (
            <div className="ap-card" key={p.id}>
              <div className="ap-card__img-wrap">
                <img src={p.image} alt={p.title} className="ap-card__img" />
                <div className="ap-card__overlay">
                  <Link to={`/project/${p.id}`} className="ap-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="ap-card__number">{p.number}</span>
                <span className="ap-card__tag">{p.tag}</span>
              </div>
              <div className="ap-card__body">
                <h3 className="ap-card__title">{p.title}</h3>
                <p className="ap-card__desc">{p.shortDesc}</p>
                <div className="ap-card__tech">
                  {p.tech.slice(0, 4).map((t) => (
                    <span className="ap-tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AllProjects;