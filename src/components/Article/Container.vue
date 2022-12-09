<template>
  <ArticleTemplate :article="theArticle" />
</template>

<script>
import ArticleTemplate from "./ArticleTemplate.vue";

export default {
  name: "ArticleContainerComponent",
  props: ["article"],
  components: { ArticleTemplate },
  computed: {
    theArticle: function () {
      if (this.article) {
        return this.article;
      }

      if (this.$store.getters.articles.length) {
        return this.$store.getters.articles.find(
          (article) => article.id === Number(this.$route.params.id)
        );
      }

      return undefined;
    },
  },
};
</script>
