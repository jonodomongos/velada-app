import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Fights from '../views/Fights.vue'
import FightDetail from '../views/FightDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/fights', component: Fights },
    { path: '/fights/:id', component: FightDetail }
  ]
})

export default router