<template>
	<div>
		<p>{{this.$route.params.id}}</p>
		<h4>{{id}}</h4>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'dynamicRouter',
		props: ['id'],
		data(){
			return {

			}
		},
		watch: {
			'$route' (to, from){
				console.log('to: ' , to)
				console.log('from: ' , from)
			}
		},
		beforeRouteUpdate(to, from, next) {
			console.log('to: ' , to.params.id)
			console.log('from: ' , from.params.id)
			next()
		}
	}
</script>

<style>
	
</style>