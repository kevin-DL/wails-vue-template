import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import { IsLoggedIn } from '../wailsjs/go/main/Auth'
import App from './App.vue'
import './style.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Index.vue'),
    meta: {
      requiresAuth: false,
    }
  },
  {
    path: '/protected',
    name: 'protected',
    component: () => import("./pages/Protected.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("./pages/Login.vue"),
    meta: {
      requiresAuth: "guest",
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach(async (to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  const loggedIn = await IsLoggedIn()
  if (to.meta.requiresAuth === true && !loggedIn) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  } else {
    if (to.meta.requiresAuth === 'guest' && loggedIn) {
      return {
        path: '/protected',
        query: { redirect: to.fullPath },
      }
    }
  }
})


createApp(App)
  .use(router)
  .mount('#app')
