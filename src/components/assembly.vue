<template>
	<div class="box">
		<div class="bix">
			<a href="" class='left'><i :class="'i'+banben"></i>{{guonei.name}}</a>
			<div class='top'>
				<span v-for='(iem,index) in guonei.content' :class="index==0?'btn'+ banben +' on': 'btn'+banben">{{iem.name}}</span>					
			</div>
			<a href="" class='right'> 更多> </a>
		</div>
		<div class="btnbox">
			<ul v-for='iem in guonei.content' :class="'ben'+banben">
				<li v-for='itm in iem.content'>
					<a href="">
						<div class='img'>
							<img :src="itm.src" alt="" />
							<span> {{itm.h1}} </span>
						</div>						
					</a>
					<div class='benp'>
							<p>{{itm.txt}}</p>
					</div>
				</li>				
			</ul>			
		</div>		
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			guonei:{
				type:Object
			},
			banben:{
				type:[Number,String]
			}
		},
		mounted(){			
		
		},
		updated(){
			let btn=document.querySelectorAll('.btn'+this.banben);
			let ben=document.querySelectorAll('.ben'+this.banben);
//			console.log('.btn'+this.banben);
			let thiss=this
			for(let i=0;i<btn.length;i++){
				btn[i].onclick=function(){
					//跳转路由
//					thiss.$router.push({path:'/admin/one/ym'+thiss.banben+i});
					for(let a=0; a<btn.length;a++){
						btn[a].className='btn'
					}
					this.className+=' on';
					for(let a=0;a<ben.length;a++){
						ben[a].style.display='none'
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
				margin-top:5px;
				i{		
					display: inline-block;
					width: 29px;
					height: 24px;
					background: url(../assets/icon_index.png);
					
					&.i1{
						background-position: -576px -101px;
					}
					&.i2{
						background-position:-576px -131px;
					}
				}
			}
			.right{
				float: right;
				font-size: 14px;
			}
			div{
				float: left;
				margin-left: 20px;
				margin-top:5px ;
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
						border: 1px solid #F66;
						color:#f55;
					}
					&.on{
						background: #F66;
					    color: #fff;
					    border: 1px solid #F66;
					}
				}
			}
		}
		.btnbox{
			width: 100%;
			height: 202px;
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
					width: 292px;
					height: 201px;
					margin-right: 10px;
					float: left;
					&:nth-child(4){
						float: right;
						margin-right:0;					
					}
					a{					
						&>div{
							width: 292px;
							height: 160px;
							overflow: hidden;
							position: relative;
							img{
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
							border-bottom: 2px solid #F66;
						}
						img{
									top:-25px;
						}
					}
				}
			}
		}
	}
</style>