import { useState } from 'react';

import { isLoggedIn } from '@/utils/mockAuth.js'; // Simulação do estado de login

import '@/components/NewsCard/NewsCard.css';

function NewsCard({ card, isSavedNewsPage }) {
    const [isSaved, setIsSaved] = useState(false);

    function handleSaveClick() {
        setIsSaved(!isSaved);
    }

    return (
        <article className="news-card">
            <img className="news-card__image" src={card.urlToImage} alt={card.title} />

            <div className="news-card__container">
                <p className="news-card__date">{card.publishedAt}</p>

                <div className="news-card__container_content">
                    <h3 className="news-card__title">{card.title}</h3>
                    <p className="news-card__description">{card.description}</p>
                </div>

                <p className="news-card__source">{card.source}</p>
            </div>

            {isSavedNewsPage ? (
                <div className="news-card__button-content">
                    <button className="news-card__button news-card__button_remove" type='button' aria-label='Remover dos salvos'>
                    </button>
                    <span className="news-card__tooltip">Remove from saved</span>
                    <span className="news-card__key-word">KeyWord</span>
                </div>
            ) : (
                <div className="news-card__button-content">

                    <button className={`news-card__button news-card__button_bookmark ${isLoggedIn && isSaved ? 'news-card__button_bookmark_active' : ''}`}
                        onClick={handleSaveClick}
                        type="button" aria-label='Salvar artigo'>
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