<template>
		<div class='box'>
			<b_assembly :guonei='guonei' banben='1'></b_assembly>			
			<b_assembly :guonei='guowai' banben='2'></b_assembly>
		</div>
</template>

<script>
	import b_assembly from '../components/assembly.vue'
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
			
			this.$http.get('../../static/gounei.json').then((res)=>{
				this.guonei=res.data.guonei;
				this.guowai=res.data.guowai;
				this.jipiao=res.data.jipiao;
				this.zhepiao=res.data.huochepiao;
			}).catch(function(err){
				console.log('没成功')
			})		
		},
		components:{			
			b_assembly,		
		},
	}
</script>

<style>
	.box{
		width: 1200px;
		height: 400px;
		margin: 0 auto;
	}
</style>