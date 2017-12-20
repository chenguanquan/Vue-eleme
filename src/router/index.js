import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
// import HelloWorld from '@/components/HelloWorld';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: goods
    },
    {
      path: '/api/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/api/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/api/seller',
      name: 'seller',
      component: seller
    }
  ]
});
