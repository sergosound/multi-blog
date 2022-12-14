<template>
  <ArticleTemplate :article="theArticle" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ArticleTemplate from "./ArticleTemplate.vue";
import { Article } from "@/store/modules";

@Component({
  name: "ArticleContainerComponent",
  components: { ArticleTemplate },
})
export default class Container extends Vue {
  @Prop() readonly article: Article | undefined;
  get theArticle() {
    if (this.article) {
      return this.article;
    }
    console.log(2);
    if (this.$store.getters.articles.length) {
      return this.$store.getters.articles.find(
        (article: Article) => article.id === Number(this.$route.params.id)
      );
    }

    return undefined;
  }
}
</script>
