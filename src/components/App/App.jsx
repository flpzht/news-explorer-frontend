import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SavedArticlesProvider } from '@/contexts/SavedArticlesContext';

import Header from '@/components/Header/Header';
import SavedNewsHeader from '@/components/SavedNewsHeader/SavedNewsHeader';
import Main from '@/components/Main/Main';
import SavedNews from '@/components/SavedNews/SavedNews';
import Footer from '@/components/Footer/Footer';
import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

import '@/components/App/App.css'

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
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
  )
}

export default App;
