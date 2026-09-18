import { createContext, useState, useEffect } from 'react';

export const SavedArticlesContext = createContext();

const STORAGE_KEY = 'newsExplorerSavedArticles';

export function SavedArticlesProvider({ children }) {
  const [savedArticles, setSavedArticles] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    try {
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedArticles));
  }, [savedArticles]);

  function isArticleSaved(article) {
    return savedArticles.some((saved) => saved.url === article.url);
  }

  function saveArticle(article, keyword) {
    // TODO Fase 2: substituir por chamada real POST /articles à API personalizada
    setSavedArticles((prev) => [...prev, { ...article, keyword }]);
  }

  function removeArticle(article) {
    // TODO Fase 2: substituir por chamada real DELETE /articles/:id à API personalizada
    setSavedArticles((prev) => prev.filter((saved) => saved.url !== article.url));
  }

  return (
    <SavedArticlesContext.Provider value={{ savedArticles, isArticleSaved, saveArticle, removeArticle }}>
      {children}
    </SavedArticlesContext.Provider>
  );
}