import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
  const featured = projects.slice(0, 6);

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">

        {/* Header */}
        <div className="portfolio__header">
          <span className="portfolio__label">PORTFOLIO</span>
          <h2 className="portfolio__heading">My Latest Projects</h2>
          <p className="portfolio__sub">
            Real automation solutions built for real businesses — saving time, cutting costs, and scaling operations.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="portfolio__row portfolio__row--3">
          {featured.slice(0, 3).map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-card__img-wrap">
                <img src={p.image} alt={p.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <Link to={`/project/${p.id}`} className="project-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="project-card__number">{p.number}</span>
                <span className="project-card__tag">{p.tag}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <ul className="project-card__highlights">
                  {p.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="project-card__tech">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="portfolio__row portfolio__row--3">
          {featured.slice(3, 6).map((p) => (
            <div className="project-card" key={p.id}>
              <div className="project-card__img-wrap">
                <img src={p.image} alt={p.title} className="project-card__img" />
                <div className="project-card__overlay">
                  <Link to={`/project/${p.id}`} className="project-card__view-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    View Project
                  </Link>
                </div>
                <span className="project-card__number">{p.number}</span>
                <span className="project-card__tag">{p.tag}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{p.title}</h3>
                <ul className="project-card__highlights">
                  {p.highlights.slice(0, 3).map((h, i) => (
                    <li key={i}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="project-card__tech">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More button */}
        <div className="portfolio__view-more">
          <Link to="/projects" className="portfolio__view-more-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;