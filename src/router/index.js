import { createRouter, createWebHistory } from 'vue-router'
import PartiesView from '@/views/PartiesView.vue'
import PartyDetailView from '@/views/PartyDetailView.vue'

const routes = [
  { path: '/', redirect: '/parties' },
  { path: '/parties', component: PartiesView },
  { path: '/party/:id', component: PartyDetailView },
  // Todo: Add ForumView here mapped to /forum
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
