<template>
  <div id="wrapper">
    <Header />
    <section id="menu">
      <Search />
      <Links />
      <Actions />
    </section>
    <Main />
    <Sidebar />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";
import { Links } from "@/components/Links";
import { Actions } from "@/components/Actions";
import { Search } from "@/components/Search";

export default Vue.extend({
  name: "BlogComponent",
  components: { Header, Main, Sidebar, Links, Actions, Search },
});
</script>

<style scoped></style>
