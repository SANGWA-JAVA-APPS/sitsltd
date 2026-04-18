import { APP_NAME } from '../../../Confs';
import heroImg from '../../../assets/hero.png';
import Jobs from '../../components/Jobs/Jobs';
import './Home.scss';

const SERVICE_CARDS = [
  { icon: '💻', title: 'Web Development',  desc: 'Custom web apps built with modern frameworks tailored to your needs.' },
  { icon: '☁️', title: 'Cloud Solutions',  desc: 'Scalable cloud infrastructure, migration and managed services.' },
  { icon: '🔒', title: 'Cybersecurity',    desc: 'Security audits, penetration testing and compliance consulting.' },
  { icon: '📱', title: 'Mobile Apps',      desc: 'Native and cross-platform mobile apps for iOS and Android.' },
  { icon: '📊', title: 'Data Analytics',   desc: 'Transform raw data into actionable business intelligence.' },
  { icon: '🛠️', title: 'IT Consulting',    desc: 'Strategic advisory to align your technology with business goals.' },
];

const CLIENTS = Array.from({ length: 6 }, (_, i) => i + 1);

function Home() {
  return (
    <div className="home">

      {/* ── Slider / Hero ────────────────────────────────────────────── */}
      <section className="home__hero">
        <div className="home__hero-inner container">
          <div className="home__hero-text">
            <h1 className="home__hero-title">
              Empowering Business<br />Through Technology
            </h1>
            <p className="home__hero-sub">
              {APP_NAME} delivers end-to-end IT solutions — from custom software
              and cloud infrastructure to cybersecurity and strategic consulting.
            </p>
            <div className="home__hero-actions">
              <a href="/services" className="btn btn-warning btn-lg me-3">
                Our Services
              </a>
              <a href="/contact" className="btn btn-outline-light btn-lg">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="home__hero-img-wrap">
            <img src={heroImg} alt="IT Solutions" className="home__hero-img" />
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="home__stats py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { value: '200+', label: 'Projects Delivered'  },
              { value: '50+',  label: 'Clients Served'      },
              { value: '10+',  label: 'Years of Experience' },
              { value: '30+',  label: 'Open Positions'      },
            ].map(stat => (
              <div key={stat.label} className="col-6 col-md-3">
                <div className="home__stat-card">
                  <span className="home__stat-value">{stat.value}</span>
                  <span className="home__stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services (2 rows × 3 cols) ───────────────────────────────── */}
      <section className="home__services py-5">
        <div className="container">
          <h2 className="home__section-title text-center mb-2">What We Do</h2>
          <p className="home__section-sub text-center text-muted mb-5">
            A full spectrum of IT services for the modern enterprise.
          </p>
          <div className="row g-4">
            {SERVICE_CARDS.map(card => (
              <div key={card.title} className="col-12 col-md-4">
                <div className="home__service-card h-100">
                  <span className="home__service-card-icon">{card.icon}</span>
                  <h5 className="home__service-card-title">{card.title}</h5>
                  <p className="home__service-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Clients ──────────────────────────────────────────────── */}
      <section className="home__clients py-5">
        <div className="container">
          <h2 className="home__section-title text-center mb-2">Our Clients</h2>
          <p className="home__section-sub text-center text-muted mb-5">
            Trusted by leading organisations across the region.
          </p>
          <div className="row g-4 justify-content-center">
            {CLIENTS.map(n => (
              <div key={n} className="col-6 col-sm-4 col-md-2 d-flex justify-content-center">
                <div className="home__client-logo">
                  <span className="home__client-placeholder">Client {n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jobs ─────────────────────────────────────────────────────── */}
      <section id="jobs" className="home__jobs py-5">
        <div className="container">
          <Jobs />
        </div>
      </section>

    </div>
  );
}

export default Home;
