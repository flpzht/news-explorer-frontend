# News Explorer

Aplicação full-stack para pesquisar notícias sobre qualquer tema e salvar os artigos favoritos em uma conta pessoal. Projeto final do bootcamp de desenvolvimento web da TripleTen.

🔗 **Deploy:** [flp-news-explorer.verymad.net](https://flp-news-explorer.verymad.net)

🔗 **API:** [api.flp-news-explorer.verymad.net](https://api.flp-news-explorer.verymad.net)

## Sobre o projeto

O News Explorer permite que qualquer usuário pesquise notícias publicadas na última semana sobre um tema de sua escolha. Usuários registrados podem salvar artigos de interesse e revisitá-los mais tarde em uma página dedicada, filtrando por palavra-chave de busca.

### Funcionalidades

- Pesquisa de notícias em tempo real via [News API](https://newsapi.org)
- Paginação dos resultados (3 cartões por vez)
- Persistência da última busca no armazenamento local do navegador
- Cadastro e login de usuários em janelas modais, com validação instantânea dos campos e mensagens de erro do servidor
- Sessão mantida com token JWT, validado na API ao reabrir o site
- Salvar e remover artigos da conta pessoal, com os dados armazenados na API própria
- Página de artigos salvos protegida por login, com as palavras-chave ordenadas por popularidade
- Layout totalmente responsivo (desktop, tablet e mobile, com menu de navegação em formato de painel para telas pequenas)

## Tecnologias

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- CSS puro, seguindo a metodologia [BEM](https://en.bem.info/methodology/)
- [News API](https://newsapi.org) para os dados de notícias
- API própria em Node.js, Express e MongoDB: [news-explorer-backend](https://github.com/flpzht/news-explorer-backend)

## Rodando o projeto localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/flpzht/news-explorer-frontend.git
cd news-explorer-frontend
npm install
```

Crie um arquivo `.env` na raiz do projeto, seguindo o `.env.example`:

```
VITE_NEWS_API_KEY=sua_chave_aqui
VITE_NEWS_API_URL=https://newsapi.org/v2
VITE_MAIN_API_URL=http://localhost:3000
```

> A chave pode ser obtida gratuitamente em [newsapi.org/register](https://newsapi.org/register). Na versão gratuita, as requisições só funcionam a partir de `localhost`. Por isso, em produção, o `VITE_NEWS_API_URL` aponta para o proxy da TripleTen (`https://nomoreparties.co/news/v2`).

O cadastro, o login e os artigos salvos dependem da API rodando localmente na porta 3000. As instruções estão no repositório [news-explorer-backend](https://github.com/flpzht/news-explorer-backend).

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Status do projeto

Front-end e back-end integrados e publicados. Cadastro, login, rota protegida e artigos salvos funcionam em produção.

Limitação conhecida: em produção, a busca de notícias depende do proxy da TripleTen (`nomoreparties.co`), que não estava respondendo no momento da publicação. Localmente, a busca funciona normalmente com a News API.

## Autor

Felipe Carvalho

[GitHub](https://github.com/flpzht) · [LinkedIn](https://www.linkedin.com/in/felipecarvalhodesouzabarros/)