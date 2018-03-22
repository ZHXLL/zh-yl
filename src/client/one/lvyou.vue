<template>
	<div class="box">
		<div class="xxk">
			<ul class='xxk_left'>
				<li v-for='(iem,index) in txt' :class='index==0?"on":"hehe"'><a href="">{{iem.name}}</a> <span></span></li>				
			</ul>
			<ul class='xxk_right'> 
				<li v-for='iem in txt'><a href=""><img :src="iem.src" alt="" /></a></li>
			</ul>
		</div>
		<div class='text'>
			<ul>
				<li>
					<router-link to='/flb' target="_blank">
						<div class='img'>
							<img src="../../assets/dgtq-ls.jpg" alt="" />
						</div>						
					</router-link>
					<div class='benp'>
							<p>菲律宾 9座岛屿梦幻假期</p>
					</div>
				</li>		
				
				<li>
					<router-link to='/bjky' target="_blank">
						<div class='img'>
							<img src="../../assets/17121255.jpg" alt="" />
						</div>						
					</router-link>
					<div class='benp'>
							<p>今冬北京 圣诞情浓</p>
							
					</div>
				</li>
				
			</ul>
		</div>
	</div>
</template>

<script>
	import img1 from '../../assets/17121251.jpg'
	import img2 from '../../assets/17121252.jpg'
	import img3 from '../../assets/17121253.jpg'
	import img4 from '../../assets/17121254.jpg'
	export default{
		data(){
			return{
				txt:[
					{name:'京郊民宿 吃热气腾腾火锅盆',src:img1},
					{name:'盘点江浙沪亲子酒店',src:img2},
					{name:'泸沽湖客栈的正确打开方式',src:img3},
					{name:'这个冬天 去惠斯勒滑雪',src:img4}
				]
			}
		},
		mounted(){
			let hove=document.querySelectorAll('.xxk_left>li');
			let vie=document.querySelectorAll('.xxk_right>li')
			for(let i=0;i<hove.length;i++){
				hove[i].onmouseover=function(){					
					for(let a=0;a<hove.length;a++){
						hove[a].className='hehe'
					}
					hove[i].className+=' on'
					for(let a=0;a<vie.length;a++){
						vie[a].style.display='none'
					}
					vie[i].style.display='block'
				}
			}
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.box{
		width: 100%;
		height: 222px;
		padding-top: 10px;
		.xxk{
			width: 580px;
			height: 220px;
			float:left;
			.xxk_left{
				float: left;
				li{
					width: 200px;
					height: 54px;
					padding: 0 10px;
					border-bottom: 1px solid #ccc;
					position: relative;
					a{
						display: inline-block;
						line-height: 53px;
						font-size: 14px;
						color: #333;						
					}
					&>span{
						position: absolute;
						width: 12px;
						height: 19px;
						top: 18px;
						right: -12px;
						z-index: 3;
					}
					&.on{
						background: #89ca00;
						border-bottom: 1px solid #fff;
						a{
							color: #fff;
						}
						&>span{
							background: url(../../assets/icon_index.png) -547px 0 no-repeat;
						}
					}
				}
			}
			.xxk_right{
				float: left;
				position: relative;
				li{
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					&:nth-child(1){
						z-index: 2;
					}
					img{
						width: 360px;
						height: 220px;
					}
				}
			}
		}
		.text{
			width: 600px;
			height: 222px;
			float: right;
			ul{
				li{
					width: 292px;
					height: 222px;
					float: left;
					margin-left: 8px;
					a{					
						&>div{
							width: 292px;
							height: 180px;
							overflow: hidden;
							position: relative;
							img{
								width: 300px;
								height: 200px;
								position: absolute;
								top: -15px;
								transition:all 0.5s;
							}
							span{
								position: absolute;
								bottom: 8px;
								left: 8px;
								font-size: 20px;
								color:#fff;
								font-weight: 500;
								text-shadow: 1px 1px 7px #000;
							}
						}
					}
					p{
						font-size: 14px;
						color: #999;
						line-height: 29px;
						padding: 6px 5px 5px 5px;
					    background: #f7f7f7;
					    border-bottom: 1px solid #ccc;
					    margin-bottom: 1px;
					}
					&:hover{
						p{
							border-bottom: 2px solid #77cc11;
						}
					}
				}
			}
		}
	}
</style>