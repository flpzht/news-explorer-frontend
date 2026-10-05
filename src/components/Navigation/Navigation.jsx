import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { isLoggedIn } from '@/utils/mockAuth.js'; // Simulação do estado de login

import logoutIconMain from '@/images/logout-icon-main.svg';
import logoutIconSavedNews from '@/images/logout-icon-saved-news.svg';

import '@/components/Navigation/Navigation.css';

function Navigation({ onOpenPopup }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');

     function handleViewportChange(event) {
      if (!event.matches) {
        setIsMenuOpen(false);
      }
    }

    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navigation">

      <button className={`navigation__menu-button 
      ${location.pathname === '/' ? 
        `${!isMenuOpen ? 'navigation__menu-button_type_to-open_main' : 'navigation__menu-button_type_to-close_main'}`
         : 
        `${!isMenuOpen ? 'navigation__menu-button_type_to-open_saved-news' : 'navigation__menu-button_type_to-close_saved-news'}`
        }`} 

      type='button'
      onClick={isMenuOpen ? handleCloseMenu : handleOpenMenu}
      aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'} 
      />


      <div className={location.pathname === '/' ? 
        `${!isMenuOpen ? 'navigation__links' : 'navigation__links_opened_main'}`
         : 
         `${!isMenuOpen ? 'navigation__links' : 'navigation__links_opened_saved-news'}`} 
         >

      <Link
        to="/"
        className={`navigation__link ${location.pathname === '/' ? 'navigation__link_active' : 'navigation__link_inactive'}`}
        onClick={handleCloseMenu}
      >
        Início
      </Link>

      {isLoggedIn && (
        <Link
          to="/saved-news"
          className={`navigation__link ${location.pathname === '/saved-news' ? 'navigation__link_saved-news-active' : ''}`}
          onClick={handleCloseMenu}
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
        location.pathname === '/' && (
          <button className="navigation__signin" type='button' onClick={() => { onOpenPopup(); handleCloseMenu(); }}>
            <p className="navigation__signin-text">Entrar</p>
          </button>
        )
      )}

      </div>
    </nav>
  );
}

export default Navigation;