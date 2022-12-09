<template>
  <header id="header">
    <h1>
      <router-link to="/">Multi Blog {{ userName }}</router-link>
    </h1>
    <nav class="links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create-article">Create article</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
    <nav class="main">
      <ul>
        <li class="search">
          <router-link class="fa-search" to="=/">Search</router-link>
          <form id="search" method="get" action="#">
            <input type="text" name="query" placeholder="Search" />
          </form>
        </li>
        <li class="menu">
          <router-link class="fa-bars" to="/">Menu</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "HeaderComponent",
  computed: mapGetters(["userName"]),
  methods: {
    ...mapActions(["getArticles"]),
    ...mapMutations(["createArticle"]),
  },
  created() {
    this.getArticles();
  },
};
</script>

<style></style>
