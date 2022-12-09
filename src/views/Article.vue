<template>
  <Layout>
    <Article />
  </Layout>
</template>

<script>
import { computed } from "vue";
import { Layout } from "@/components/Layout";
import { Article } from "@/components/Article";

export default {
  name: "ArticleViewComponent",
  components: { Article, Layout },
  provide() {
    return {
      fullView: computed(() => true),
    };
  },
};
</script>

<style></style>
