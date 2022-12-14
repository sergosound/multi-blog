<template>
  <div id="wrapper">
    <Header />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Header } from "@/components/Header";

@Component({ name: "LayoutComponent", components: { Header } })
export default class Layout extends Vue {}
</script>
