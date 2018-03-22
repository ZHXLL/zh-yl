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
    	name:'嗷嗷嗷',
    	component:denglu
    },
  ]
})


//path:'index',
//component:indexs,
//alias:'内容'
