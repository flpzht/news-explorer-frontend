import NewsCard from '@/components/NewsCard/NewsCard';

import newsCardImage01 from '@/images/news-card-image01.png';

import '@/components/NewsCardList/NewsCardList.css';

const news = [
    {
    id: 1,
    source: 'BBC News',
    title: 'Título de exemplo da notícia número um',
    description: 'Descrição breve de exemplo explicando do que se trata essa notícia fictícia.',
    publishedAt: '4 de novembro de 2020',
    urlToImage: newsCardImage01,
  },
  {
    id: 2,
    source: 'CNN',
    title: 'Título de exemplo da notícia número dois',
    description: 'Outra descrição de exemplo para preencher o card durante a marcação.',
    publishedAt: '19 de fevereiro de 2021',
    urlToImage: newsCardImage01,
  },
  {
    id: 3,
    source: 'Reuters',
    title: 'Título de exemplo da notícia número três',
    description: 'Mais um texto fictício para testar o layout em grade de três colunas.',
    publishedAt: '25 de agosto de 2026',
    urlToImage: newsCardImage01,
  },
];

function NewsCardList({ isSavedNewsPage }) {
    return (
        <section className="news-card-list">
            <ul className="news-card-list__items">
                {news.map((article) => (
                    <li key={article.id} className="news-card-list__item">
                        <NewsCard card={article} isSavedNewsPage={isSavedNewsPage} />
                    </li>
                ))}
            </ul>

            <button className="news-card-list__button" type="button">Mostrar mais</button>
        </section>
    );
}

export default NewsCardList;