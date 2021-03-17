import Vue from 'vue'
import VueRouter from 'vue-router'
import Task2 from '@/views/task2'
import Task1 from '@/views/task1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/task2',
    name: 'task2',
    component: Task2
  },
  {
    path: '/task1',
    name: 'task1',
    component: Task1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
