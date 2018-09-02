<template>
	<div>
		<button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
		<button v-on:click="$emit('ensmall-text', 0.2)">Ensmall text</button>
		<h3>{{title}}</h3>
	</div>
</template>

<style scoped>
	
</style>

<script>
	export default {
		props: ['title'],
		data () {
			return {

			}
		}
	}
</script>