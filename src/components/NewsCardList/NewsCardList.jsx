import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NewsCard from '@/components/NewsCard/NewsCard';

import notFoundIcon from '@/images/not-found-image.svg';

import '@/components/NewsCardList/NewsCardList.css';

const CARDS_PER_PAGE = 3;

function NewsCardList({ isSavedNewsPage, searchStatus, articles, query }) {
  const location = useLocation();
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);

  useEffect(() => {
    setVisibleCount(CARDS_PER_PAGE);
  }, [articles]);

  function handleShowMore() {
    setVisibleCount((prevCount) => prevCount + CARDS_PER_PAGE);
  }

  if (searchStatus === 'empty') {
    return (
      <section className="news-card-list news-card-list--no-results">
        <img className="news-card-list__not-found-icon" src={notFoundIcon} alt="Nada encontrado" />
        <h2 className="news-card-list__not-found-title">Nada encontrado</h2>
        <p className="news-card-list__not-found-text">Desculpe, mas nada corresponde aos seus termos de pesquisa.</p>
      </section>
    );
  }

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < articles.length;

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {location.pathname === '/' ? <h2 className="news-card-list__title">Procurar resultados</h2> : ''}
        <ul className="news-card-list__items">
          {visibleArticles.map((article, index) => (
            <li key={`${article.url}-${index}`} className="news-card-list__item">
              <NewsCard card={article} isSavedNewsPage={isSavedNewsPage} query={query} />
            </li>
          ))}
        </ul>
      </div>

      {hasMoreArticles && (
        <button className="news-card-list__button" type="button" onClick={handleShowMore}>
          Mostrar mais
        </button>
      )}
    </section>
  );
}

export default NewsCardList;