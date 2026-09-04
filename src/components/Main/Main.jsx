import { useState, useEffect } from 'react';

import SearchForm from '@/components/SearchForm/SearchForm';
import Preloader from '@/components/Preloader/Preloader';
import NewsCardList from '@/components/NewsCardList/NewsCardList';
import About from '@/components/About/About';

import '@/components/Main/Main.css';

function Main() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulação de carregamento de dados
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Simula um carregamento de 2 segundos
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="main">
            <SearchForm />
            {isLoading ? <Preloader /> : <NewsCardList />}
            <About />
        </main>
    );
}

export default Main;