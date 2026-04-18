import './About.scss';

function About() {
  return (
    <div className="about-page">
      <section className="about-page__hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Who we are and what drives us.</p>
        </div>
      </section>

      <section className="about-page__body py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-md-6">
              <h2 className="about-page__heading">Trusted IT Partner Since 2014</h2>
              <p>
                SIST SLTD is a premier information technology company delivering
                end-to-end digital solutions across Africa. We combine deep
                technical expertise with a passion for innovation to help
                organisations modernise their operations and achieve sustainable growth.
              </p>
              <p>
                Our multidisciplinary team of engineers, designers and strategists
                works collaboratively with clients — from startups to large
                enterprises — to build reliable, secure and scalable technology
                platforms.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="about-page__values">
                {[
                  { title: 'Integrity',    desc: 'We act with transparency and honesty in everything we do.' },
                  { title: 'Innovation',   desc: 'We embrace emerging technologies to deliver forward-thinking solutions.' },
                  { title: 'Excellence',   desc: 'We hold ourselves to the highest standards of quality and delivery.' },
                  { title: 'Collaboration',desc: 'We succeed together — with our clients and within our teams.' },
                ].map(v => (
                  <div key={v.title} className="about-page__value-item">
                    <strong>{v.title}:</strong> {v.desc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
