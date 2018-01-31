<template>
	<div class='bodyDiv'>
		<div class="bix"><div class="img"></div></div>
		<div class='DivBody'>
			<div>
				<a href=""><img src="../assets/login_banner.jpg" alt="" /></a>
			</div>
			<div class='bodyTwo'>
				<div class='showHead'>
					<span><input type="radio" name='radio' checked @click='xians=true' />普通按钮</span>
					<span><input type="radio" name='radio' @click='xians=false' />手机动态密码登录</span>
				</div>
				<div class='showTwo' v-show='xians'>
					<div class='blurOne'><input type="text" placeholder='' /><p>请输入账号</p></div>
					<div class='blurTwo'><input type="password" placeholder='' /><p>请输入密码</p></div>
					<div class='blurThree'><input type="text" /><span class='ranDomOne'>1314</span><a href="#" class='cutText' @click='cutHtml'>换一张</a>
						<p>请输入验证码</p></div>
					<div><input type="checkbox" checked />两个月内免登陆</div>
				</div>
				<div class='showThree showOne' v-show='xians==false'>
					<div class='blurONE'>
						<select name="" id="">
							<option value="中国大陆+86">中国大陆+(86)</option>
							<option value="">中国香港+(852)</option>
							<option value="">中国澳门+(853)</option>
							<option value="">中国台湾+(886)</option>
						</select>
						<input type="text" placeholder='请输入手机号' />
						<p>请输入合法手机号</p>
					</div>
					<div class='blurTWO'>
						<input type="text" />
						<span class='ranDomTwo'>1314</span><a href="#" class='cutText' @click='cutHTML(index)'>换一张</a>
						<p>请输入验证码</p>
					</div>
					<div  class='blurTHREE'>
						<input type="text" placeholder='输入动态密码' />
						<button>获取动态密码</button>
						<p>请输入动态密码</p>
					</div>
					<div><input type="checkbox" checked />记住我</div>
				</div>
				<div class='showButton'>
					<button @click='judge'>登录</button>
				</div>
				<p class='bodyTwo_p'>用户未绑定手机号?</p>
				<div class='bodyTwo_div'>
					<ul>
						<li>未注册的用户，请先注册</li>
						<li>已经注册但未绑定手机号的用户，请拨打<span>400-666-1666</span>联系客服绑定手机。</li>
					</ul>
				</div>
			</div>
		</div>
		<div class='DivFoot'>
			<p></p>
			<p>
				<a href="">代理合作</a>|
				<a href="">广告服务</a>|
				<a href="">联系我们</a>
				<span>©1999 - 2014 eLong, Inc or its affiliates. All Rights Reserved.</span>
			</p>	
		</div>
	</div>
</template>
<style lang='scss' scope>
.bix{
			width: 1000px;
			height: 50px;
			padding: 25px 0;
			margin: 0 auto;
			.img{
				background: url(../assets/myelong_login.png);
				width: 113px;
				height: 48px;
				background-repeat:no-repeat;
			}
		}
	*{
		list-style: none; 
		margin: 0;
		padding: 0;
		text-decoration: none;
	}
	body::-webkit-scrollbar{
      display:none;
    }
    body{
    	background: #e8eff6;
    }
	.bodyDiv{
		width: 100%;
		height: 100%;
		background: #e8eff6;
		.DivHead{
			width: 1000px;
			height: 50px;
			margin: 0 auto;
			padding: 25px 0;
			div{
				width: 113px;
				height: 48px;
				/*background: url(../../assets/Dlimg/myelong_login.png) 0 0 no-repeat;
				background-image: url(../../assets/Dlimg/myelong_login.png) 0 0 no-repeat;*/
			}
		}
		.DivBody{
			width: 1000px;
			height: 350px;
			margin: 0 auto;
			div:nth-child(1){
				width: 620px;
				/*height: 350px;*/
				float: left;
			}
			.bodyTwo{
				width: 285px;
				height: 326px;
				position: relative;
				float: left;
				background: #fff;
				padding: 24px 45px 0 45px;
				.showHead{
					margin-bottom: 20px;
					span{
						font-size: 12px;
						color: #555;
						input{
							vertical-align: middle;
							margin-right: 5px;
						}
					}
				}
				.bodyTwo_p{
					display: none;
					font-size: 12px;
					color: #555;
					padding-top: 20px;
				}
				.bodyTwo_div{
					display: none;
					width: 260px;
					padding: 10px 10px;
					font-size: 12px;
					color: #555;
					background: #fff;
					position: absolute;
					border: 1px solid #ccc;
					bottom: -75px;
					li{
						padding-bottom: 5px;
					}
					span{
						color: blue;
					}
				}
				.bodyTwo_p:hover .bodyTwo_div{
					display: block;
				}
			}
			.showTwo{
				/*display: none;*/
				div{
					padding-bottom: 15px;
					input{
						width: 280px;
						height: 35px;
						border: 0;
						box-shadow: 0 0.5px 4px #ccc inset;
						border-radius: 3px;
						font-size: 14px;
					}
					p{
						font-size: 12px;
						color: red;
						display: none;
					}
				}
				div:nth-child(3){
					a{
						font-size: 12px;
						color: #555;
					}
				}
				div:nth-child(3){
					input{
						width: 147px;
					}
					.ranDomOne{
						padding: 0 10px 0 30px;
					}
					.cutText{
						color: #36c;
					}
					.cutText:hover{
						color: #f60;
					}
				}
				div:nth-child(4){
					font-size: 12px;
					color: #555;
				}
				div:nth-child(4){
					input{
						width: 12px;
						height: 12px;
						vertical-align: middle;
					}
				}
			}
			.showThree{
				/*display: none;*/
				div{
					margin-bottom: 15px;
					input{
						width: 280px;
						height: 35px;
						border: 0;
						box-shadow: 0 0.5px 4px #ccc inset;
						border-radius: 3px;
						font-size: 14px;
					}
					p{
						font-size: 12px;
						color: red;
						display: none;
					}
					select{
						width: 110px;
						height: 35px;
						font-size: 12px;
					}
					input{
						width: 157px;
						height: 35px;
					}
				}
				div:nth-child(1)>p{
					width: 215px;
					text-align: right;
				}
				div:nth-child(2){
					input{
						width: 147px;
					}
					.ranDomTwo{
						padding: 0 10px 0 30px;
					}
					.cutText{
						color: #36c;
					}
					.cutText:hover{
						color: #f60;
					}
					p{
						color: red;
						font-size: 12px;
					}
				}
				div:nth-child(3){
					input{
						width: 160px;
						border: 1px solid #ccc;
					}
					button{
						width: 110px;
						height: 35px;
						border: 0;
						border-radius: 5px;
						background: #36c;
						color: #fff;
						font-size: 14px;
					}
				}
				div:nth-child(4){
					input{
						width: 12px;
						height: 12px;
						vertical-align: middle;
					}
				}
			}
			.showButton{
				button{
					width: 285px;
					height: 40px;
					background: #ff8800;
					border-radius: 3px;
					border: 0;
					color: #fff;
					font-size: 20px;
					cursor: pointer;
				}
				button:hover{
					background: #f60;
				}
			}
		}
	}
	.DivFoot{
		margin-top: 80px;
		width: 100%;
		color: #555555;
		a{
			color: #555555;
		}
		a:nth-child(3){
			margin-right: 10px;
		}
		a:hover{
			color: #f60;
		}
		p{
			margin: 0 auto;
			width: 1000px;
			height: 30px;
			text-align: center;
			font-size: 12px;
		}
	}
