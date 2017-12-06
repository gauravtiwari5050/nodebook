import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import Nodebook from './Nodebook.vue';
import Kernel from './apps/Kernel.vue';


Vue.use(VueRouter);


const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Kernel,
    },
  ],
});

new Vue({
  el: '#nodebook',
  router,
  render: h => h(Nodebook),
  store,
});
