<template>
  <section>
    <ul class="actions vertical">
      <li>
        <router-link to="/auth" class="button big fit">Log In</router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "ActionsComponent" })
export default class Actions extends Vue {}
</script>
