import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pd-notfound">
        <h2>Project not found</h2>
        <Link to="/" className="pd-back-btn">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="pd-page">
      {/* Back button */}
      <div className="pd-topbar">
        <Link to="/" className="pd-back-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Hero image */}
      <div className="pd-hero">
        <img src={project.image} alt={project.title} className="pd-hero__img" />
        <div className="pd-hero__overlay" />
        <div className="pd-hero__content">
          <span className="pd-tag">{project.tag}</span>
          <h1 className="pd-title">{project.title}</h1>
          <div className="pd-meta">
            <span className="pd-company">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              {project.company}
            </span>
            <span className="pd-period">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {project.period}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pd-body">
        <div className="pd-body__inner">

          {/* Left column */}
          <div className="pd-left">

            {/* Overview */}
            <div className="pd-section">
              <h2 className="pd-section__title">
                <span className="pd-section__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </span>
                Project Overview
              </h2>
              <p className="pd-section__text">{project.overview}</p>
            </div>

            {/* Challenge */}
            <div className="pd-section">
              <h2 className="pd-section__title">
                <span className="pd-section__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </span>
                The Challenge
              </h2>
              <p className="pd-section__text">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="pd-section">
              <h2 className="pd-section__title">
                <span className="pd-section__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </span>
                The Solution
              </h2>
              <p className="pd-section__text">{project.solution}</p>
            </div>

            {/* Key Highlights */}
            <div className="pd-section">
              <h2 className="pd-section__title">
                <span className="pd-section__icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </span>
                Key Highlights
              </h2>
              <ul className="pd-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right column */}
          <div className="pd-right">

            {/* Results card */}
            <div className="pd-results-card">
              <h3 className="pd-results-card__title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                  <polyline points="16 7 22 7 22 13"/>
                </svg>
                Results Achieved
              </h3>
              <ul className="pd-results-list">
                {project.results.map((r, i) => (
                  <li key={i}>
                    <span className="pd-result-dot" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack card */}
            <div className="pd-tech-card">
              <h3 className="pd-tech-card__title">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                Tech Stack
              </h3>
              <div className="pd-tech-pills">
                {project.tech.map((t) => (
                  <span className="pd-tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {project.liveLink && project.liveLink !== '#' && (
              <a href={project.liveLink} target="_blank" rel="noreferrer" className="pd-live-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                View Live Project
              </a>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;