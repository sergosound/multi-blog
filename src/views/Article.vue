<template>
  <Layout>
    <Article />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { Layout } from "@/components/Layout";
import { Article } from "@/components/Article";

@Component({ name: "ArticleViewComponent", components: { Article, Layout } })
export default class ArticleView extends Vue {
  @Provide("fullView") true = true;
}
</script>

<style></style>
