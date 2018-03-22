<template>
	<div>
		<v_carousel></v_carousel>
		<div class="trues" v-if='true'>
			<div class="truebox">
				<i></i>
				<a href="">登录</a><span @click="vxadd('你好')">展示你的个性化内容</span>
			</div>
		</div>
		<div class="sf">
			<v_sf></v_sf>
		</div>
		<v_title banben='1' txt1='目的地指数' txt2='覆盖全球75万家酒店，你想住的，我们都有' colors='#f55'></v_title>
		<div class="one">
			<b_assembly :guonei='guonei' banben='1'></b_assembly>			
			<b_assembly :guonei='guowai' banben='2'></b_assembly>
		</div>
		<v_title banben='2' txt1='超值特价票' txt2='' colors='#49f' ></v_title>
		<div class="two">
			<b_ticket :dates='jipiao' banben='1'></b_ticket>
			<b_ticket :dates='zhepiao' banben='2'></b_ticket>
		</div>
		<v_title banben='3' txt1='旅游指南' txt2='' colors='#77cc11'></v_title>
		<div class="three">
			<v_lvyou></v_lvyou>
		</div>
		<div class="footerone">
			<v_footer_a></v_footer_a>
		</div>
		<v_footers></v_footers>
		<div class="luyou">
			<ul class='luyouul'>
				<li v-for='iem in toutera'><router-link :to='iem.path' >{{iem.alias}}</router-link></li>
			</ul>
		</div>
		<div class="view">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import v_carousel from './carousel.vue'
	import v_sf from './sf.vue'
	import b_assembly from '../../components/assembly.vue'
	import v_title from '../../components/title.vue'
	import b_ticket from '../../components/ticket.vue'
	import v_lvyou from '../one/lvyou.vue'
	import v_footers from '../../components/footers.vue'
	import v_footer_a from '../../components/footer_a.vue'
	
//	vuex
	import {mapState,mapMutations} from 'vuex'
	
	export default{
		data(){
			return{
				guonei:{},  //国内数据
				guowai:{},  //国外数据
				jipiao:{},  //机票数据
				zhepiao:{}, //车票数据
				routera:{}  //页脚路由
			}
		},
		created(){
			//页脚路由   拿到data区域
			this.toutera=this.$router.options.routes[1].children[0].children
			
			this.$http.get('../../../static/gounei.json').then((res)=>{
				this.guonei=res.data.guonei;
				this.guowai=res.data.guowai;
				this.jipiao=res.data.jipiao;
				this.zhepiao=res.data.huochepiao;
			}).catch(function(err){
				console.log('没成功')
			})		
		},
		mounted(){		

		},
		components:{
			v_carousel,
			v_sf,
			b_assembly,
			v_title,
			b_ticket,
			v_lvyou,
			v_footer_a,
			v_footers
		},
		methods:{
			...mapMutations(['add','reduce']),
			vxadd(name){
				console.log(this.count);
				this.add(name);
				console.log(this.count);
			}
		},
		 computed: {
            ...mapState([
                'count'
            ]),
        }
		
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.trues{
		width: 1200px;
		height: 32px;
		margin: 20px auto 20px auto;
		.truebox{
			float: left;
			font-size: 14px;
			padding:6px 20px 5px 20px;
			border: 1px solid #ccc;
			border-radius: 15px;
			color:#666;
			i{
				display: block;
				float: left;
				background: url(../../assets/icon_index.png) -583px -16px no-repeat;
				width: 14px;
				height: 14px;
				margin: 1px 5px;			
			}
			a{
				color: #37D;
				&:hover{
					color: red;
				}
			}
		}
	}
	.sf{
		width: 1200px;
		height: 260px;
		background: #abcdef;
		margin: 0 auto;
	}
	.one{
		width: 1200px;
		margin: 0 auto;
	}
	.two{
		width: 1200px;
		margin: 0 auto;
	}
	.three{
		width: 1200px;
		margin: 0 auto;
	}
	.footerone{
		width: 1200px;
		height: 100px;
		margin: 20px auto 0 auto;
	}
	.luyou{
		width: 100%;		
		height: 40px;
		background: #7c8fa2;
		.luyouul{
			width: 1000px;
			height: 40px;
			margin: 0 auto;
			li{
				float: left;
				width: 166px;
				height: 40px;
				line-height: 40px;
			    text-align: center;
				a{
					color:#fff;
					width: 100%;
					height: 100%;
					display: inline-block;
					&:hover{
						background: #8da1b5;
					}
					&.router-link-active{
						color: #333;
						background: #c0d2e4;
					}
				}
			}
		}
	}
	.view{
		width: 1000px;
		margin: 0 auto;
	}
</style>