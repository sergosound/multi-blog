<template>
  <ul class="actions pagination">
    <li>
      <router-link to="/" class="disabled button big previous"
        >Previous Page</router-link
      >
    </li>
    <li><router-link to="/" class="button big next">Next Page</router-link></li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "PaginationComponent" })
export default class Layout extends Vue {}
</script>
