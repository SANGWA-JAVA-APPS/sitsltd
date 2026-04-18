import { NavLink } from 'react-router-dom';
import { APP_NAME } from '../../../Confs';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">

          {/* ── Mission ─────────────────────────────────────────────── */}
          <div className="col-12 col-md-4">
            <h5 className="footer__heading">Our Mission</h5>
            <p className="footer__text">
              To deliver innovative, reliable and scalable IT solutions that
              empower businesses to thrive in a rapidly evolving digital
              landscape. We are committed to excellence in every project we
              undertake.
            </p>
          </div>

          {/* ── Vision ──────────────────────────────────────────────── */}
          <div className="col-12 col-md-4">
            <h5 className="footer__heading">Our Vision</h5>
            <p className="footer__text">
              To be the leading technology partner of choice across Africa and
              beyond — driving digital transformation through cutting-edge
              software development, cloud infrastructure and consulting
              services.
            </p>
          </div>

          {/* ── Quick links ─────────────────────────────────────────── */}
          <div className="col-12 col-md-4">
            <h5 className="footer__heading">Quick Links</h5>
            <ul className="footer__links list-unstyled">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
          </div>

        </div>

        <hr className="footer__divider" />

        <p className="footer__copy text-center mb-0">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
