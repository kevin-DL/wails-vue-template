import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './style.css';

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('./pages/Index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),	
	routes
})


createApp(App)
	.use(router)
	.mount('#app')
