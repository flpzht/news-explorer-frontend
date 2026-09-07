import Navigation from '@/components/Navigation/Navigation';

import '@/components/SavedNewsHeader/SavedNewsHeader.css';

function SavedNewsHeader() {
    return (
        <section className="saved-news-header">
            <p className="saved-news-header__logo">News Explorer</p>
            <Navigation />
        </section>
    );
}

export default SavedNewsHeader;