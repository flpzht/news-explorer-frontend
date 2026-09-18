import { useLocation } from 'react-router-dom';

import NewsCard from '@/components/NewsCard/NewsCard';

import notFoundIcon from '@/images/not-found-image.svg';

import '@/components/NewsCardList/NewsCardList.css';


function NewsCardList({ isSavedNewsPage, searchStatus, articles }) {
    const location = useLocation();

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
                    {articles.map((article, index) => (
                        <li key={`${article.id}-${index}`}className="news-card-list__item">
                            <NewsCard card={article} isSavedNewsPage={isSavedNewsPage} />
                        </li>
                    ))}
                </ul>
            </div>
            <button className="news-card-list__button" type="button">Mostrar mais</button>

        </section>
    );
}

export default NewsCardList;