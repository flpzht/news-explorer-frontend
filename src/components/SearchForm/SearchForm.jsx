import '@/components/SearchForm/SearchForm.css';

function SearchForm() {
    return (
        <section className="search-form">
            <div className="search-form__container">
                <h1 className="search-form__title">O que está 
                    <br />acontecendo no mundo?</h1>
                <p className="search-form__subtitle">Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>

                <form action="" className="search-form__form" name="search-form" noValidate>
                    <input type="text" className="search-form__input" placeholder="Inserir tema" name="search" required />
                    <button type="submit" className="search-form__submit">Procurar</button>
                </form>
                </div>
        </section>
    );
}

export default SearchForm;