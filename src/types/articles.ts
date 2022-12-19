type BaseArticle = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Article = BaseArticle & { category: string };
