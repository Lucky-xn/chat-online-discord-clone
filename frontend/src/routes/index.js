import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/ConversationHistory.vue'

const routes = [
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})