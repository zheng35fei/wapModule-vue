import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
const layout = r => require.ensure([], () => r(require('../../pages/manage/layout.vue')), 'layout')
const moduleList = r => require.ensure([], () => r(require('../../pages/manage/module/moduleList.vue')), 'moduleList')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: 'module',
          component: moduleList
        }
      ]
    }
  ]
})
