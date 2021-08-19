import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// CSS Imports
import "./assets/css/tailwind.css";
import "./assets/css/index.css";


import Clipboard from 'v-clipboard'
Vue.use(Clipboard)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
