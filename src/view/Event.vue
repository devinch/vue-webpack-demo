<template>
	<div>
		<button v-on:click="counter += 1">Add</button>
		<p>{{counter}}</p>
		<button v-on:click="greet">Greet</button>
		<button v-on:click="say('Hi')">Say Hi!</button>
		<button v-on:click="say('What')">Say What!</button>
		<button type="submit" v-on:click.prevent="warn('Form cannot be submitted yet,',$event)">submit</button>
		<input type="submit" v-on:keyup.enter="say('enter')"  value="submit">
		<button @click.ctrl="say('A')">A</button>
	</div>
</template>

<style scoped>
	
</style>

<script>
	export default {
		name: 'event',
		data(){
			return {
				counter: 0,
				name: 'vue.js'
			}
		},
		methods: {
			greet: function (event) {
				window.alert('hello ' + this.name)
				if (event) {
					window.alert(event.target.tagName)
				}
			},
			say: function (message) {
				window.alert(message)
			},
			warn: function (message, event) {
				if (event) {
					// event.preventDefault()
				}
				window.alert(message)
			}
		}

	}
</script>