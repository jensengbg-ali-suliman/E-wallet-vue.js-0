import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addCard from '../views/AddCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addCard',
    name: 'Add card',
    component: addCard
  }
]

const router = new VueRouter({
  routes
})

export default router
