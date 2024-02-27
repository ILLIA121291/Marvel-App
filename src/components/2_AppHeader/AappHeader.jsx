import { NavLink } from 'react-router-dom';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <NavLink end to="/">
          <span>Marvel</span> information portal
        </NavLink>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' nav-activated' : '')}>
              Characters
            </NavLink>
          </li>

          <li>
            <NavLink to="/comics" className={({ isActive }) => 'nav-link' + (isActive ? ' nav-activated' : '')}>
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
