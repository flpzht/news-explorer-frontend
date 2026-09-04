import { Link, useLocation } from 'react-router-dom';

import '@/components/Navigation/Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link
        to="/"
        className={`navigation__link ${location.pathname === '/' ? 'navigation__link_active' : ''}`}
      >
        Início
      </Link>

      <Link
        to="/saved-news"
        className={`navigation__link ${location.pathname === '/saved-news' ? 'navigation__link_active' : ''}`}
      >
        Artigos salvos
      </Link>

      <button className="navigation-signin" type='button'>Entrar</button>

      <button className="navigation__signout" type="button">Usuário</button>
    </nav>
  );
}

export default Navigation;