<template>
	<div class='abc'>
		<ul>
			<li class='a_1'>1</li>
			<li class='a_1' >2</li>
			<li class='a_1' >3</li>
		</ul>
		<ol>
			<li class='a_2'>一</li>
			<li class='a_2'>二</li>
			<li class='a_2'>三</li>
		</ol>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			let btn=document.querySelectorAll('.a_1');
			let vie=document.querySelectorAll('.a_2');
			for(let i=0;i<btn.length;i++){
				btn[i].onclick=function(){
					for(let a=0;a<btn.length;a++){
						btn[a].style.background='#ccc'
					}
					for(let a=0;a<btn.length;a++){
						vie[a].style.display='none'
					}
					vie[i].style.display='block'
					btn[i].style.background='#abcdef'
				}
			}
			
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	div{
		line-height: 100px;
		/*text-align: center;*/
		/*font: 20px;*/
		ul{
			li{
				float: left;
				display: block;
				width: 100px;
				height: 50px;
				text-align: center;
				line-height: 50px;
				font-style: 20px;
				margin: 5px;
				background: #ccc;
			}
		}
		ol{
			width: 300px;
			height: 300px;
			float: left;
			position:relative;
			li{
				width: 300px;
				height: 300px;
				position: absolute;
				top: 0;
				background: darkgrey;
				line-height: 300px;
				text-align: center;
				font-size: 30px;
			}
		}
	}
</style>