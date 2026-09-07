import '@/components/NewsCard/NewsCard.css';

function NewsCard({ card, isSavedNewsPage }) {
    return (
        <article className="news-card">
            <img src={card.urlToImage} alt={card.title} className="news-card__image" />

            <div className="news-card__content">
                <p className="news-card__date">{card.publishedAt}</p>
                <h3 className="news-card__title">{card.title}</h3>
                <p className="news-card__description">{card.description}</p>
                <p className="news-card__source">{card.source}</p>
            </div>

            {isSavedNewsPage ? (
                <button className="news-card__remove-button" type='button' aria-label='Remover dos salvos'>
                    <span className="news-card__tooltip">Remover dos salvos</span>
                </button>
            ) : (
            <button className="news-card__save-button" type="button" aria-label='Salvar artigo'>
                <span className="news-card__tooltip">Faça login para salvar os artigos</span>
            </button>
            )}

        </article>
    );
}

export default NewsCard;