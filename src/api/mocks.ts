const title = "Mock title for all articles";
const body = "Mock body for all articles";

export const mockUser = {
  id: 1,
  name: "Serhii",
  interests: ["music", "programming", "psychology", "history"],
};

export const mockArticles = (function () {
  const articles = [];
  for (let i = 0; i < 10; i++) {
    articles.push(createArticle(i, 1, title, body));
  }
  return articles;
})();

function createArticle(
  id: number,
  userId: number,
  title: string,
  body: string
) {
  return { id, userId, title, body };
}
