<template>
	<div>
		<h2>hello world!</h2>
	</div>
</template>

<style scoped>
	
</style>

<script>
	export default {
		name: 'Helloworld',

		data() {
			return {
				name: 'hello vue!'
			}
		},

		mounted() {
			// console.log(this.$route)
			// console.log(this.$router)
		},

		beforeRouteEnter: (to, from, next) => {
			console.log('执行路由进入守卫')
			next(vm => {
				console.log(vm.name)
			})
		},

		beforeRouteUpdate: (to, from, next) => {
			console.log('执行路由更新守卫')
			next()
		},

		beforeRouteLeave: (to, from, next) => {
			console.log('执行路由离开守卫')
			next()
		}
	}
</script>
