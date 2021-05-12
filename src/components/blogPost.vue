<template>
	<div class="blog-post">
		<button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
		<button v-on:click="$emit('ensmall-text', 0.2)">Ensmall text</button>
		<h3>{{blog.id + '.' +blog.title}}</h3>
		<p>{{blog.content}}</p>
	</div>
</template>

<style scoped>
	.blog-post{
		border: 1px dashed #ccc;
		border-radius: 6px;
		margin: 10px;
		padding: 5px;
	}
</style>

<script>
	export default {
		props: ['post'],
		data () {
			return {

			}
		},
		computed: {
			blog: function () {
				if (this.post) {
					return this.post
				} else {
					return {id: 0, title: '默认标题', content: '默认内容'}
				}

			}
		}
	}
</script>