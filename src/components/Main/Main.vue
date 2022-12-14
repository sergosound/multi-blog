<template>
  <div id="main">
    <p v-if="articlesLoading">Loading</p>
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
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Article } from "@/components/Article";
import { Pagination } from "@/components/Pagination";

@Component({
  name: "MainComponent",
  components: { Article, Pagination },
  computed: mapGetters(["articlesLoading", "articles"]),
})
export default class Main extends Vue {}
</script>