</style>
<script>
	export default {
  		name: 'register',
  		data () {
    		return {
    			xians:true
    		}
  		},
  		methods:{
  			cutHtml:function(){
  				let text=document.getElementsByClassName('ranDomOne')[0];
  				text.innerHTML=Math.floor(Math.random()*10000)
  			},
  			cutHTML:function(){
  				let Text=document.getElementsByClassName('ranDomTwo')[0];
  				Text.innerHTML=Math.floor(Math.random()*10000)
  			},
  			judge:function(){
  				let blurOneP=document.querySelector('.blurOne>p')
  				let blurOneInput=document.querySelector('.blurOne>input')
  				let blurTwoP=document.querySelector('.blurTwo>p')
  				let blurTwoInput=document.querySelector('.blurTwo>input')
  				let blurThreeInput=document.querySelector('.blurThree>input')
  				let blurThreeSpan=document.querySelector('.ranDomOne')
  				let blurThreeP=document.querySelector('.blurThree>p')

  				let blurONEp=document.querySelector('.blurONE>p')
  				let blurONEinput=document.querySelector('.blurONE>input')
  				let blurTWOp=document.querySelector('.blurTWO>p')
  				let blurTWOinput=document.querySelector('.blurTWO>inpuut')
  				let blurTWOspan=document.querySelector('.ranDomTwo')
  				let blurTHREEinput=document.querySelector('.blurTHREE>input')
  				let blurTHREEp=document.querySelector('.blurTHREE>p')
  				let patter=/^1[34578]\d{9}$/;
  				if(blurOneInput.value==''){
  					blurOneP.style.display='block'
  				}else if(blurTwoInput.value==''){
  					blurOneP.style.display='none'
  					blurTwoP.style.display='block'
  				}else if(blurThreeInput.value==''){
  					blurOneP.style.display='none'
  					blurTwoP.style.display='none'
  					blurThreeP.style.display='block'
  				}else if(blurThreeInput.value!=blurThreeSpan.innerHTML){
  					blurOneP.style.display='none'
  					blurTwoP.style.display='none'
  					blurThreeP.style.display='block'
  					blurThreeP.innerHTML='验证码输入错误'
  				}else{
  					blurOneP.style.display='none'
  					blurTwoP.style.display='none'
  					blurThreeP.style.display='none'
  				}

  				if(blurONEinput.value==''){
  					blurONEp.style.display='block'
  				}else if(patter.test(blurONEinput.value)==false){
  					blurONEp.style.display='block'
  				}else if(blurTWOinput.value==''){
  					blurONEp.style.display='none'
  					blurTWOp.style.display='block'
  				}else if(blurTWOinput.value!=blurTWOspan.innerHTML){
  					blurONEp.style.display='none'
  					blurTWOp.innerHTML='验证码输入错误'
  					blurTWOp.style.display='block'
  				}else if(blurTHREEinput.value==''){
  					blurTHREEp.style.display='block'
  					blurONEp.style.display='none'
  					blurTWOp.style.display='none'
  				}else{
  					blurONEp.style.display='none'
  					blurTWOp.style.display='none'
  					blurTHREEp.style.display='none'
  				}
  			}
  		}
	}
</script>