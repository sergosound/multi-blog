<template>
  <div id="main">
    <div v-if="articles.length">
      <Article
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
      <Pagination />
    </div>
    <p v-else>No articles =(</p>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { Article } from "@/components/Article";
import { Pagination } from "@/components/Pagination";

export default {
  name: "MainComponent",
  components: { Article, Pagination },
  computed: mapGetters(["articles"]),
  methods: {
    ...mapActions(["fetchArticles"]),
    ...mapMutations(["createArticle"]),
  },
  mounted() {
    this.fetchArticles();

    const article = {
      id: 100,
      userId: 100,
      title: "Title",
      body: "Body",
    };
    setTimeout(this.createArticle.bind(null, article), 3000);
  },
};
</script>
