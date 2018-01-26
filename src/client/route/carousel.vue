<template>
	<div class="carousel">
		<div class="box">
			<div class="box_1">
				<div class="box_12">
					<v_xxk></v_xxk>
				</div>
			</div>
		</div>
		<div class="swiper-container">
		  <div class="swiper-wrapper">
			    <div class="swiper-slide">
			    	<a href="" class='one'></a>
			    </div>
			    <div class="swiper-slide">
			    	<a href="" class='two'></a>
			    </div>
			    <div class="swiper-slide">
			    	<a href="" class='three'></a>
			    </div>
			    <div class="swiper-slide">
			    	<a href="" class='four'></a>
			    </div>
		  </div>
		  <div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	import v_xxk from './xxk'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			v_xxk
		},
		created(){
			
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true,
				effect : 'fade',
				pagination: {
			      el: '.swiper-pagination',
			      clickable :true,
			    },
			})
		}
	}
</script>

<style>	
	.swiper-pagination-bullet{
		width: 20px;
	    height: 5px;
	    overflow: hidden;
	    border-radius: 0;
	   	opacity:0.4;
	}
	.swiper-pagination-bullet-active{
		background: yellow;
		opacity: 1;
	}
</style>

<style lang="scss" scoped="" type="text/css">
.carousel{
	position: relative;
	.box{
		width: 100%;
		height: 300px;
		position:absolute;
		z-index: 2;		
		.box_1{
			width: 1200px;
			height: 300px;
			margin: 0 auto ;
			margin-top: 40px;
			.box_12{
				width: 500px;
				height: 260px;
				padding: 20px 50px;
				background: #fff;
			}
		}
	}
	.swiper-container{
		width: 100%;
		height: 380px;
		background: #abcdef;
		.swiper-wrapper{
			width: 100%;
			height: 100%;
			.swiper-slide{
				width: 100%;
				height: 100%;
				background: red;
				a{
					display: block;
					width: 100%;
					height: 100%;
				}
				.one{
					background: url('../../assets/images149370993339413.jpg') center no-repeat;
				}
				.two{
					background: url('../../assets/images149371001863360.jpg') center no-repeat;
				}
				.three{
					background: url('../../assets/images149371011284238.jpg') center no-repeat;
				}
				.four{
					background: url('../../assets/images151625751172720.jpg') center no-repeat;
				}
			}
		}
		.swiper-pagination{
			float: left;
			margin-left: 500px;
		}
	}
}
	
</style>





