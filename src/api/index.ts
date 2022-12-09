import { mockArticles } from "@/api/mocks";

const APIDomain = "https://jsonplaceholder.typicode.com/";

const withNetwork = false;

export default {
  async fetchArticles(limit: number) {
    if (withNetwork) {
      const result = await fetch(`${APIDomain}posts?_limit=${limit}`);
      return await result.json();
    } else {
      return new Promise((resolve) => {
        setTimeout(() => resolve(mockArticles), 1500);
      });
    }
  },
};
