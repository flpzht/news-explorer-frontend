import { useContext } from 'react';

import { SavedArticlesContext } from '@/contexts/SavedArticlesContext';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';
import NewsCardList from '@/components/NewsCardList/NewsCardList';

import '@/components/SavedNews/SavedNews.css';

function getKeywordsText(articles) {
  const counts = articles.reduce((acc, article) => {
    acc[article.keyword] = (acc[article.keyword] || 0) + 1;
    return acc;
  }, {});

  const keywords = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);

  if (keywords.length <= 3) return keywords.join(', ');

  return `${keywords.slice(0, 2).join(', ')}, e mais ${keywords.length - 2}`;
}

function SavedNews() {
  const { savedArticles } = useContext(SavedArticlesContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="saved-news">
      <section className="saved-news__hero">
        <p className="saved-news__eyebrow">Artigos salvos</p>
        <h1 className="saved-news__title">{currentUser.name}, você tem {savedArticles.length} artigos salvos</h1>
        <p className="saved-news__keywords">Por palavras-chave: {getKeywordsText(savedArticles)}</p>
      </section>
      <NewsCardList isSavedNewsPage searchStatus="success" articles={savedArticles} />
    </main>
  );
}

export default SavedNews;