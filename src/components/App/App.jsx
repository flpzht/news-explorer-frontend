import { useState, useEffect, startTransition } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { SavedArticlesContext } from '@/contexts/SavedArticlesContext';
import { CurrentUserContext } from '@/contexts/CurrentUserContext';

import { getCurrentUser, register, login, getArticles, saveArticle, deleteArticle } from '@/utils/MainApi';
import { convertFromSavedArticle, convertToSavedArticle } from '@/utils/articles';
import { getTokenFromStorage, clearTokenFromStorage, saveTokenToStorage } from '@/utils/localStorage.js';

import Header from '@/components/Header/Header';
import SavedNewsHeader from '@/components/SavedNewsHeader/SavedNewsHeader';
import Main from '@/components/Main/Main';
import SavedNews from '@/components/SavedNews/SavedNews';
import Footer from '@/components/Footer/Footer';
import Login from '@/components/Login/Login';
import Register from '@/components/Register/Register';
import SuccessPopup from '@/components/SuccessPopup/SuccessPopup';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

import '@/components/App/App.css'

function App() {
  const [activePopup, setActivePopup] = useState('');
  const [serverError, setServerError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isCheckingAuth, setIsCheckingAuth] = useState(() => Boolean(getTokenFromStorage()));

  const navigate = useNavigate();

  useEffect(() => {
    const token = getTokenFromStorage();

    if (!token) return;

    getCurrentUser(token)
      .then((user) => setCurrentUser(user))
      .catch(() => clearTokenFromStorage())
      .finally(() => setIsCheckingAuth(false));

  }, []);

  useEffect(() => {
    if (!currentUser) return;

    getArticles(getTokenFromStorage())
      .then((articles) => setSavedArticles(articles.map(convertFromSavedArticle)))
      .catch((err) => console.error(err));
  }, [currentUser]);

  function handleOpenLogin() {
    setServerError('');
    setActivePopup('login');
  }

  function handleOpenRegister() {
    setServerError('');
    setActivePopup('register');
  }

  function handleClosePopup() {
    setServerError('');
    setActivePopup('');
  }

  function handleRegister({ email, password, name }) {
    setServerError('');

    register({ email, password, name })
      .then(() => setActivePopup('success'))
      .catch((err) => setServerError(err.message));
  }

  function handleLogin({ email, password }) {
    setServerError('');

    login({ email, password })
      .then(({ token }) => {
        saveTokenToStorage(token);
        return getCurrentUser(token);
      })
      .then((user) => {
        setCurrentUser(user);
        setActivePopup('');
      })
      .catch((err) => {
        clearTokenFromStorage();
        setServerError(err.message);
      });
  }

  function handleSignOut() {
    clearTokenFromStorage();
    startTransition(() => {
      setCurrentUser(null);
      setSavedArticles([]);
      navigate('/');
    });
  }

  function isArticleSaved(article) {
    return savedArticles.some((saved) => saved.url === article.url);
  }

  function handleSaveArticle(article, keyword) {
    saveArticle(getTokenFromStorage(), convertToSavedArticle(article, keyword))
      .then((newArticle) => {
        setSavedArticles((state) => [convertFromSavedArticle(newArticle), ...state]);
      })
      .catch((err) => console.error(err));
  }

  function handleRemoveArticle(article) {
    const savedArticle = savedArticles.find((saved) => saved.url === article.url);

    if (!savedArticle) return;

    deleteArticle(getTokenFromStorage(), savedArticle._id)
      .then(() => {
        setSavedArticles((state) => state.filter((saved) => saved._id !== savedArticle._id));
      })
      .catch((err) => console.error(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedArticlesContext.Provider value={{ savedArticles, isArticleSaved, saveArticle: handleSaveArticle, removeArticle: handleRemoveArticle, onLoginRequired: handleOpenLogin }}>
        <div className="page">
          <Routes>

            <Route path="/" element={
              <>
                <Header onOpenPopup={handleOpenLogin} onSignOut={handleSignOut} />
                <Main />
                <Login isOpen={activePopup === 'login'} onClose={handleClosePopup} onSwitch={handleOpenRegister} onLogin={handleLogin} serverError={serverError} />
                <Register isOpen={activePopup === 'register'} onClose={handleClosePopup} onSwitch={handleOpenLogin} onRegister={handleRegister} serverError={serverError} />
                <SuccessPopup isOpen={activePopup === 'success'} onClose={handleClosePopup} onSwitch={handleOpenLogin} />
              </>
            } />

            <Route path="/saved-news" element={
              <ProtectedRoute isCheckingAuth={isCheckingAuth} onUnauthorized={handleOpenLogin}>
                <SavedNewsHeader onSignOut={handleSignOut} />
                <SavedNews />
              </ProtectedRoute>
            } />

          </Routes>

          <Footer />
        </div>
      </SavedArticlesContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;
