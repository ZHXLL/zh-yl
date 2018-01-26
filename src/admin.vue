<template>
	<div class='header'>
		<div class="headertop">
			<a href=""></a>
			<div class="hea_t_r">
				<span>
					<i></i>
					<p>7×24 客服电话</p>
					<b>4009-333-333 <i></i></b>
					<div class="one">
						<ul>
							<li>
								<p>国内：4009-333-333</p>
							</li>
							<li>
								<p>香港：852-8131-8883</p>
								<p class='one-p'>852-8131-8983</p>
							</li>
							<li>
								<p>海外：86-10-6432-9999</p>
							</li>
						</ul>
					</div>
				</span>
				<a>
					<i></i>
					<p>手机版</p>
					<b>专享五折起</b>
					<div class="two">		
						
					</div>
				</a>
				<a>
					<i></i>
					<p>手机版</p>
					<b>专享五折起</b>
					<div class="two">		
						
					</div>
				</a>
				<div class='hea_t_l'>
					<ul>
						<li><a href="">里程商城</a></li>
						<li><a href="">在线客服</a></li>
						<li class='none'><a href="">简体中文</a></li>
					</ul>
				</div>
			</div>		
		</div>
		<div class="headerbuttom">
			<div class="hea_b">
				<ul>
					<li v-for='(iem,index) in route'>
						<router-link :to='iem.path'>{{iem.alias}}</router-link>
					</li>					
				</ul>
				<div class='log'>
					<span><router-link to='/zhanghao'>mcygengxin</router-link></span> | 
					<span><a href="">注册</a></span>
					<div class="logbox">
						<router-link to='/zhanghao' class='lga'>登录</router-link>
						<ul>
							<li v-for='(iem,index) in num'>
								<b></b>
								<a href="" :class="'one_'+index">{{iem}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				route:{},
				num:['酒店订单','机票订单','火车票订单','现金账户','汽车票订单','酒店收藏','我的点评','个人设置']
			}
		},
		mounted(){
			
		},
		created(){
			this.route=this.$router.options.routes[1].children;
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.header{
		width:100% ;
		height: 115px;
		.headertop{
			width: 1200px;
			height: 50px;
			padding-top: 12px;
			margin: 0 auto;
			&>a{
				display: block;
				float: left;
				width: 130px;
				height: 50px;
				background: url(assets/icon201706.png)  -658px 0px no-repeat;
			}
			.hea_t_r{
				width: 870px;
				height: 42px;
				float: right;
				margin-top: 5px;
				&>span{
					display: block;
					width: 180px;
					height: 42px;
					float: right;
					position: relative;
					text-align:left;
					.one{
						width: 160px;
						position: absolute;
						top: 50px;
						background: #fff;
						color: #c5c5c5;
						text-align:left;
						padding:4px 10px;
						box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						display: none;
						z-index:5;
						.one-p{
							text-indent: 3em;
						}
						&>ul>li{
							border-bottom: 1px dashed #c5c5c5;
							padding:4px 0;							
						}
					}
					&:hover .one{
						display: block;
					}
					&>i{
						display: block;
						width: 42px;
						height: 42px;
						background:url(assets/icon201706.png) -42px -762px no-repeat;
						float: left;
					}
					&>p{
						float: left;
						padding: 5px 0 0 10px;
						font-size: 14px;
						color: #999;
					}
					&>b{
						float: left;
						color: #2064c8;
					    font-size: 16px;
					    border: 1px solid #fff;
					    width: 124px;
					    padding: 2px 0 0 10px;					    
					    font-weight: 400;
					    &>i{
					    	display: block;
					    	width: 9px;
					    	height: 8px;
					    	float: right;
					    	margin: 5px 5px 0 0 ;
					    	background:url(assets/icon201706.png) -378px -772px ;
					    }
					}
				}
				&>a:nth-child(2){
					display: block;
					width: 150px;
					height: 42px;
					float: right;
					position: relative;
					text-align:left;
					color: #ff6a6a;
					&:hover .two{
						display: block;
					}
					&>i{
						display: block;
						width: 42px;
						height: 42px;
						background:url(assets/comiconphone.gif) no-repeat;
						float: left;
					}
					&>p{
						float: left;
						padding: 5px 0 0 10px;
						font-size: 14px;						
					}
					&>b{
						float: left;
					    font-size: 16px;
					    border: 1px solid #fff;
					    padding: 2px 0 0 10px;					    
					    font-weight: 400;
					}
					.two{
						width: 210px;
						height:92px;
						background: red;
						position: absolute;
						top: 50px;
						background: url(assets/icon201706.png) no-repeat -460px -48px #fff;
						padding: 10px;
						box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						display: none;
						z-index: 5;
					}
				}
				&>a:nth-child(3){
					display: block;
					width: 150px;
					height: 42px;
					float: right;
					position: relative;
					text-align:left;
					color: #09bb07;
					&:hover .two{
						display: block;
					}
					&>i{
						display: block;
						width: 42px;
						height: 42px;
						background:url(assets/icon201706.png) -127px -763px;
						float: left;
					}
					&>p{
						float: left;
						padding: 5px 0 0 10px;
						font-size: 14px;						
					}
					&>b{
						float: left;
					    font-size: 16px;
					    border: 1px solid #fff;
					    padding: 2px 0 0 10px;					    
					    font-weight: 400;
					}
					.two{
						width: 210px;
						height:92px;
						background: red;
						position: absolute;
						top: 50px;
						z-index: 5;
						background: url(assets/icon201706.png) no-repeat -397px -173px ;
						padding: 10px;
						box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						display: none;
					}
				}
				.hea_t_l{
					width:350px;
					height: 21px;
					float: left;
					ul{
						width:100%;
						height: 100%;
						li{
							float: left;
							margin: 5px 0;
							padding: 0 10px;	
							border-right: 1px solid #5c5c5c;		
							&.none{
								border:none;
							}										
							a{								
								line-height: 15px;
								font-size: 10px;
								color:#5c5c5c;
								&:hover{
									color: #ff5c5c;
								}
							}
						}
					}
				}
			}			
		}
		.headerbuttom{
			width: 100%;
			height: 40px;
			margin-top: 13px;
			background: #2064c8;
			.hea_b{
				width: 1200px;
				height: 40px;
				margin: 0 auto;
				&>ul{
					width: 483px;
					height: 40px;
					background: #2064c8;
					float: left;
					li{
						float: left;
						line-height: 40px;						
						font-size: 14px;
						border-right: 1px solid #3774ce;
						a{
							display: inline-block;
							color: #fff;
							padding: 0 12px;
							&.router-link-active{
								background: #003679;
							}
						}
					}
				}
				.log{
					width: 120px;
					height: 40px;
					background: #003679;
					float: right;
					line-height: 40px;
					font-size: 14px;
					color: #fff;
					position: relative;
					text-align: center;
					&:hover .logbox{
						display: block;
					}
					span{
						a{
							color: #fff;
							&:hover{
								color:yellow;
							}
						}
					}
					.logbox{
						width: 210px;						
						height: 281px;
						background: #fff;
						position: absolute;
						top: 40px;
						z-index: 4;
						right: 0;
						border:1px solid rgba(0,0,0,0.3);
						display: none;
						.lga{
							display: inline-block;
							width: 180px;
							height: 34px;
							border-radius: 5px;
							background: #f80;
							text-align: center;
							line-height: 34px;
							font-size: 14px;
							color: #fff;
							margin-top:15px ;
						}
						ul{
							width: 190px;
							height:210px;
							padding: 20px 10px 0 10px;
							li{
								float: left;
								width: 60px;
								height: 60px;
								margin-bottom: 10px;
								margin-right: 3px;
								b{									
								}
								a{
									display: block;
									width: 60px;
									padding-top: 34px;
									background: url(assets/icon201706.png)  no-repeat;
									height: 20px;									
									font-size: 12px;
									line-height: 20px;
									color:#5c5c5c;
									&:hover{
										color: #2064c8;
									}
									&.one_0{
										background-position: -146px -684px;
										&:hover{
											background-position-x: 13px;
										}
									}
									&.one_1{
										background-position: -212px -684px;
										&:hover{
											background-position-x: -43px;
										}
									}
									&.one_2{
										background-position: -146px -628px;
										&:hover{
											background-position-x: 13px;
										}
									}
									&.one_3{
										background-position: -210px -627px;
										&:hover{
											background-position-x: -42px;
										}
									}
									&.one_4{
										background-position: -272px -624px;
										&:hover{
											background-position-x: -94px;
										}
									}
									&.one_5{
										background-position: -147px -573px;
										&:hover{
											background-position-x: 13px;
										}
									}
									&.one_6{
										background-position: -276px -572px;
										&:hover{
											background-position-x: -95px;
										}
									}
									&.one_7{
										background-position: -276px -682px;
										&:hover{
											background-position-x: -95px;
										}
									}
									
								}
							}
						}
					}
				}
			}
		}
	}
</style>