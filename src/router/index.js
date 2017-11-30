import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/web/Index'
import About from "@/components/web/About"
import Cooperate from "@/components/web/Cooperate"
import Service from "@/components/web/Service"
import Summersch from "@/components/web/Summersch"
import Exchangestu from "@/components/web/Exchangestu"
import Undergraduate from "@/components/web/Undergraduate"
import Ueec from "@/components/web/Ueec"
import Freshman from "@/components/web/Freshman"
import Contact from '@/components/web/Contact'
import InfoList from '@/components/web/InfoList'
import Info from '@/components/web/Info'
import InfoDetails from '@/components/web/InfoDetails'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
  },{
    path: '/about',
    name: 'About',
    component: About,
  },{
  	path:'/cooperate',
  	name:'Cooperate',
  	component:Cooperate
  },{
  	path:'/service',
  	name:'Service',
  	component:Service
  },{
  	path:'/summersch',
  	name:'Summersch',
  	component:Summersch
  },{
  	path:'/exchangestu',
  	name:'Exchangestu',
  	component:Exchangestu
  },{
  	path:'/undergraduate',
  	name:'Undergraduate',
  	component:Undergraduate
  },{
  	path:'/ueec',
  	name:'Ueec',
  	component:Ueec
  },{
  	path:'/freshman',
  	name:'Freshman',
  	component:Freshman
  },{
  	path:'/contact',
  	name:'Contact',
  	component:Contact
  },{
    path:'/infolist',
    component:InfoList,
    children:[{
      path:'',
      name:'Info',
      component:Info,
    },{
      path:'details',
      name:'InfoDetails',
      component:InfoDetails
    }]
  }]
})
