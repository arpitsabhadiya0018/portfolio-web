import { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Arpit transformed our web platform completely. Our conversion rate doubled in just 60 days. He genuinely cares about results and delivers beyond expectations.",
    name: 'Priya S.',
    role: 'Founder, FashionHub',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: "Working with Arpit was a game-changer. He built our entire SaaS dashboard from scratch — clean code, stunning UI, and delivered on time. Highly recommend!",
    name: 'Rahul M.',
    role: 'CTO, DataSync',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: "The portfolio site Arpit built for me gets compliments from every client. It's fast, beautiful, and ranks on Google. Best investment I've made for my brand.",
    name: 'Sneha K.',
    role: 'Freelance Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: "Arpit's attention to detail is unmatched. He redesigned our e-commerce store and our revenue grew by 40% in the first month. Absolutely brilliant developer.",
    name: 'Vikram P.',
    role: 'CEO, ShopEasy',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    quote: "From API integration to pixel-perfect UI, Arpit handled everything professionally. Our app launch was smooth and the feedback from users has been incredible.",
    name: 'Ananya R.',
    role: 'Product Manager, TechFlow',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[active];

  return (
    <section className="testimonials" id="testimonials">
      {/* Header */}
      <div className="testimonials__header">
        <span className="testimonials__label">TESTIMONIALS</span>
        <h2 className="testimonials__heading">Clients Feedback</h2>
        <p className="testimonials__sub">Real results from real clients who trusted the process.</p>
      </div>

      {/* Card */}
      <div className="testimonials__card">
        {/* Quote icon */}
        <div className="testimonials__quote-icon">
          <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
            <path d="M0 40V24C0 10.745 8.053 3.16 24.16 1.28L26.24 5.44C19.307 7.04 15.627 10.88 15.2 16.96H22.4V40H0ZM25.6 40V24C25.6 10.745 33.653 3.16 49.76 1.28L51.84 5.44C44.907 7.04 41.227 10.88 40.8 16.96H48V40H25.6Z" fill="#3b82f6" fillOpacity="0.25"/>
          </svg>
        </div>

        {/* Stars */}
        <div className="testimonials__stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <p className="testimonials__text">"{t.quote}"</p>

        {/* Avatar */}
        <div className="testimonials__author">
          <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
          <div>
            <p className="testimonials__name">{t.name}</p>
            <p className="testimonials__role">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="testimonials__nav">
        <button className="nav-btn" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot${i === active ? ' dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button className="nav-btn" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;