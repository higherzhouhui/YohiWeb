// router.js
import { createRouter, createWebHistory } from 'vue-router';
 
// 引入组件
import HomePage from '@/components/HomePage.vue';
import ServicePage from '@/components/Service.vue';
import PrivacyPage from '@/components/Privacy.vue';
 
// 定义路由
const routes = [
  { path: '/', component: HomePage },
  { path: '/service', component: ServicePage },
  { path: '/privacy', component: PrivacyPage },
];
 
// 创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
 
router.afterEach(() => {
  window.scrollTo(0, 0); 
})
export default router;