import Navigation from '@/components/Navigation/Navigation';

import '@/components/Header/Header.css';

function Header({ onOpenPopup, onSignOut }) {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation onOpenPopup={onOpenPopup} onSignOut={onSignOut} />
    </header>
  );
}

export default Header;
