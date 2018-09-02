<template>
	<button v-on:click="counter++">You clicked me {{counter}} times.</button>
</template>
<style>
	
</style>
<script>
	export default {
		data () {
			return {
				counter: 0
			}
		}

	}
</script>