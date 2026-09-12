import { useState } from 'react';

import SearchForm from '@/components/SearchForm/SearchForm';
import Preloader from '@/components/Preloader/Preloader';
import NewsCardList from '@/components/NewsCardList/NewsCardList';
import About from '@/components/About/About';

import '@/components/Main/Main.css';

function Main() {

    const [searchStatus, setSearchStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'empty'

    // TODO: simulação temporária. Na Fase 1.2, isso vira uma chamada real à News API.
    function handleSearch(query) {
        setSearchStatus('loading');

        setTimeout(() => {
            const isEmpty = query.trim() === '' || query.toLowerCase().includes('vazio');
            setSearchStatus(isEmpty ? 'empty' : 'success');
        }, 1500);
    }


    return (
        <main className="main">
            <SearchForm onSearch={handleSearch} />
            {searchStatus === 'loading' && <Preloader />}
            {(searchStatus === 'success' || searchStatus === 'empty') && (
                <NewsCardList searchStatus={searchStatus} />
            )}
            <About />
        </main>
    );
}

export default Main;