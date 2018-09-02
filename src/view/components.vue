<template>
	<div>
		<h2>组件系统</h2>
		<buttonCounter></buttonCounter>
		<buttonCounter></buttonCounter>
		<buttonCounter></buttonCounter>
		<!-- <blogPost title="My journey with Vue"></blogPost> -->
		<!-- <blogPost title="Blogging with Vue"></blogPost>
		<blogPost title="Why Vue is so fun"></blogPost>
		<blog-post title="Why Vue is so fun"></blog-post> -->
		<div class="post" :style="{'font-size': postFontSize + 'em'}">
			<blog-post v-for="post in posts"
					   v-bind:key="post.id"
					   v-bind:title="post.title"
					   v-on:enlarge-text="postFontSize += $event "
					   v-on:ensmall-text="postFontSize -= $event "
					   ></blog-post>
		</div>
		<alert-box>Something bad happened!</alert-box>

	</div>
</template>

<style>
	
</style>

<script>
	import buttonCounter from '../components/button-counter.vue'
	import blogPost from '../components/blogPost.vue'
	import alertBox from '../components/alertBox.vue'

	export default {
		data () {
			return {
				posts: [
			      { id: 1, title: 'My journey with Vue' },
			      { id: 2, title: 'Blogging with Vue' },
			      { id: 3, title: 'Why Vue is so fun' }
			    ],
			    postFontSize: 1

			}
		},
		components: {
			buttonCounter,
			blogPost,
			'blog-post': blogPost,
			'alert-box': alertBox
		}

	}
</script>