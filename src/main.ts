import Vue from "vue";
import Notifications from "vue-notification";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

Vue.use(Notifications);
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
