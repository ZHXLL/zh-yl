<template>
	<div class='box'>
		<div class="bix"><div class="img"></div></div>
		<div class="boxtwo">
			<img src="../assets/login_banner.jpg" alt="" />
			<div class="fromtxt">
				
				
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="" prop="pass">
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="" prop="checkPass">
				    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="" prop="age">
				    <el-input v-model.number="ruleForm2.age"></el-input>
				  </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				    <el-button @click="resetForm('ruleForm2')">重置</el-button>
				  </el-form-item>
				</el-form>
								
				
				
			</div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default {
	    data() {
	      var checkAge = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('年龄不能为空'));
	        }
	        setTimeout(() => {
	          if (!Number.isInteger(value)) {
	            callback(new Error('请输入数字值'));
	          } else {
	            if (value < 18) {
	              callback(new Error('必须年满18岁'));
	            } else {
	              callback();
	            }
	          }
	        }, 1000);
	      };
	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm2.checkPass !== '') {
	            this.$refs.ruleForm2.validateField('checkPass');
	          }
	          callback();
	        }
	      };
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm2.pass) {
	          callback(new Error('两次输入密码不一致!'));
	        } else {
	          callback();
	        }
	      };
	      return {
	        ruleForm2: {
	          pass: '',
	          checkPass: '',
	          age: ''
	        },
	        rules2: {
	          pass: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
	          ],
	          age: [
	            { validator: checkAge, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    }
  	}
</script>

<style lang="scss" scoped="" type="text/css">
	.box{
		width: 100%;
		height: 100%;
		background: #e8eff6;
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
		.boxtwo{
			width: 1000px;
			height: 350px;
			background: #abcdef;
			margin: 0 auto;
			&>img{
				float:left;
			}
			.fromtxt{
				float: left;
				width: 285px;
				height: 322px;
				padding: 24px 45px 0 45px;
			}
		}
	}
</style>