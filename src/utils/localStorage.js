const SEARCH_STORAGE_KEY = 'newsExplorerSearch';

export function saveSearchToStorage(query, articles) {
  const data = { query, articles };
  localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(data));
}

export function getSearchFromStorage() {
  const data = localStorage.getItem(SEARCH_STORAGE_KEY);
  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function clearSearchFromStorage() {
  localStorage.removeItem(SEARCH_STORAGE_KEY);
}