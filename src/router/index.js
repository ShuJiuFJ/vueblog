import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about_me from '../views/about_me.vue'
import shop from '../views/shop.vue'
import time from '../views/time.vue'
import leaveComments from '../views/leaveComments.vue'
import detail from '../components/detail.vue'
import login from '../views/login.vue'
import back from '../views/back.vue'
import add from '../components/add.vue'
import error from '../views/404.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({ 
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    //关于我
    {
        path: '/about_me',
        name: 'about_me',
        component: about_me
    },
    //商场
    {
        path: '/shop',
        name: 'shop',
        component: shop
    },
    //时间轴
    {
        path: '/time',
        name: 'time',
        component: time
    },
    //留言
    {
        path: '/leaveComments',
        name: 'leaveComments',
        component: leaveComments
    },
	//登录
	{
	    path: '/login',
	    name: 'login',
	    component: login
	},
	//后台
	{
	    path: '/back',
	    name: 'back',
	    component: back,
		meta:{
			requireAuth:true
		}
	},
	//添加
	{
	    path: '/add',
	    name: 'add',
	    component: add,
	},
	//详情
     {
    path:'/detail/:id',
    name:'detail',
    component:() => import('../components/detail.vue')
     },
	 //修改
	 {
	 path:'/detail/:id/edit',
	 name:'edit',
	 component:() => import('../components/edit.vue'),
	 meta:{
	 	requireAuth:true
	 }
	  },
	  
	  //404
	  {
		  path:'*',
		  component:error
	  }
]})


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (localStorage.getItem("token")) { // 判断本地是否存在access_token
      next()
    } else {
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
      next('/login')
    }
  } else {
    next()
  }
})


// router.beforeEach((to,from,next) => {
	
// 	if(to.path === '/login'){
// 		return next();
// 	}else{
// 		const token = localStorage.getItem("token");
// 		if(token){
// 			next();
// 		}else{
// 			router.push({
// 				name:"login"
// 			})
// 		}
// 	}
			
// })

export default router
