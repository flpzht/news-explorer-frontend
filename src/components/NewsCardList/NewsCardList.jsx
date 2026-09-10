import NewsCard from '@/components/NewsCard/NewsCard';

import newsCardImage01 from '@/images/news-card-image01.png';
import notFoundIcon from '@/images/not-found-image.svg';

import '@/components/NewsCardList/NewsCardList.css';

const news = [
    {
    id: 1,
    source: 'treehugger',
    title: 'Todo mundo precisa de um "Lugar Especial para Sentar" especial na naturezaza',
    description: 'Desde que li o influente livro de Richard Louv, "O Último Filho na Floresta", a ideia de ter um "lugar para sentar" especial me pegou de jeito. This advice, which Louv attributes to natureza...',
    publishedAt: '4 de novembro de 2020',
    urlToImage: newsCardImage01,
  },
  {
    id: 2,
    source: 'national geographic',
    title: 'A naturezaza faz de você uma pessoa melhor',
    description: 'Todos nós sabemos como a natureza nos faz bem. Nós a conhecemos há milênios: o som dos oceanos, os aromas de uma floresta, a forma como a luz do sol dança através das folhas.',
    publishedAt: '19 de fevereiro de 2019',
    urlToImage: newsCardImage01,
  },
  {
    id: 3,
    source: 'National parques traveler',
    title: 'Grand Teton renova a histórica Crest Trail',
    description: '"A ligação entre as trilhas de Cascade e Death Canyon aconteceu em 1º de outubro de 1933, e marcou o primeiro passo na realização de um plano onde o viajante será...',
    publishedAt: '19 de outubro de 2020',
    urlToImage: newsCardImage01,
  },
];

const hasNoResults = true; // Simulação de ausência de resultados

function NewsCardList({ isSavedNewsPage }) {

    if (hasNoResults && !isSavedNewsPage) {
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
                {news.map((article) => (
                    <li key={article.id} className="news-card-list__item">
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