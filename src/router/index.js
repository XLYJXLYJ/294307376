import Vue from 'vue'
import Router from 'vue-router'
import Lesson from '@/components/Lesson'
import Home from '@/components/Home'
import Material from '@/components/Material'
import Download from '@/components/Download'
import Production from '@/components/HomePage/List/Production'
import Recommend from '@/components/HomePage/List/Recommend'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {path:'/',redirect:'/Home'},
    {
      path: '/Home',
      component: Home,
      // redirect:'/List/Recommend',
      children:[
        { path: '/List/Production', component: Production},
        { path: '/List/Recommend', component: Recommend},
        { path: '', component: Recommend},
      ]
    }, 
    {
      path: '/Lesson',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/Material',
      name: 'Material',
      component: Material
    }, {
      path: '/Download',
      name: 'Download',
      component: Download
    }
  ]
})
