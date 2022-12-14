<template>
  <router-link :to="'/article/' + id" class="button big">
    <slot name="icon"></slot><slot></slot> ID: <slot name="id"></slot
  ></router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop(Number) readonly id!: number;
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
}
</style>
