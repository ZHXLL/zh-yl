<template>
	<div class='top'>
		<div class="va1">
			<v_a_1></v_a_1>
		</div>		
		<div class="imgtop"></div>
		<div class="bottoml2" id='bottoml2'>
			<ul>
				<li v-for='(iem,index) in stass'>
					<a href=""><img :src="iem.src" alt="" /></a>
					<div class="libox">
						<div class="libox_a">
							<p>Hotel</p>
							<i>{{(index+1)}}</i>
						</div>
						<div class="txtbox">
							<div class="txtb1"><i>{{iem.name}}</i></div>
							<p>{{iem.txt}}</p>
							<div class="txtb2">
								<p>Lagen Island</p>
								<p>CathedralCave PinagbuyutanIsland CudugnonCave</p>
							</div>
						</div>
						<div class="btnbox">
							<span><a href="">去看看</a></span>
							<span v-if='iem.jiage<=0'>暂无价格</span>
							<span v-else=''>￥{{iem.jiage}} 起</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="bottomx">
			© 1999 - 2016 eLong, Inc or its affiliates. All Rights Reserved.京ICP证010011号 京公网安备110000000021号
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import img1 from '../../../assets/000bplQC.jpg';
	import v_a_1 from './a_1'
	export default{
		data(){
			return{
				stass:{},
				datas:{}
			}
		},
		 computed:{
	        
	    },
		components:{
			v_a_1
		},
		props:['image','indexs','colors'],
		mounted(){			
			let imgtop=document.querySelector('.imgtop');
			imgtop.style.backgroundImage = 'url('+this.image+')';			
		},
		created(){
			this.$http.get('../../../static/ziyemian.json').then((res)=>{
				this.stass=res.data[this.indexs].neir
				console.log(this.stass)
			}).catch((err)=>{
				console.log('没成功')
			})
		},
		updated(){
			let arr1=document.querySelectorAll('.libox_a');
			let arr2=document.querySelectorAll('.txtb1>i');
			let arr3=document.querySelectorAll('.btnbox a');
			for(let i=0;i<arr1.length;i++){
				arr1[i].style.background=this.colors
				arr2[i].style.color=this.colors
				arr3[i].style.background=this.colors
			}
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">

	.top{
		width: 100%;
		overflow: hidden;
		background: #d3e9f7;
		.imgtop{
			width: 100%;
			height: 380px;		
			background-position: center;
			background-repeat: no-repeat;
		}	
		.bottoml2{
			width: 1200px;
			margin: 0 auto;
			ul{
				width: 100%;
				margin-top: 20px;
				overflow: hidden;
				li{
					float: left;
					width:380px;
					height: 630px;
					margin: 10px;
					border-radius: 10px;
					overflow: hidden;
					background: #fff;
					box-shadow: 3px 4px 7px rgba(0,0,0,0.2);
					&>a{
						display: inline-block;
						width: 100%;
						height: 296px;
						overflow: hidden;
						img{
							height: 296px;
						}
					}
					.libox{
						width: 346px;
						height: 290px;
						padding: 45px 17px 0 17px;
						position: relative;
						.libox_a{
							width: 60px;
							height: 50px;
							padding-top: 10px;
							background: #0a8c8f;
							position: absolute;
							left: 160px;
							top:-30px;
							border-radius: 50%;
							text-align: center;
							
							p{
								font-weight: 500;
								color: #fff;
								font-size: 16px;
								line-height: 18px;
							}
							i{
								font-style: italic;
								text-align: center;
								color: #fff;
								font-size: 26px;
							}
						}
						.txtbox{
							.txtb1{
								width: 346px;
								height: 32px;
								text-align: center;
								i{
									font-style: italic;
									text-align: center;
									color:#0a8c8f;
									font-size: 24px;
								}
							}
							&>p{
								overflow: hidden;
								padding-top: 12px;
							    line-height: 26px;
							    color: #666666;
							    font-size: 14px;
							    height: 106px;
							   	-webkit-line-clamp: 4;
							   	display: -webkit-box;
							   	-webkit-box-orient: vertical
							}
							.txtb2{
								width: 100%;
								height: 64px;
								color: #adacac;
								p{
									width:324px;
									height: 32px;
									padding-left: 22px;
									line-height: 32px;
									&:nth-child(1){
										background: url(../../../assets/icon1.jpg) 5px 7px no-repeat;
									}
									&:nth-child(2){
										background: url(../../../assets/icon2.jpg) 5px 7px no-repeat;
									}
								}
							}
						}
						.btnbox{
							width: 100%;
							height: 40px;
							background: #fff;
							float: left;
							margin-top: 30px;
							span{
								float: right;
								font-size: 12px;
								&:nth-child(2){
								    display: inline-block;
								    padding-right: 26px;
								    color: #898989;
								    font-size: 14px;
								    margin-top: 10px;
								}
								a{
									display: inline-block;
									padding: 7px 13px;
									background: yellowgreen;
									border-radius: 5px;
									color:#fff;
									margin-top: 3px;
								}
							}
						}
					}
				}
			}
		}
		.bottomx{
			text-align: center;
			line-height: 61px;
			margin-top: 20px;
			background: #fff;
		}
	}
	@media screen and (min-width: 1200px){ 		
   		#bottoml2{
   			width: 1200px;
   		}
   		
	}
	@media (min-width: 900px) and (max-width: 1199px){
	   #bottoml2{
   			width: 840px;
   			ul{
   				li{
   					margin: 20px;
   				}
   			}
   		}
   		 
	}
	@media screen and (max-width: 899px){
	   #bottoml2{
   			width: 465px;
   			ul{
   				li{
   					margin: 20px 40px 20px 40px;
   				}
   			}
   		}
   		 
	}
	
</style>