import Vue from 'vue'
import Router from 'vue-router'
import Lesson from '@/components/Lesson'
import Home from '@/components/Home'
import Material from '@/components/Material'
import Download from '@/components/Download'
import Production from '@/components/HomePage/List/Production'
import Recommend from '@/components/HomePage/List/Recommend'
import Login from '@/components/Login/Login'
import Register from '@/components/Login/Register'
import Demo from '@/components/Demo'
import All from '@/components/Demo/All'
import Nosend from '@/components/Demo/Nosend'
import Readysend from '@/components/Demo/Readysend'
import Mydemo from '@/components/Demo/Mydemo'
import Delete from '@/components/Demo/Delete'
import User from '@/components/User'
import Copassword from '@/components/User/Copassword'
import Usercenter from '@/components/User/Usercenter'
import Video from '@/components/Video'
import Myvideo from '@/components/Video/Myvideo'
import Lovevideo from '@/components/Video/Lovevideo'


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
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video,
      children:[
        {path: '/Myvideo', component: Myvideo},
        {path: '/Lovevideo', component: Lovevideo},
        {path: '', component:Myvideo}
      ]
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo,
      children:[
        { 
          path: '', component: All,
          path: '/Mydemo', component: Mydemo, 
              children:[
                { path: '/all', component: All},
                { path: '/Readysend', component: Readysend},
                { path: '/Nosend', component: Nosend},
                { path: '/Demo', component: All}
              ]
        },
        { path: '/Delete', component: Delete},
        { path: '', component: Mydemo}
      ]
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      children:[
        {path: '/Usercenter', component: Usercenter},
        {path: '/Copassword', component: Copassword},
        {path: '', component:Usercenter}
      ]
    }
  ]

})
