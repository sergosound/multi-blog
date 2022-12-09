<template>
  <div id="main">
    <p v-if="loading">Loading</p>
    <div v-else-if="articles.length">
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
import { mapGetters } from "vuex";
import { Article } from "@/components/Article";
import { Pagination } from "@/components/Pagination";

export default {
  name: "MainComponent",
  components: { Article, Pagination },
  computed: mapGetters(["loading", "articles"]),
};
</script>
