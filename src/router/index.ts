import { createRouter, createWebHistory } from 'vue-router';

// 动态导入 views 目录下的所有 index.vue 文件和 page.ts 文件
const viewModules = import.meta.glob('../views/**/index.vue');
const pageModules = import.meta.glob('../views/**/page.ts');

const routes = Object.keys(viewModules).map((filePath) => {
  const folderName = filePath.match(/\/views\/(.*?)\//)[1];
  const path = `/${folderName.toLowerCase()}`;

  // 获取对应的 page.ts 文件路径
  const pagePath = `../views/${folderName}/page.ts`;

  // 动态导入组件和路由配置
  const component = viewModules[filePath];
  const meta = pageModules[pagePath] ? pageModules[pagePath]() : {};

  return {
    path: path === '/home' ? '/' : path,
    name: folderName,
    component,
    meta,
  };
});
console.log('routes===', routes)
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // 如果存在保存的位置，返回保存的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      // 否则，滚动到顶部
      return { top: 0 };
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
