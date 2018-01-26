<template>
	<div :class="'hh'+banben">
		<a href=""  :class="'mudd'+banben">{{txt1}}</a>
		<span> {{txt2}}</span>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			txt1:{
				
			},
			txt2:{
				default:''
			},
			colors:{
			},
			banben:{
				
			}
		},
		mounted(){
			let banben=document.querySelector('.mudd'+this.banben);
			let banbens=document.querySelector('.hh'+this.banben);				
			banben.style.color=this.colors;
			banbens.style.borderColor=this.colors;
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	div{
		width: 1200px;
		height: 30px;
		padding: 5px 0;
		border-bottom: 2px solid #f55;
		margin: 20px auto 0 auto;
		text-align: left;
		a{
			font-size: 24px;
			color: #f55;
			line-height: 24px;
		}
		span{
			font-size: 16px;
			color:#999;
			font-weight: 300;
			margin-left: 10px;
			line-height: 24px;
		}
	}
</style>