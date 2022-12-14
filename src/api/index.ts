import { mockUser, mockArticles } from "@/api/mocks";

const APIDomain = "https://jsonplaceholder.typicode.com/";

const withNetwork = false;

export default {
  async fetchUser(isAuth?: boolean) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const oneOrZero = Math.floor(Math.random() * 2) === 1;
        if (!isAuth || oneOrZero) {
          return resolve(mockUser);
        }
        return reject(new Error("User not found"));
      }, 1000)
    );
  },
  async createUser(user: { email: string; password: string }) {
    return new Promise((resolve) => setTimeout(() => resolve(user), 1000));
  },
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
