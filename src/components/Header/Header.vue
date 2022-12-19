<template>
  <header id="header">
    <h1>
      <router-link to="/">Multi Blog</router-link>
    </h1>
    <nav class="links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
    <nav class="main">
      <ul>
        <li class="search">
          <router-link class="fa-search" to="=/auth/login">Log out</router-link>
          <form id="search" method="get" action="#">
            <input type="text" name="query" placeholder="Search" />
          </form>
        </li>
        <li class="menu">
          <router-link to="/auth/login">Log out</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapActions, mapGetters, mapMutations } from "vuex";

@Component({
  name: "HeaderComponent",
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getArticles", "getUser"]),
    ...mapMutations(["createArticle"]),
    logOut() {
      this.$store.dispatch("logOut");
    },
  },
})
export default class Header extends Vue {
  getUser: any; // Action<RootState["user"], RootState>
  getArticles: any; // Action<RootState["articles"], RootState>
  created() {
    !this.$store.getters.user && this.getUser();
    !this.$store.getters.articles.length && this.getArticles();
  }
}
</script>

<style scoped>
#header .main ul li > a {
  overflow: initial;
  padding-left: 10px;
}
#header .main ul li > a:last-child {
  border-right: solid 1px rgba(160, 160, 160, 0.3);
}
</style>
