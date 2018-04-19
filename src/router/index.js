import Vue from 'vue'
import Router from 'vue-router'
import Lesson from '@/components/Lesson'
import Home from '@/components/Home'
import Material from '@/components/Material'
import Download from '@/components/Download'
import Publish from '@/components/Publish'
import Source from '@/components/Source'
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
import Sourceshop from '@/components/Source/Sourceshop'
import Mysourceshop from '@/components/Source/Mysourceshop'
import Backg from '@/components/Source/source/Backg'
import Game from '@/components/Source/source/Game'
import Source01 from '@/components/Source/source/Source01'
import Study from '@/components/Source/source/Study'
import Music from '@/components/Source/source/Music'
import Gsource from '@/components/Source/source/Gsource'
import Mymusic from '@/components/Source/mysource/Mymusic'
import Mybg from '@/components/Source/mysource/Mybg'
import Myrole from '@/components/Source/mysource/Myrole'
import Mystudy from '@/components/Source/mysource/Mystudy'
import Mygame from '@/components/Source/mysource/Mygame'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {path:'/',redirect:'/Home'},
    {
      path: '/Home',
      component: Home,
      name: 'Home',
      children:[
        { path: '/Home/Production', component: Production},
        { path: '/Home/Recommend', name: 'Recommend',component: Recommend},
        { path: '/', component: Recommend},
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
      path: '/source',
      name: 'Source',
      component: Source,
      children:[
        {path: '/source/sourceshop', component: Sourceshop,
            children:[
              {path: '/source/sourceshop/Backg', component: Backg},
              {path: '/source/sourceshop/Game', component: Game},
              {path: '/source/sourceshop/Gsource', component: Gsource},
              {path: '/source/sourceshop/Source01', component: Source01},
              {path: '/source/sourceshop/Study', component: Study},
              {path: '/source/sourceshop/Music', component: Music},
              {path: '', component:Gsource}
            ]
      },
        {path: '/source/mysourceshop', name: 'mysourceshop',component: Mysourceshop,
            children:[
              {path: '/source/mysourceshop/Mybg', component: Mybg},
              {path: '/source/mysourceshop/Myrole', name: 'Myrole',component: Myrole},
              {path: '/source/mysourceshop/Mymusic', component: Mymusic},
              {path: '/source/mysourceshop/Mygame', component: Mygame},
              {path: '/source/mysourceshop/Mystudy', component: Mystudy},
              {path: '', component:Myrole}
            ]
        },
        {path: '', component:Gsource}
      ]
    }, 
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
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
                { path: '', component: All}
              ]
        },
        { path: '/Demo/Delete', component: Delete},
        { path: '', component:All}
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
        {path: '/Setting/Usercenter', component: Usercenter},
        {path: '/Setting/Copassword', component: Copassword},
        {path: '/Setting', component:Usercenter}
      ]
    }
  ]
})
