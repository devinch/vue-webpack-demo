<template>
	<div id="app">
		<h1>main app</h1>
		<router-view></router-view>
	</div>
</template>

<style>
	h1{
		color: red;
		text-align: center;
	}

	.active{
		color: red;
	}
</style>

<script>
	export default {
		name: 'app'
	}
</script>