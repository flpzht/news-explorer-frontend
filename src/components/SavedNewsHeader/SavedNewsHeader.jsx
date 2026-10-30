import Navigation from '@/components/Navigation/Navigation';

import '@/components/SavedNewsHeader/SavedNewsHeader.css';

function SavedNewsHeader({ onSignOut }) {
    return (
        <section className="saved-news-header">
            <p className="saved-news-header__logo">News Explorer</p>
            <Navigation onSignOut={onSignOut} />
        </section>
    );
}

export default SavedNewsHeader;