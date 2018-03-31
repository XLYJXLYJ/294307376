import Vue from 'vue'
import Router from 'vue-router'
import Lesson from '@/components/Lesson'
import Home from '@/components/Home'
import Material from '@/components/Material'
import Download from '@/components/Download'
import Production from '@/components/HomePage/List/Production'
import Recommend from '@/components/HomePage/List/Recommend'
import Demo from '@/components/Demo'
import All from '@/components/Demo/All'
import Nosend from '@/components/Demo/Nosend'
import Readysend from '@/components/Demo/Readysend'
import Mydemo from '@/components/Demo/Mydemo'
import Delete from '@/components/Demo/Delete'
import User from '@/components/User'
import Setting from '@/components/Setting'
import Copassword from '@/components/Set/Copassword'
import Usercenter from '@/components/Set/Usercenter'
import Video from '@/components/Video'
import Myvideo from '@/components/Video/Myvideo'
import Lovevideo from '@/components/Video/Lovevideo'
import Snap from '@/components/Snap'


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
        { path: '/Home/Production', component: Production},
        { path: '/Home/Recommend', component: Recommend},
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
    }, 
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video,
      children:[
        {path: '/Video/Myvideo', component: Myvideo},
        {path: '/Video/Lovevideo', component: Lovevideo},
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
          path: '/Demo/Mydemo', component: Mydemo, 
              children:[
                { path: '/Demo/Mydemo/all', component: All},
                { path: '/Demo/Mydemo/Readysend', component: Readysend},
                { path: '/Demo/Mydemo/Nosend', component: Nosend},
                { path: '/Demo/Mydemo/Demo', component: All}
              ]
        },
        { path: '/Demo/Delete', component: Delete},
        { path: '', component: Mydemo}
      ]
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Snap',
      name: 'Snap',
      component: Snap
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting,
      children:[
        {path: '/Usercenter', component: Usercenter},
        {path: '/Copassword', component: Copassword},
        {path: '', component:Usercenter}
      ]
    }
  ]
})
