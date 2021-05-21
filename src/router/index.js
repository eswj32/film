import Vue from 'vue'
import VueRouter from 'vue-router'

const SignIn = () => import('../views/signIn/SignIn')
const Login = () => import('../views/signIn/childComps/Login')
const Register = () => import('../views/signIn/childComps/Register')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const DetailDes = () => import('../views/detail/detailDes/DetailDes')
const DetailDis = () => import('../views/detail/detailDis/DetailDis')


//安装插件
Vue.use(VueRouter)


//创建luyou路由对象
const routes = [{
    path: '',
    redirect: '/signin'
  },{
    path: '/signin',
    component: SignIn,
    children: [{
      path: '',
      redirect: '/signin/login'
    },{
      path: 'login',
      name: 'login',
      component: Login
    },{
      path: 'register',
      name: 'register',
      component: Register
    }]
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:id',
    component: Detail,
    children: [{
      path: '',
      redirect: '/detail/:id/detailDes'
    }, {
      path: 'detailDes',
      name: 'DetailDes',
      component: DetailDes
    }, {
      path: 'detailDis',
      name: 'DetailDis',
      component: DetailDis
    }, 
  ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


//导出router
export default router