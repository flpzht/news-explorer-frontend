import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';
import SavedNewsHeader from '@/components/SavedNewsHeader/SavedNewsHeader';
import SavedNews from '@/components/SavedNews/SavedNews';
import Footer from '@/components/Footer/Footer';
import PopupWithForm from '@/components/PopupWithForm/PopupWithForm';

import '@/components/App/App.css'

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={
          <>
            <Header />
            <Main />
            <PopupWithForm />
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
    </>
  )
}

export default App;
