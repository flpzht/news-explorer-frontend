import { Link, useLocation } from 'react-router-dom';

import '@/components/Navigation/Navigation.css';

const isLoggedIn = true; // Simulação do estado de login

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

      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`navigation__link ${location.pathname === '/saved-news' ? 'navigation__link_active' : ''}`}
        >
          Artigos salvos
        </Link>
      )}

      {isLoggedIn ? (
      <button className="navigation__signout" type="button">Usuário</button>
      ) : (
      <button className="navigation__signin" type='button'>Entrar</button>
      )}
    </nav>
  );
}

export default Navigation;