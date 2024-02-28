import ExperienceView from '@/views/ExperienceView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return { el: to.hash }
  }

  if (savedPosition) {
    return savedPosition
  }

  return { left: 0, top: 0 }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    }
  ]
})

export default router
