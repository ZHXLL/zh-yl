<template>
	<div class='anoe'>
		<div class="footer" id="footer">
			<img src="../../../assets/logo.jpg" alt="" />
			<div class="boxul">
				<ul>
					<li v-for='iem in num '><a href="">{{iem}}</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>
        
<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				num:['首页','国内酒店','团购','国际酒店','短租公寓',' 限时抢','机票','火车票',' 旅游指南']
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.anoe{
		width: 100%;
		height: 47px;
		background: url(../../../assets/header.jpg);
		.footer{
			width: 1200px;
			overflow: hidden;
			margin: 0 auto;
			img{
				float: left;
			}
			.boxul{
				width: 535px;
				height: 47px;
				float:right;
				li{
					float: left;
					margin-top: 15px;
					background: url(../../../assets/line.jpg)  no-repeat ; 
					background-position: 0 5px;
					&:nth-child(1){
						background-position: 0 20px;
					}
					&:last-of-type{
						a{
							color: #67a0f7;
						}
					}
					a{
						display: inline-block;
						float: left;
					    height: 20px;
					    padding: 0 10px 0 12px;
					    line-height: 20px;					   
					    float: left;
					    font-size: 12px;
					    color: #a5a5a5;
					}
				}
			}
		}
	}
	@media screen and (min-width: 1200px){ 		
   		#footer{
   			width: 1200px;
   		}
	}
	@media (min-width: 992px) and (max-width: 1199px){
	   #footer{
   			width: 840px;
   		}
	}
	@media screen and (max-width: 991px){
	   #footer{
   			width: 500px;
   			.boxul{
   				display: none;
   			}
   		}
	}
</style>