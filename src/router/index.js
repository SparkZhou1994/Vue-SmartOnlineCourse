import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import MyIndex from '@/components/user/MyIndex'
import CoursePackage from '@/components/course/CoursePackage'
import MyInfor from '@/components/user/MyInfor'
import Sign from '@/components/sign/Sign'

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
    },
    {
      path: '/course_package',
      name: 'CoursePackage',
      component: CoursePackage
    },
    {
      path: '/my_infor',
      name: 'MyInfor',
      component: MyInfor
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    }
  ]
})
