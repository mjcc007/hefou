import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //默认路由
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '',
      component: () => import('@/views/layout/home'),
      redirect: 'homepage',
      children: [{
        path: 'homepage',
        component: () => import('@/views/subpageframe/homepage/homepage'),
        name: 'homepage',
        meta: {title: 'homepage'}
      }]
    },
    {
      path: '/home',  //路由可以传参的 /home/:id
      //props: true,  //当为true的时候会直接将query参数传入到组件的props中
      name: 'home',
      component:  () => import('@/views/layout/home'),
      // 用来保存路由的信息
      meta: {
        title: 'this is a home',
        description: 'sss'
      },
      //子路由
      children: [
        {path: 'homepage', component: () => import('@/views/subpageframe/homepage/homepage'), name: 'homepage', meta: {title: 'homepage'}},
        {path: 'story', component: () => import('@/views/subpageframe/story/story'), name: 'homepage', meta: {title: 'homepage'}}
      ]
    }
  ],
  mode: 'history', //
  base: '/base/', //会在每一个路径上之前添加这个参数
  /*全局的router-link会添加这个类名 便于我们去配置全局的样式*/
  //linkActiveClass: 'active-link',
  //linkExactActiveClass: 'exact-active-link'

  //页面跳转的时候是否需要滚动, 就是跳转返回是否返回到之前的位置
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // }
  //

  //url后面跟的参数叫做query， 默认是转成json，但是有特殊需求就使用下面的方式
  // parseQuery (query) {

  // },
  // stringifyQuery (obj) {

  // }

  //fallback: true  //不是所有的浏览器都支持histrory的前端路由方式，就是页面不跳转，内容切换，但是url改变了
  //设置成false  就可以成为多页应用了
})
