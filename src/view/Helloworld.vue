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
		mounted() {
			console.log(this.$route)
			console.log(this.$router)
		}
	}
</script>
