import { useContext } from 'react';

import { isLoggedIn } from '@/utils/mockAuth.js'; // Simulação do estado de login
import { SavedArticlesContext } from '@/contexts/SavedArticlesContext.jsx';

import '@/components/NewsCard/NewsCard.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function NewsCard({ card, isSavedNewsPage, query }) {
  const { isArticleSaved, saveArticle, removeArticle } = useContext(SavedArticlesContext);
  const isSaved = isArticleSaved(card);

  function handleSaveClick() {
    if (isSaved) {
      removeArticle(card);
    } else {
      saveArticle(card, query);
    }
  }

  function handleRemoveClick() {
    removeArticle(card);
  }

  return (
    <article className="news-card">
      <img className="news-card__image" src={card.urlToImage} alt={card.title} />

      <div className="news-card__container">
        <p className="news-card__date">{formatDate(card.publishedAt)}</p>

        <div className="news-card__container_content">
          <h3 className="news-card__title">{card.title}</h3>
          <p className="news-card__description">{card.description}</p>
        </div>

        <p className="news-card__source">{card.source?.name}</p>
      </div>

      {isSavedNewsPage ? (
        <div className="news-card__button-content">
          <button className="news-card__button news-card__button_remove" type="button" aria-label="Remover dos salvos" onClick={handleRemoveClick}>
          </button>
          <span className="news-card__tooltip">Remove from saved</span>
          <span className="news-card__key-word">{card.keyword}</span>
        </div>
      ) : (
        <div className="news-card__button-content">

          <button className={`news-card__button news-card__button_bookmark ${isLoggedIn && isSaved ? 'news-card__button_bookmark_active' : ''}`}
            onClick={isLoggedIn ? handleSaveClick : undefined}
            type="button" aria-label="Salvar artigo">
          </button>

          {!isLoggedIn && (
            <span className="news-card__tooltip">Sign in to save articles</span>
          )}
        </div>
      )}

    </article>
  );
}

export default NewsCard;