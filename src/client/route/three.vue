<template>
	<div>
		我是第三个
		<two></two>
		<two></two>
	</div>
</template>

<script type='text/ecmascript-6'>
	import two from './two'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			two
		},
		mounted(){
			
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	div{
		line-height: 100px;
		text-align: center;
		font: 20px;
	}
</style>