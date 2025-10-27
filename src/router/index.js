import { createRouter, createWebHistory } from 'vue-router'
import PartiesView from '@/views/PartiesView.vue'
import PartyDetailView from '@/views/PartyDetailView.vue'
import PathNotFoundView from '@/views/PathNotFoundView.vue'

const routes = [
  { path: '/', redirect: '/parties' },
  { path: '/parties', component: PartiesView },
  { path: '/party/:id', component: PartyDetailView },
  { path: '/:pathMatch(.*)*', component: PathNotFoundView },
  { path: '/forum', component: () => import('@/views/ForumView.vue') },
  // Todo: Add ForumView here mapped to /forum
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
