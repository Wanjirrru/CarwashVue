import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/HomeView.vue';
import ContactView from '@/components/ContactView.vue';
import ServicesView from '@/components/ServicesView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
});

export default router;
