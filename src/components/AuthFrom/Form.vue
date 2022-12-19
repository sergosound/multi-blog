<template>
  <form @submit.prevent="submit">
    <img
      class="mb-4"
      src="../../assets/images/bootstrap-logo.svg"
      alt=""
      width="72"
      height="57"
    />
    <h1 class="h3 mb-3 fw-normal">
      {{ isLogin ? "Please Log in" : "Please sign in" }}
    </h1>

    <div class="form-floating">
      <input
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        v-model="syncEmail"
      />
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="syncPassword"
      />
      <label for="floatingPassword">Password</label>
    </div>

    <button
      class="w-100 btn btn-lg btn-primary mt-3"
      type="submit"
      style="color: white !important"
    >
      {{ isLogin ? "Log in" : "Sign in" }}
    </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  @PropSync("email") syncEmail!: string;
  @PropSync("password") syncPassword!: string;
  @Prop() isLogin!: boolean;
  @Prop() submit: any;
}
</script>
