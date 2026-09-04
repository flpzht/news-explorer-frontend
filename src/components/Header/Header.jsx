import Navigation from '@/components/Navigation/Navigation';

import '@/components/Header/Header.css';

function Header() {
  return (
    <header className="header">
      <p className="header__logo">News Explorer</p>
      <Navigation />
    </header>
  );
}

export default Header;
