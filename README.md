# News Explorer

Aplicação full-stack para pesquisar notícias sobre qualquer tema e salvar os artigos favoritos em uma conta pessoal. Projeto final do bootcamp de desenvolvimento web da TripleTen.

🔗 **Deploy:** em breve

## Sobre o projeto

O News Explorer permite que qualquer usuário pesquise notícias publicadas na última semana sobre um tema de sua escolha. Usuários registrados podem salvar artigos de interesse e revisitá-los mais tarde em uma página dedicada, filtrando por palavra-chave de busca.

### Funcionalidades

- Pesquisa de notícias em tempo real via [News API](https://newsapi.org)
- Paginação dos resultados (3 cartões por vez)
- Persistência da última busca no armazenamento local do navegador
- Cadastro e login de usuários (janela modal única, com transição entre os dois formulários)
- Salvar e remover artigos da conta pessoal
- Página de artigos salvos, agrupada por palavras-chave de busca
- Layout totalmente responsivo (desktop, tablet e mobile, com menu de navegação em formato de painel para telas pequenas)

## Tecnologias

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- CSS puro, seguindo a metodologia [BEM](https://en.bem.info/methodology/)
- [News API](https://newsapi.org) para os dados de notícias

## Rodando o projeto localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/flpzht/news-explorer-frontend.git
cd news-explorer-frontend
npm install
```

Crie um arquivo `.env` na raiz do projeto com sua chave da News API:

```
VITE_NEWS_API_KEY=sua_chave_aqui
```

> A chave pode ser obtida gratuitamente em [newsapi.org/register](https://newsapi.org/register). Na versão gratuita, as requisições só funcionam a partir de `localhost`.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Status do projeto

Este repositório está em desenvolvimento ativo como parte do projeto final do bootcamp. A funcionalidade de salvar/remover artigos está implementada no front-end com persistência local; a integração com uma API personalizada (autenticação de usuários e armazenamento de artigos salvos) faz parte da próxima fase do projeto.

## Autor

Felipe Carvalho
[GitHub](https://github.com/flpzht) · [LinkedIn](https://www.linkedin.com/in/felipecarvalhodesouzabarros/)