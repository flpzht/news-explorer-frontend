import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SavedArticlesProvider } from '@/contexts/SavedArticlesContext';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';

import { getCurrentUser } from '@/utils/MainApi';
import { getTokenFromStorage, clearTokenFromStorage } from '@/utils/localStorage';

import Header from '@/components/Header/Header';
import SavedNewsHeader from '@/components/SavedNewsHeader/SavedNewsHeader';
import Main from '@/components/Main/Main';
import SavedNews from '@/components/SavedNews/SavedNews';
import Footer from '@/components/Footer/Footer';
import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

import '@/components/App/App.css'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(() => Boolean(getTokenFromStorage()));

  useEffect(() => {
    const token = getTokenFromStorage();

    if(!token) return;

    getCurrentUser(token)
    .then((user) => setCurrentUser(user))
    .catch(() => clearTokenFromStorage())
    .finally(() => setIsCheckingAuth(false));
    
  }, []);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedArticlesProvider>
        <div className="page">
          <Routes>

            <Route path="/" element={
              <>
                <Header onOpenPopup={handlePopupOpen} />
                <Main />
                <PopupWithForm isOpen={isPopupOpen} onClose={handlePopupClose} />
              </>
            } />

            <Route path="/saved-news" element={
              <>
                <SavedNewsHeader />
                <SavedNews />
              </>
            } />

          </Routes>

          <Footer />
        </div>
      </SavedArticlesProvider>
    </CurrentUserContext.Provider>
  )
}

export default App;
