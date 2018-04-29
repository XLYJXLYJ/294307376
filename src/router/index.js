import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'path';
// import Lesson from '@/components/Lesson'
// import Home from '@/components/Home'
// import Material from '@/components/Material'
// import Download from '@/components/Download'
// import Publish from '@/components/Publish'
// import Source from '@/components/Source'
// import Production from '@/components/HomePage/List/Production'
// import Recommend from '@/components/HomePage/List/Recommend'
// import Demo from '@/components/Demo'
// import All from '@/components/Demo/All'
// import Nosend from '@/components/Demo/Nosend'
// import Readysend from '@/components/Demo/Readysend'
// import Mydemo from '@/components/Demo/Mydemo'
// import Delete from '@/components/Demo/Delete'
// import User from '@/components/User'
// import Setting from '@/components/Setting'
// import Copassword from '@/components/Set/Copassword'
// import Usercenter from '@/components/Set/Usercenter'
// import Video from '@/components/Video'
// import share from '@/components/share'
// import Myvideo from '@/components/Video/Myvideo'
// import Lovevideo from '@/components/Video/Lovevideo'
// import Snap from '@/components/Snap'
// import Sourceshop from '@/components/Source/Sourceshop'
// import Mysourceshop from '@/components/Source/Mysourceshop'
// import Backg from '@/components/Source/source/Backg'
// import Game from '@/components/Source/source/Game'
// import Source01 from '@/components/Source/source/Source01'
// import Study from '@/components/Source/source/Study'
// import Music from '@/components/Source/source/Music'
// import Gsource from '@/components/Source/source/Gsource'
// import Sourcelesson from '@/components/Source/source/Sourcelesson'
// import Mymusic from '@/components/Source/mysource/Mymusic'
// import Mybg from '@/components/Source/mysource/Mybg'
// import Myrole from '@/components/Source/mysource/Myrole'
// import Mystudy from '@/components/Source/mysource/Mystudy'
// import Mygame from '@/components/Source/mysource/Mygame'
// import Mysourcelesson from '@/components/Source/mysource/Mysourcelesson'


Vue.use(Router)

