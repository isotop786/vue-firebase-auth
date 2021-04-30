import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:"/signin",
    name: "Signin",
    component: ()=> import ('../views/Signin'),
    meta: {
      guest: true
    }
  },
  {
    path:"/signup",
    name:"Signup",
    component: ()=> import ('../views/Signup'),
    meta:{
      guest: true
    }
  },
  {
    path:'/dashboard',
    name:"Dashboard",
    component: ()=> import('../views/Dashboard'),
    meta:{
      auth : true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// router.beforeEach((to,from,next)=>{
//  console.log(store.getters.user.loggedIn)
// })

router.beforeEach((to,from,next)=>{
  if(!store.getters.user.loggedIn && to.meta.auth){
    next({
      name : 'Signin'
    })
  }else{
    next()
  }


  if(store.getters.user.loggedIn && to.meta.guest ){
    next({
      name:'Home'
    })
  }else{
    next()
  }


})


export default router
