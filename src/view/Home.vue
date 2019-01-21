<template>
	<div class="wrapper">
		<nav>
			<router-link to="/helloworld">hello world</router-link>
			<router-link to="/basic">基础</router-link>
			<router-link to="/form">表单</router-link>
			<router-link to="/event">事件</router-link>
			<router-link to="/component">组件</router-link>
			<transition name="fade">
				<router-link to="/transition">过度与动画</router-link>
			</transition>

			<router-link to="/dynamicRouter/1234">动态路由匹配</router-link>
			<router-link to="/user">路由</router-link>
			<router-link to="/vuex-demo">vuex示例</router-link>

			
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

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
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
