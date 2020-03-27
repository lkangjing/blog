import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Articles from '../views/Articles.vue'
import Article from '../views/Article.vue'
import Myself from '../views/Myself.vue'
import RewardMe from '../views/RewardMe.vue'
import AddBlog from '../views/AddBlog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: { title: '主页' },
    children:[
      {
        path:'/',
        name:'articles',
        component:Articles,
        meta: { title: '主页' },
      },
      {
        path:'/article/:id',
        // path:'/article', 
        name:'article',
        component:Article,
        meta: { title: '博客详情' },
      },
      {
        path:'/myself',
        name:'myself',
        meta: { title: '个人介绍' },
        component:Myself
      },
      {
        path:'/rewardme',
        name:'rewardme',
        meta: { title: '打钱' },
        component:RewardMe
      },
      {
        path:'/addblog',
        name:'addblog',
        meta: { title: '添加博客' },
        component:AddBlog
      },
      {
        path:'/editor/:id',
        name:'editor',
        meta: { title: '更改内容' },
        component:AddBlog
      }
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('to:',to,'from:',from);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (document.getElementById('line')) {
    // document.getElementById('line').style.display = 'block'
    document.getElementById('line').style.width ='0px'
  }
  // setTimeout(() => {
    next()
  // }, 2000);
  
})

router.afterEach((to, from) => {
  
  if (document.getElementById('line')) {
    // console.log('line:',document.getElementById('line').style.width);
    document.getElementById('line').style.width = '100%'
    // document.getElementById('line').style.display = 'none'
  }
})


export default router
