import './Services.scss';

const SERVICE_CARDS = [
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Custom web applications built with modern frameworks, tailored to your business needs.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure design, migration and management on AWS, Azure and GCP.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    desc: 'End-to-end security audits, penetration testing and compliance consulting.',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android that users love.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Turn raw data into actionable insights with our BI tools and analytics pipelines.',
  },
  {
    icon: '🛠️',
    title: 'IT Consulting',
    desc: 'Strategic technology advisory to align your IT investments with business objectives.',
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-page__hero">
        <div className="container">
          <h1 className="services-page__title">Our Services</h1>
          <p className="services-page__sub">
            Comprehensive IT services designed to accelerate your digital journey.
          </p>
        </div>
      </section>

      <section className="services-page__cards py-5">
        <div className="container">
          <div className="row g-4">
            {SERVICE_CARDS.map(card => (
              <div key={card.title} className="col-12 col-md-4">
                <div className="services-page__card h-100">
                  <span className="services-page__card-icon">{card.icon}</span>
                  <h5 className="services-page__card-title">{card.title}</h5>
                  <p className="services-page__card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
