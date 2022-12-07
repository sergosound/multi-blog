<template>
  <article class="post">
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
    <footer>
      <ul class="actions">
        <li>
          <router-link to="/" class="button big">Continue Reading</router-link>
        </li>
      </ul>
      <ul class="stats">
        <li><router-link to="/">General</router-link></li>
        <li><router-link to="/" class="icon fa-heart">28</router-link></li>
        <li>
          <router-link to="/" class="icon fa-comment">128</router-link>
        </li>
      </ul>
    </footer>
  </article>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: ["article"],
};
</script>
