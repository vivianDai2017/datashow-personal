import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Qs from "qs";

// 将axios写入vue的原型
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.config.productionTip = false;

// 引入mockjs
require('./mock.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
