<template>
  <section>
    <ul class="links">
      <li>
        <router-link to="/">
          <h3>Lorem ipsum</h3>
          <p>Feugiat tempus veroeros dolor</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <h3>Dolor sit amet</h3>
          <p>Sed vitae justo condimentum</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <h3>Feugiat veroeros</h3>
          <p>Phasellus sed ultricies mi congue</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <h3>Etiam sed consequat</h3>
          <p>Porta lectus amet ultricies</p>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "LinksComponent" })
export default class Layout extends Vue {}
</script>
