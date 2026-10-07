const BASE_URL = import.meta.env.VITE_MAIN_API_URL;

async function handleResponse(res) {
    const data = await res.json().catch(() => ({}));
    if (res.ok) return data;
    throw new Error(data.message || `Erro: ${res.status}`);
}

async function register({ email, password, name }) {
    const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
    });
    return handleResponse(res);
}

async function login({ email, password }) {
    const res = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return handleResponse(res);
}

async function getCurrentUser(token) {
    const res = await fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return handleResponse(res);
}

async function getArticles(token) {
    const res = await fetch(`${BASE_URL}/articles`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return handleResponse(res);
}

async function saveArticle(token, article) {
    const res = await fetch(`${BASE_URL}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(article),
    });

    return handleResponse(res);
}

async function deleteArticle(token, articleId) {
    const res = await fetch(`${BASE_URL}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return handleResponse(res);
}

export {
    register,
    login,
    getCurrentUser,
    getArticles,
    saveArticle,
    deleteArticle,
};