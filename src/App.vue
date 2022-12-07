<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Blog from "./components/Blog.vue";

export default Vue.extend({
  name: "App",
});
</script>

<style>
@import "./assets/css/ie8.css";
@import "./assets/css/ie9.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/main.css";
</style>
