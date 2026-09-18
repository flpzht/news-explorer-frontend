import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import NewsCard from '@/components/NewsCard/NewsCard';

import notFoundIcon from '@/images/not-found-image.svg';

import '@/components/NewsCardList/NewsCardList.css';


const CARDS_PER_PAGE = 3;

function NewsCardList({ isSavedNewsPage, searchStatus, articles }) {
    const location = useLocation();
    const [visibleArticles, setVisibleArticles] = useState(CARDS_PER_PAGE);

    useEffect(() => {
        setVisibleArticles(CARDS_PER_PAGE);
    }, [articles]);

    function handleShowMore() {
        setVisibleArticles(prevVisibleArticles => prevVisibleArticles + CARDS_PER_PAGE);
    }

    const visibleArticlesSlice = articles.slice(0, visibleArticles);
    const hasMoreArticles = visibleArticles < articles.length;

    if (searchStatus === 'empty') {
        return (
            <section className="news-card-list news-card-list--no-results">
                <img className="news-card-list__not-found-icon" src={notFoundIcon} alt="Nada encontrado" />
                <h2 className="news-card-list__not-found-title">Nada encontrado</h2>
                <p className="news-card-list__not-found-text">Desculpe, mas nada corresponde aos seus termos de pesquisa.</p>
            </section>
        );
    }

    return (
        <section className="news-card-list">
            <div className="news-card-list__container">
                {location.pathname === '/' ? <h2 className="news-card-list__title">Procurar resultados</h2> : ''}
                <ul className="news-card-list__items">
                    {visibleArticlesSlice.map((article, index) => (
                        <li key={`${article.id}-${index}`}className="news-card-list__item">
                            <NewsCard card={article} isSavedNewsPage={isSavedNewsPage} />
                        </li>
                    ))}
                </ul>
            </div>

            {hasMoreArticles && (
            <button className="news-card-list__button" type="button" onClick={handleShowMore}>Mostrar mais</button>
            )}
        </section>
    );
}

export default NewsCardList;