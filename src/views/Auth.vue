<template>
  <main class="form-signin w-100 m-auto">
    <AuthForm
      :email="email"
      @update:email="email = $event"
      :password="password"
      @update:password="password = $event"
      :isLogin="isLogin"
      :submit="submit"
    />
    <strong>invalid: {{ v$.$invalid }}</strong>
    <p v-for="(error, index) of v$.$errors" :key="index">
      <strong>{{ error.$validator }}</strong>
      <small> on property</small>
      <strong>{{ error.$property }}</strong>
      <small> says:</small>
      <strong>{{ error.$message }}</strong>
    </p>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { AuthForm } from "@/components/AuthFrom";

@Component<any>({
  name: "AuthViewComponent",
  components: { AuthForm },
  data() {
    return {
      email: "email@gmail.com",
      password: "password",
      isLogin: this.$route.path.includes("login"),
    };
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    const mustBeCool = (value: string): boolean => {
      const bool = value.includes("cool");
      console.log("| bool |", bool, value);
      return bool;
    };
    return {
      email: { required, email },
      password: { required, minLength: minLength(6), mustBeCool },
    };
  },
  methods: {
    async submit() {
      if (this.v$.$error) {
        // need render errors
        return;
      }

      if (this.$data.isLogin) {
        try {
          await this.$store.dispatch("getUser", true);

          await this.$router.push("/");
        } catch (err) {
          Vue.notify({
            type: "warn",
            group: "foo",
            title: "Login",
            text: "User not found!",
          });
        }
      } else {
        await this.$store.dispatch("registerUser", true);
        this.$notify({
          type: "success",
          group: "foo",
          title: "Registration",
          text: "Hello! One user was registered. Please, log in!",
        });
        await this.$router.push("/auth/login");
        this.$data.isLogin = true;
      }
    },
  },
})
export default class AuthView extends Vue {}
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

main {
  max-width: 600px;
}
</style>
