import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import admin from '@/admin'
//首页同级
import one from '@/client/route/one'
import two from '@/client/route/two'
import three from '@/client/route/three'
import four from '@/client/route/four'
import five from '@/client/route/five'
import six from '@/client/route/six'
import seven from '@/client/route/seven'

//菲律宾新页面
import flb from '@/client/ziye/flb.vue';
import bjky from '@/client/ziye/bjky.vue';

//登录注册页
import zhanghao from '@/components/zhanghao.vue'
import denglu from '@/components/denglu.vue'


//加页面
//import xxke from '@/components/xxke.vue'
//import one10 from '@/client/route/one'
//import one11 from '@/client/route/one'
//import one12 from '@/client/route/one'
//import one13 from '@/client/route/one'
//import one14 from '@/client/route/one'
//import one15 from '@/client/route/one'
//import one20 from '@/client/route/one'
//import one21 from '@/client/route/one'
//import one22 from '@/client/route/one'
//import one23 from '@/client/route/one'
//import one24 from '@/client/route/one'
//import one25 from '@/client/route/one'

Vue.use(Router)

export default new Router({
  routes: [
		{path: '/',redirect: '/admin/one'  //选中第一个默认路由
		},
    {
    	path:'/admin',
    	component: admin,
    	children:[
	    	{
		    	path:'/admin/one',
		    	component:one,
		    	alias:'首页',
		    	children:[
		    			{
		    				path:'/admin/one/jdyd',
					    	component:two,
					    	alias:'酒店预订'
		    			},
		    			{
		    				path:'/admin/one/jpcx',
					    	component:three,
					    	alias:'机票查询'
		    			},
		    			{
		    				path:'/admin/one/jdtg',
					    	component:four,
					    	alias:'酒店团购'
		    			},
		    			{
		    				path:'/admin/one/rmcs',
					    	component:six,
					    	alias:'热门城市'
		    			},
		    			{
		    				path:'/admin/one/hzhb',
					    	component:five,
					    	alias:'合作伙伴'
		    			},
		    			{
		    				path:'/admin/one/cjjd',
					    	component:six,
					    	alias:'常见酒店'
		    			},
		    			//路由
//		    			{
//		    				path:'/admin/one/ym10',
//					    	component:one10,
//		    			},
//		    			{
//		    				path:'/admin/one/ym11',
//					    	component:one11,
//		    			},
//		    			{
//		    				path:'/admin/one/ym12',
//					    	component:one12,
//		    			},
//		    			{
//		    				path:'/admin/one/ym13',
//					    	component:one13,
//		    			},
//		    			{
//		    				path:'/admin/one/ym14',
//					    	component:one14,
//		    			},
//		    			{
//		    				path:'/admin/one/ym15',
//					    	component:one14,
//		    			},
//		    			//第二个
//		    			{
//		    				path:'/admin/one/ym20',
//					    	component:one20,
//		    			},
//		    			{
//		    				path:'/admin/one/ym21',
//					    	component:one21,
//		    			},
//		    			{
//		    				path:'/admin/one/ym22',
//					    	component:one22,
//		    			},
//		    			{
//		    				path:'/admin/one/ym23',
//					    	component:one23,
//		    			},
//		    			{
//		    				path:'/admin/one/ym24',
//					    	component:one24,
//		    			},
//		    			{
//		    				path:'/admin/one/ym25',
//					    	component:one25,
//		    			},
		    	]
	    	},
	    	{
		    	path:'/admin/two',
		    	component:two,
		    	alias:'国内酒店'
	    	},
	    	{
		    	path:'/admin/three',
		    	component:three,
		    	alias:'国际酒店'
	    	},
	    	{
		    	path:'/admin/four',
		    	component:four,
		    	alias:'机票'
	    	},
	    	{
		    	path:'/admin/five',
		    	component:five,
		    	alias:'火车票'
	    	},
	    	{
		    	path:'/admin/six',
		    	component:six,
		    	alias:'汽车票'
	    	},
	    	{
		    	path:'seven',
		    	component:seven,
		    	alias:'旅游指南'
	    	}
    	]
    },
    {
    	path:'/flb',
    	component:flb
    },
    {
    	path:'/bjky',
    	component:bjky
    },
    {
    	path:'/zhanghao',
    	name:'账号登录注册',
    	component:denglu
    },
    {
    	path:'/xxke',
    	name:'账号登录注册',
    	component:denglu
    },
  ]
})


//path:'index',
//component:indexs,
//alias:'内容'
