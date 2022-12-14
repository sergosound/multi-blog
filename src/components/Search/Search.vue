<template>
  <section>
    <form class="search" method="get" action="#">
      <input type="text" name="query" placeholder="Search" />
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "SearchComponent" })
export default class Layout extends Vue {}
</script>
