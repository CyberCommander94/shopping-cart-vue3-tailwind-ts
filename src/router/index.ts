import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Products from '@/views/products.vue'
import Cart from '@/views/cart.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id/products',
      name: 'products',
      props: true,
      component: Products,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router
