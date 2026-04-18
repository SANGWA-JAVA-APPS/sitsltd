import { NavLink } from 'react-router-dom';
import { APP_NAME } from '../../../Confs';
import './Header.scss';

const NAV_LINKS = [
  { to: '/',          label: 'Home',       end: true  },
  { to: '/services',  label: 'Services',   end: false },
  { to: '/about',     label: 'About Us',   end: false },
  { to: '/contact',   label: 'Contact Us', end: false },
];

function Header() {
  return (
    <nav className="header navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand header__brand" to="/">
          {APP_NAME}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map(link => (
              <li key={link.to} className="nav-item">
                <NavLink className="nav-link" to={link.to} end={link.end}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