// export default new Router({
//     // mode: 'history',
//     routes: [
//         {path:'/',redirect:'/Home'},
//         {
//             path: '/Home',
//             component: Home,
//             name: 'Home',
//             children:[
//                 { path: '/Home/Production', component: Production},
//                 { path: '/Home/Recommend', name: 'Recommend',component: Recommend},
//                 { path: '/', component: Recommend},
//             ]
//         }, 
//       {
//           path: '/Lesson',
//           name: 'Lesson',
//           component: Lesson
//       },
//       {
//           path: '/Material',
//           name: 'Material',
//           component: Material
//       }, 
//       {
//           path: '/source',
//           name: 'Source',
//           component: Source,
//           children:[
//             {path: '/source/sourceshop', component: Sourceshop,
//                 children:[
//                     {path: '/source/sourceshop/Backg', component: Backg},
//                     {path: '/source/sourceshop/Game', component: Game},
//                     {path: '/source/sourceshop/Gsource', component: Gsource},
//                     {path: '/source/sourceshop/Source01', component: Source01},
//                     {path: '/source/sourceshop/Study', component: Study},
//                     {path: '/source/sourceshop/Music', component: Music},
//                     {path: '/source/sourceshop/Sourcelesson', component: Sourcelesson},
//                     {path: '', component:Gsource}
//                 ]
//           },
//             {path: '/source/mysourceshop', name: 'mysourceshop',component: Mysourceshop,
//                 children:[
//                     {path: '/source/mysourceshop/Mybg', component: Mybg},
//                     {path: '/source/mysourceshop/Myrole', name: 'Myrole',component: Myrole},
//                     {path: '/source/mysourceshop/Mymusic', component: Mymusic},
//                     {path: '/source/mysourceshop/Mygame', component: Mygame},
//                     {path: '/source/mysourceshop/Mystudy', component: Mystudy},
//                     {path: '/source/mysourceshop/Mysourcelesson', component: Mysourcelesson},
//                     {path: '', component:Myrole}
//                 ]
//             },
//             {path: '', component:Gsource}
//           ]
//       }, 
//       {
//           path: '/Download',
//           name: 'Download',
//           component: Download
//       },
//       {
//           path: '/Publish',
//           name: 'Publish',
//           component: Publish
//       },
//       {
//           path: '/Video',
//           name: 'Video',
//           component: Video,
//           children:[
//               {path: '/Video/Myvideo', component: Myvideo},
//               {path: '/Video/Lovevideo', component: Lovevideo},
//               {path: '', component:Myvideo}
//           ]
//       },
//       {
//           path: '/share',
//           name: 'share',
//           component: share,
//       },
//       {
//           path: '/Demo',
//           name: 'Demo',
//           component: Demo,
//           children:[
//             { 
//               path: '/Demo/Mydemo', name: 'Mydemo',component: Mydemo, 
//                   children:[
//                       { path: '/Demo/Mydemo/All', name: 'Alldemohaha',component: All},
//                       { path: '/Demo/Mydemo/Readysend', component: Readysend},
//                       { path: '/Demo/Mydemo/Nosend', component: Nosend},
//                   ]
//             },
//             { path: '/Demo/Delete', component: Delete},
//           ]
//       },
//       {
//           path: '/User',
//           name: 'User',
//           component: User
//       },
//       {
//           path: '/Snap',
//           name: 'Snap',
//           component: Snap
//       },
//       {
//         path: '/Setting',
//         name: 'Setting',
//         component: Setting,
//         children:[
//             {path: '/Setting/Usercenter', name: 'Usercenter', component: Usercenter},
//             {path: '/Setting/Copassword', component: Copassword},
//             {path: '/Setting', component:Usercenter}
//         ]
//       }
//     ]
// })






Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {path:'/',redirect:'/Home'},
        {
            path: '/Home',
            component: resolve =>require(['@/components/Home'],resolve),
            name: 'Home',
            children:[
                { path: '/Home/Production', component: resolve =>require(['@/components/HomePage/List/Production'],resolve)},
                { path: '/Home/Recommend', name: 'Recommend',component: resolve =>require(['@/components/HomePage/List/Recommend'],resolve)},
                { path: '/', component:resolve =>require(['@/components/HomePage/List/Recommend'],resolve)},
            ]
        }, 
      {
          path: '/Lesson',
          name: 'Lesson',
          component: resolve =>require(['@/components/Lesson'],resolve)
      },
      {
          path: '/Material',
          name: 'Material',
          component: resolve =>require(['@/components/Material'],resolve)
      }, 
      {
          path: '/source',
          name: 'Source',
          component: resolve =>require(['@/components/Source'],resolve),
          children:[
            {path: '/source/sourceshop', component: resolve =>require(['@/components/Source/Sourceshop'],resolve),
                children:[
                    {path: '/source/sourceshop/Backg', component: resolve =>require(['@/components/Source/source/Backg'],resolve)},
                    {path: '/source/sourceshop/Game', component: resolve =>require(['@/components/Source/source/Game'],resolve)},
                    {path: '/source/sourceshop/Gsource', component: resolve =>require(['@/components/Source/source/Gsource'],resolve)},
                    {path: '/source/sourceshop/Source01', component: resolve =>require(['@/components/Source/source/Source01'],resolve)},
                    {path: '/source/sourceshop/Study', component: resolve =>require(['@/components/Source/source/Study'],resolve)},
                    {path: '/source/sourceshop/Music', component: resolve =>require(['@/components/Source/source/Music'],resolve)},
                    {path: '/source/sourceshop/Sourcelesson', component: resolve =>require(['@/components/Source/source/Sourcelesson'],resolve)},
                    {path: '', component:resolve =>require(['@/components/Source/source/Gsource'],resolve)}
                ]
          },
            {path: '/source/mysourceshop', name: 'mysourceshop',component: resolve =>require(['@/components/Source/Mysourceshop'],resolve),
                children:[
                    {path: '/source/mysourceshop/Mybg', component: resolve =>require(['@/components/Source/mysource/Mybg'],resolve)},
                    {path: '/source/mysourceshop/Myrole', name: 'Myrole',component: resolve =>require(['@/components/Source/mysource/Myrole'],resolve)},
                    {path: '/source/mysourceshop/Mymusic', component: resolve =>require(['@/components/Source/mysource/Mymusic'],resolve)},
                    {path: '/source/mysourceshop/Mygame', component: resolve =>require(['@/components/Source/mysource/Mygame'],resolve)},
                    {path: '/source/mysourceshop/Mystudy', component: resolve =>require(['@/components/Source/mysource/Mystudy'],resolve)},
                    {path: '/source/mysourceshop/Mysourcelesson', component: resolve =>require(['@/components/Source/mysource/Mysourcelesson'],resolve)},
                    {path: '', component:resolve =>require(['@/components/Source/mysource/Myrole'],resolve)}
                ]
            },
            {path: '', component:resolve =>require(['@/components/Source/mysource/Myrole'],resolve)}
          ]
      }, 
      {
          path: '/Download',
          name: 'Download',
          component: resolve =>require(['@/components/Download'],resolve)
      },
      {
          path: '/Publish',
          name: 'Publish',
          component: resolve =>require(['@/components/Publish'],resolve)
      },
      {
          path: '/Video',
          name: 'Video',
          component: resolve =>require(['@/components/Video'],resolve),
          children:[
              {path: '/Video/Myvideo', component: resolve =>require(['@/components/Video/Myvideo'],resolve)},
              {path: '/Video/Lovevideo', component: resolve =>require(['@/components/Video/Lovevideo'],resolve)},
              {path: '', component:resolve =>require(['@/components/Video/Myvideo'],resolve)}
          ]
      },
      {
          path: '/share',
          name: 'share',
          component: resolve =>require(['@/components/share'],resolve),
      },
      {
          path: '/Demo',
          name: 'Demo',
          component: resolve =>require(['@/components/Demo'],resolve),
          children:[
            { 
              path: '/Demo/Mydemo', name: 'Mydemo',component:resolve =>require(['@/components/Demo/Mydemo'],resolve), 
                  children:[
                      { path: '/Demo/Mydemo/All', name: 'Alldemohaha',component: resolve =>require(['@/components/Demo/All'],resolve)},
                      { path: '/Demo/Mydemo/Readysend', component: resolve =>require(['@/components/Demo/Readysend'],resolve)},
                      { path: '/Demo/Mydemo/Nosend', component: resolve =>require(['@/components/Demo/Nosend'],resolve)},
                  ]
            },
            { path: '/Demo/Delete', component: resolve =>require(['@/components/Demo/Delete'],resolve)},
          ]
      },
      {
          path: '/User',
          name: 'User',
          component: resolve =>require(['@/components/User'],resolve)
      },
      {
          path: '/Snap',
          name: 'Snap',
          component: resolve =>require(['@/components/Snap'],resolve)
      },
      {
        path: '/Setting',
        name: 'Setting',
        component: resolve =>require(['@/components/Setting'],resolve),
        children:[
            {path: '/Setting/Usercenter', name: 'Usercenter', component: resolve =>require(['@/components/Set/Usercenter'],resolve)},
            {path: '/Setting/Copassword', component: resolve =>require(['@/components/Set/Copassword'],resolve)},
            {path: '/Setting', component:resolve =>require(['@/components/Setting'],resolve)}
        ]
      }
    ]
})
