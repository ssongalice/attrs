import Vue from 'vue';
import "@babel/polyfill";
import App from './app.vue';
import VueRouter from 'vue-router';
import { routes } from './router';

Vue.prototype.$EventBus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
