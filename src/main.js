import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Home from './Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact }
];

let router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  template: `
    <router-view class="view"></router-view>
  `
}).$mount('#app');
