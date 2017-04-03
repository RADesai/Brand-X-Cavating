import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Homepage from './Homepage.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [ { path: '/', component: Homepage } ];

let router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  template: `<router-view class="view"></router-view>`
}).$mount('#app');
