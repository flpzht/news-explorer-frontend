export function convertToSavedArticle(article, keyword) {
  return {
    keyword,
    title: article.title,
    text: article.description,
    date: article.publishedAt,
    source: article.source.name,
    link: article.url,
    image: article.urlToImage,
  };
}

export function convertFromSavedArticle(savedArticle) {
  return {
    _id: savedArticle._id,
    keyword: savedArticle.keyword,
    title: savedArticle.title,
    description: savedArticle.text,
    publishedAt: savedArticle.date,
    source: { name: savedArticle.source },
    url: savedArticle.link,
    urlToImage: savedArticle.image,
  };
}