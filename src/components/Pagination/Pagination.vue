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

<script>
export default { name: "PaginationComponent" };
</script>
