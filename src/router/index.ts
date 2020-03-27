import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect:'/Money'
    },
{
      path:'/Money',
      component:Money
},
  {
    path:'/Labels',
    component:Labels
  },
  {
    path:'/Statistics',
    component:Statistics
  },
  {
    path: '*',
component:NotFound
  },

];

const router = new VueRouter({
    routes
});

export default router;
