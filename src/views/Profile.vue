<template>
  <article class="post">
    <header>
      <div class="title">
        <router-link to="/">Home</router-link>
        <h2>Profile</h2>
      </div>
      <div class="meta">
        <time class="published" datetime="2015-11-01">Serhii Dirko</time>
        <router-link to="/" class="author"
          ><span class="name">Age: 26</span
          ><img src="../assets/images/avatar.jpg" alt=""
        /></router-link>
      </div>
    </header>
    <router-link to="/" class="image featured"
      ><img src="../assets/images/pic01.jpg" alt=""
    /></router-link>
    <h3>Interests</h3>
    <ul class="interests">
      <li>Music</li>
      <li>Programming</li>
      <li>Psychology</li>
      <li>History</li>
    </ul>
    <footer class="flex-end">
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
  name: "ProfileViewComponent",
};
</script>

<style>
.flex-end {
  display: flex;
  justify-content: flex-end;
}
.interests {
  list-style: none;
}
.interests li {
  margin-left: -16px;
  padding: 0;
}
</style>
