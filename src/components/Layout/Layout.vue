<template>
  <div id="wrapper">
    <Header />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Header } from "@/components/Header";

export default Vue.extend({
  name: "LayoutComponent",
  components: { Header },
});
</script>

<style scoped></style>
