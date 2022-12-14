<template>
  <router-link :to="'/articles/' + article.id">
    <article class="mini-post">
      <header class="flex">
        <div>
          <h3>
            <router-link to="/">{{ article.category }}</router-link>
          </h3>
          <time class="published" datetime="2015-10-20">October 20, 2015</time>
        </div>
        <img src="../../assets/images/avatar.jpg" alt="" />
      </header>
      <img src="../../assets/images/pic04.jpg" alt="" /></article
  ></router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Article } from "@/store/modules";

@Component({
  name: "MiniPostComponent",
})
export default class MiniPost extends Vue {
  @Prop() readonly article: Article | undefined;
}
</script>

<style scoped>
.flex {
  display: flex;
}
header img {
  height: 25px;
}
</style>
