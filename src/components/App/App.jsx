import { Routes, Route } from 'react-router-dom';

import Header from '@/components/Header/Header.jsx';
import Main from '@/components/Main/Main.jsx';
import SavedNews from '@/components/SavedNews/SavedNews.jsx';
import Footer from '@/components/Footer/Footer.jsx';

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
    </div>
  )
}

export default App;
