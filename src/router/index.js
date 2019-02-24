import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import MyIndex from '@/components/my_index/MyIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my_index',
      name: 'MyIndex',
      component: MyIndex
    }
  ]
})
