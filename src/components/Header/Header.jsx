import Navigation from '@/components/Navigation/Navigation';

import '@/components/Header/Header.css';

function Header({onOpenPopup}) {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation onOpenPopup={onOpenPopup}/>
    </header>
  );
}

export default Header;
