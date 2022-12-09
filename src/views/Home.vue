<template>
  <div class="home">
    <Layout>
      <section id="menu">
        <Search />
        <Links />
        <Actions />
      </section>
      <Main />
      <Sidebar />
    </Layout>
  </div>
</template>

<script>
import { Layout } from "@/components/Layout";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";
import { Links } from "@/components/Links";
import { Actions } from "@/components/Actions";
import { Search } from "@/components/Search";

export default {
  name: "HomeComponent",
  components: {
    Layout,
    Main,
    Sidebar,
    Links,
    Actions,
    Search,
  },
};
</script>
