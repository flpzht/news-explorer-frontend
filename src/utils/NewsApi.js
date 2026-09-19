const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function getDateDaysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
}

function handleResponse(res) {
     if (res.ok) return res.json();
    return Promise.reject(new Error(`Error: ${res.status}`));
}

export async function searchNews(query) {
    const from = getDateDaysAgo(7);
    const to = getDateDaysAgo(0);

    const url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${from}&to=${to}&pageSize=100&sortBy=publishedAt&apiKey=${API_KEY}`;

    const res = await fetch(url);
    return handleResponse(res);
}