import { useState, useEffect } from 'react';

import { searchNews } from '@/utils/NewsApi';
import { saveSearchToStorage, getSearchFromStorage } from '@/utils/localStorage';

import SearchForm from '@/components/SearchForm/SearchForm';
import Preloader from '@/components/Preloader/Preloader';
import NewsCardList from '@/components/NewsCardList/NewsCardList';
import About from '@/components/About/About';

import '@/components/Main/Main.css';

function Main() {
  const [searchStatus, setSearchStatus] = useState('idle');
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedSearch = getSearchFromStorage();

    if (savedSearch) {
      setArticles(savedSearch.articles);
      setQuery(savedSearch.query);
      setSearchStatus(savedSearch.articles.length === 0 ? 'empty' : 'success');
    }
  }, []);

  async function handleSearch(searchQuery) {
    setSearchStatus('loading');
    setError('');
    setQuery(searchQuery);

    try {
      const data = await searchNews(searchQuery);

      if (data.articles.length === 0) {
        setSearchStatus('empty');
        setArticles([]);
        saveSearchToStorage(searchQuery, []);
        return;
      }

      setArticles(data.articles);
      setSearchStatus('success');
      saveSearchToStorage(searchQuery, data.articles);
    } catch (err) {
      console.error(err);
      setError('Desculpe, algo deu errado durante a solicitação. Pode haver um problema de conexão ou o servidor pode estar inativo. Por favor, tente novamente mais tarde.');
      setSearchStatus('error');
    }
  }

  return (
    <main className="main">
      <SearchForm onSearch={handleSearch} />
      {searchStatus === 'loading' && <Preloader />}
      {searchStatus === 'error' && <p className="main__error">{error}</p>}
      {(searchStatus === 'success' || searchStatus === 'empty') && (
        <NewsCardList searchStatus={searchStatus} articles={articles} query={query} />
      )}
      <About />
    </main>
  );
}

export default Main;