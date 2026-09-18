import { useState, useEffect } from 'react';

import { searchNews } from '@/utils/NewsApi';
import { getSearchHistory, getSearchHistoryFromStorage } from '@/utils/localStorage';

import SearchForm from '@/components/SearchForm/SearchForm';
import Preloader from '@/components/Preloader/Preloader';
import NewsCardList from '@/components/NewsCardList/NewsCardList';
import About from '@/components/About/About';

import '@/components/Main/Main.css';

function Main() {
    const [searchStatus, setSearchStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'empty'
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const searchHistory = getSearchHistoryFromStorage();
        if(searchHistory) {

            setArticles(searchHistory.articles);
            setSearchStatus(searchHistory.articles.length === 0 ? 'empty' : 'success');
        }
    }, []);

    async function handleSearch(query) {
        setSearchStatus('loading');
        setError('');

        try {
            const data = await searchNews(query);
            
            if(data.articles.length === 0) {
                setSearchStatus('empty');
                setArticles([]);
                getSearchHistory(query, []);
                return;
            }

            setArticles(data.articles);
            setSearchStatus('success');
            getSearchHistory(query, data.articles);

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
                <NewsCardList searchStatus={searchStatus} articles={articles} />
            )}
            <About />
        </main>
    );
}

export default Main;