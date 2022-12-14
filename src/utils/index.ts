const categories = [
  "music",
  "cars",
  "money",
  "programming",
  "time",
  "psychology",
  "alcohol",
  "history",
  "party",
  "traveling",
  "IT",
  "animals",
  "guns",
  "sex",
];

export const injectCategoryForArticles = <StateArticle>(
  articles: Array<StateArticle>
): Array<StateArticle & { category: string }> => {
  return articles.map((article) => ({
    ...article,
    category: categories[Math.floor(Math.random() * categories.length)],
  }));
};
