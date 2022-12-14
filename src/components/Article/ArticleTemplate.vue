<template>
  <article class="post" v-if="article">
    <header>
      <div class="title">
        <h2>
          <router-link to="/">{{ article.title }}</router-link>
        </h2>
      </div>
      <div class="meta">
        <time class="published" datetime="2015-11-01">November 1, 2015</time>
        <router-link to="/" class="author"
          ><span class="name">Jane Doe</span
          ><img src="../../assets/images/avatar.jpg" alt=""
        /></router-link>
      </div>
    </header>
    <router-link to="/" class="image featured"
      ><img src="../../assets/images/pic01.jpg" alt=""
    /></router-link>
    <p>{{ article.body }}</p>
    <footer class="flex-end">
      <ul class="actions" v-if="!fullView">
        <li>
          <button-component :id="article.id">
            <template v-slot:icon
              ><img
                src="../../assets/images/arrow.webp"
                alt="arrow-right"
                style="height: 20px; margin-right: 10px"
            /></template>
            Continue Reading
            <template v-slot:id>{{ article.id }}</template>
          </button-component>
        </li>
      </ul>
      <ul class="stats">
        <li><router-link to="/">General</router-link></li>
        <li>
          <router-link to="/article/123" class="icon fa-heart">28</router-link>
        </li>
        <li>
          <router-link to="/article/q223" class="icon fa-comment"
            >128</router-link
          >
        </li>
      </ul>
    </footer>
  </article>
  <p class="not-found" v-else>Not found =(</p>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from "vue-property-decorator";
import { Article } from "@/store/modules";
import Button from "@/components/Article/Button.vue";

@Component({
  name: "ArticleComponent",
  components: { "button-component": Button },
})
export default class ArticleTemplate extends Vue {
  @Prop() readonly article: Article | undefined;
  @Inject({ from: "fullView", default: false }) readonly fullView!: boolean;
}
</script>

<style>
.flex-end {
  display: flex;
  justify-content: flex-end;
}

.not-found {
  font-size: 50px;
}

.post > header {
  width: 100%;
  left: 0;
}

.post > header .title {
  width: 100%;
}
</style>
