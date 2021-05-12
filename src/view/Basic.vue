<template>
	<div>
		<h2>{{msg}}</h2>
		<h2>{{msg.split(' ').reverse().join()}}</h2>
		<h2 v-bind:class="{active: isActive,'text-warning': hasError}">{{ reverseMessage }}</h2>
		<h2 class="default" v-bind:class="classObj">{{ reverseMessage }}</h2>
		<h2 class="default" v-bind:class="[activeClass,errorClass]">{{ reverseMessage }}</h2>
		<span>{{num + 20}}</span>
		<div v-if="isRender">render this element</div>
		<template v-if="isRender">
			<ul>
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
			</ul>
		</template>
		<template v-if="loginType==='username'">
			<label for="username">username: </label><input type="text" id="username" placeholder="enter your username">
		</template>
		<template v-else>
			<label for="email">email: </label><input type="text" id="email" placeholder="enter your email">
		</template>
		<div v-show="isShow">show message</div>
		<ul>
			<li v-for="(item, index) in items">{{msg}}-{{index}}-{{item.message}}</li>
		</ul>
	</div>
</template>

<style scoped>
	h2{
		color: black;
	}
	
	.default{
		background-color: rgba(0, 0, 0, 0.2);
	}

	.active{
		background-color: skyblue;
		padding: 10px;
		border: 2px solid #ccc;
	}

	.text-warning{
		color: red;
	}
</style>

<script>
	export default {
		name: 'basic',
		data() {
			return {
				msg: 'Welcome to My Vue.js App',
				num: 10,
				isActive: true,
				hasError: true,
				activeClass: 'active',
				errorClass: 'text-warning',
				isRender: true,
				loginType: 'username',
				isShow: false
			}
		},
		computed: {
			reverseMessage: function () {
				return this.msg.split(' ').reverse().join()
			},
			classObj: function () {
				return {
					active: this.isActive && this.hasError,
					'text-warning': this.hasError
				}
			},
			items: function () {
				return [
					{message: 'hello2'},
					{message: 'world2'}
				]
			}
		}
	}
</script>
