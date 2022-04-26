import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import FormView from '../views/FormView.vue'

const routes = [
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
