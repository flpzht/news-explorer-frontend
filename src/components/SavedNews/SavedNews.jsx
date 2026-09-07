import NewsCardList from '@/components/NewsCardList/NewsCardList';

import '@/components/SavedNews/SavedNews.css';

function SavedNews() {
    return (
        <main className="saved-news">
            <section className="saved-news__hero">
                <p className="saved-news__eyebrow">Artigos salvos</p>
                <h1 className="saved-news__title">Elise, você tem 5 artigos salvos</h1>
                <p className="saved-news__keywords">Por palavras-chaves: Natureza, Yellowstone, e outras 2</p>
            </section>
            <NewsCardList isSavedNewsPage />
        </main>
    );
}

export default SavedNews;