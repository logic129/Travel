/*eslint-disable*/
// eslint-disable
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import DetailWeekend from '@/pages/detailweekend/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component:Home
  },{
    path: '/city',
    name: 'City',
    component:City
  },{
    path: '/detail/:id',
    name: 'Detail',
    component:Detail
  },{
    path: '/detailweekend/:id',
    name: 'DetailWeekend',
    component:DetailWeekend
  }],
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
