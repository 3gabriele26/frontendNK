import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Services from '@/views/Services.vue';
import Booking from '@/views/Booking.vue';
import Recipe from '@/views/Recipe.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "Dott.ssa Nazeda Kashta"
      },
    },
    {
      path: '/service',
      name: 'service',
      component: Services,
      meta: {
        title: "Servizi"
      },
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: Recipe,
      meta: {
        title: "Ricettario"
      },
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking,
      meta: {
        title: "Prenota una visita"
      },
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title'; // Cambia il titolo della scheda
});

export default router