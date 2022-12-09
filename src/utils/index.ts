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
  const randomCategoryIndex = Math.floor(Math.random() * categories.length);
  return articles.map((article) => ({
    ...article,
    category: categories[randomCategoryIndex],
  }));
};
