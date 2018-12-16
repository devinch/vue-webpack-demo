<template>
	<div class="wrapper">
		<nav>
			<router-link to="/helloworld">hello world</router-link>
			<router-link to="/basic">基础</router-link>
			<router-link to="/form">表单</router-link>
			<router-link to="/event">事件</router-link>
			<router-link to="/component">组件</router-link>
			<router-link to="/transition">过度与动画</router-link>
			<router-link to="/user">路由</router-link>

			
			<router-view></router-view>
		</nav>
	</div>
</template>

<style scoped>
	nav{
		text-align: center;
	}
	nav > a{
		font-size: 1.2em;
		display: inline-block;
		margin-right: 1em;
	}
</style>

<script>
	export default {
		name: 'index',
		data() {
			return {

			}
		}
	}
</script>
