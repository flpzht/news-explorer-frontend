import { useContext } from 'react';

import { SavedArticlesContext } from '@/contexts/SavedArticlesContext.jsx';
import NewsCardList from '@/components/NewsCardList/NewsCardList';

import '@/components/SavedNews/SavedNews.css';

function getKeywordsText(articles) {
  const keywords = [...new Set(articles.map((article) => article.keyword).filter(Boolean))];

  if (keywords.length === 0) return '';
  if (keywords.length <= 2) return keywords.join(', ');

  return `${keywords.slice(0, 2).join(', ')}, e ${keywords.length - 2} outras`;
}

function SavedNews() {
  const { savedArticles } = useContext(SavedArticlesContext);

  return (
    <main className="saved-news">
      <section className="saved-news__hero">
        <p className="saved-news__eyebrow">Artigos salvos</p>
        <h1 className="saved-news__title">Elise, você tem {savedArticles.length} artigos salvos</h1>
        <p className="saved-news__keywords">Por palavras-chave: {getKeywordsText(savedArticles)}</p>
      </section>
      <NewsCardList isSavedNewsPage searchStatus="success" articles={savedArticles} />
    </main>
  );
}

export default SavedNews;