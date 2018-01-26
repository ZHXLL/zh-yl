<template>
	<div class="box">
		<div class="bix">
			<a href="" class='left'><i :class="'icon iconfont ' + da[(banben-1)] "></i>{{dates.name}}</a>
			<div class='top'>
				<span v-for='(iem,index) in dates.content' :class="index==0?'pbtn'+ banben +' on': 'pbtn'+banben">{{iem.name}}</span>				
			</div>
			<a href="" class='right'> 更多> </a>
		</div>
		<div class="btnbox">
			<ul v-for='(iem,index) in dates.content' :class="'pben'+banben">
				<li v-for='(itm,index) in iem.content'>
					<a href="">
						<div class='pben_d'>
							<span>{{itm.to}}</span>
							<i :class="'icon iconfont ' + xiao[(banben-1)]"></i>
							<span>{{itm.from}}</span>
						</div>
						<span>
							<p><span>{{itm.yue}}</span>月</p>
							<div v-show='itm.zhe'>{{itm.zhe}}折</div>
							<b>￥{{itm.qian}}</b>
						</span>
					</a>
				</li>				
			</ul>
		</div>		
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				da:['icon-feiji','icon-huochezhan'],
				xiao:['icon-feiji800','icon-jiantouarrow484']
			}
		},
		props:{
			dates:{
				type:Object
			},
			banben:{
				type:[Number,String]
			},
			
		},
		mounted(){				
			
		},
		updated(){
//			console.log(this.banben)
			let btn=document.querySelectorAll('.pbtn'+this.banben);
			let ben=document.querySelectorAll('.pben'+this.banben);
			for(let i=0;i<btn.length;i++){
				btn[i].onclick=function(){					
					for(let a=0; a<btn.length;a++){
						btn[a].className='btn'
					}
					this.className+=' on';
					for(let a=0;a<ben.length;a++){
						ben[a].style.display='none';
					}
					ben[i].style.display='block'
				}
			}	
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.box{
		margin-bottom: 20px;
		.bix{
			width: 100%;
			padding: 10px 0;
			overflow: hidden;
			.left{
				float: left;
				font-size: 18px;
				color:#555;
				i{
					font-size: 26px;
					padding-right: 5px;
				}
			}
			.right{
				float: right;
				font-size: 14px;
				margin-top:5px ;
			}
			div{
				float: left;
				margin-left: 20px;
				span{
					margin: 2px 10px 0 10px;
					padding: 2px 10px 0 10px;
					height: 20px;
					font-size:14px;
					font-weight: 400;
					line-height: 20px;
					display: block;
					float: left;
					border-radius: 15px;
					color: #555;
					cursor: pointer;
					border: 1px solid #fff;
					&:hover{
						border: 1px solid #49f;
					}
					&.on{
						background: #49f;
					    color: #fff;
					    border: 1px solid #49f;
					}
				}
			}
		}
		.btnbox{
			width: 100%;
			height: 110px;
			position: relative;
			ul{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: 0;
				&:nth-child(1){
					z-index: 1;
				}
				li{
					width: 199px;
					height: 100px;
					margin-top: 10px;
					border: 1px solid #d8e8fe;
					background: #f4f9ff;
					float: left;
					margin-left: -1px;
					position:relative;
					&:hover{
						border: 1px solid #49f;
						z-index: 2;
						border-bottom:2px solid #49f;
					}
					a{					
						&>div{
							width: 178px;
							height: 30px;
							float: right;
							margin-top: 20px;
							&>span{
								display: inline-block;
								width: 70px;
								height: 30px;
								text-align: center;
								line-height: 30px;
								font-size:16px ;
								float: left;
							}
							&>i{
								display: inline-block;
								width: 30px;
								height: 30px;
								text-align: center;
								margin-top: 3px;
								float: left;
							}
						}
						&>span{
							width: 178px;
							height: 30px;
							float: right;
							margin-top: 10px;
							&>p{
								display: inline-block;
								width: 70px;
								height: 30px;
								text-align: center;
								line-height: 30px;
								font-size:12px ;
								float: left;
							}
							&>div{
								float: left;
							    background: #090;
							    color: #fff;
							    border-radius: 8px;
							    margin: 5px 5px 0;
							    width: 30px;
							    padding: 0 3px;
							    line-height: 20px;
							}
							&>b{
								display: inline-block;
								width: 50px;
								height: 30px;
								text-align: center;
								line-height: 30px;
								float: right;
								font-size: 14px;
								font-weight: 400;
								color: red;
								margin-right: 10px;
							}
						}
					}
				}
			}
		}
	}
</style>