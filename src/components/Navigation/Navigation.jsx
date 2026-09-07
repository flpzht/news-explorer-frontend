import { Link, useLocation } from 'react-router-dom';

import logoutIconMain from '@/images/logout-icon-main.svg';
import logoutIconSavedNews from '@/images/logout-icon-saved-news.svg';

import '@/components/Navigation/Navigation.css';

const isLoggedIn = true; // Simulação do estado de login

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link
        to="/"
        className={`navigation__link ${location.pathname === '/' ? 'navigation__link_active' : 'navigation__link_inactive'}`}
      >
        Início
      </Link>

      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`navigation__link ${location.pathname === '/saved-news' ? 'navigation__link_saved-news-active' : ''}`}
        >
          Artigos salvos
        </Link>
      )}

      {isLoggedIn ? (
      <button className={`navigation__signout ${location.pathname === '/' ? 'navigation__signout_main' : 'navigation__signout_saved-news'}`} type="button">
        <p className={`navigation__signout-text ${location.pathname === '/' ? 'navigation__signout_main-text' : 'navigation__signout_saved-news-text'}`}>Elise</p>
        <img className="navigation__logout-icon_main" src={location.pathname === '/' ? logoutIconMain : logoutIconSavedNews} alt="Sair" />    
      </button>  
      ) : (
      <button className="navigation__signin" type='button'>
        <p className="navigation__signin-text">Entrar</p>
        </button>
      )}
    </nav>
  );
}

export default Navigation;