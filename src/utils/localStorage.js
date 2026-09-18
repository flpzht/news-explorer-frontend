const SEARCH_STORAGE_KEY = 'newsExplorerSearchHistory';

export function getSearchHistory(query, articles) {
    const data = { query, articles };
    localStorage.setItem(SEARCH_STORAGE_KEY, JSON.stringify(data));
}

export function getSearchHistoryFromStorage() {
    const data = localStorage.getItem(SEARCH_STORAGE_KEY);
    if(!data) return null;

    try {
        return JSON.parse(data);
    } catch {
        return null;
    }
}

export function clearSearchHistory() {
    localStorage.removeItem(SEARCH_STORAGE_KEY);
}