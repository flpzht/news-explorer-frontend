import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import SavedNews from '@/components/SavedNews/SavedNews';
import Footer from '@/components/Footer/Footer';
import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

import '@/components/App/App.css'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />

      <PopupWithForm
        title="Entrar"
        buttonText="Entrar"
        switchText="ou"
        switchLinkText="Inscreva-se"
      >
        <label className="popup-with-form__field">
          Email
          <input
            className="popup-with-form__input"
            type="email"
            name="email"
            placeholder="Insira e-mail"
          />
        </label>

        <label className="popup-with-form__field">
          Senha
          <input
            className="popup-with-form__input"
            type="password"
            name="password"
            placeholder="Insira a senha"
          />
        </label>
      </PopupWithForm>
    </div>
  )
}

export default App;
