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
					   v-bind:post="post"
					   v-on:enlarge-text="postFontSize += $event "
					   v-on:ensmall-text="postFontSize -= $event "
					   ></blog-post>
		</div>
		<alert-box>Something bad happened!</alert-box>
		<todo-list v-bind:todos="todos">
			<template slot-scope="slotProps">
				<p :class="{'text-warn': !slotProps.todo.isCompleted }">
					<span>{{slotProps.todo.id}}.</span>
					<span>{{slotProps.todo.text}}</span>
					<span>完成状态：{{ slotProps.todo.isCompleted ? '完成' : '未完成' }}</span>
				</p>
			</template>
		</todo-list>
		<base-layout>
			<template slot="header">
				<h2>这是头部</h2>
			</template>
			<div>
				<p>这是主题内容</p>
				<p>详细内容</p>
			</div>
			<template slot="footer">
				<p>这是底部内容</p>
			</template>
		</base-layout>
		
		<div class="dynamic-companent">
			<button v-for="tab in tabs" 
				:key="tab" 
				:class="['tab-button', {active: currentTab === tab}]"
				@click="currentTab=tab">
				{{tab}}
			</button>
			<div class="component">
				<keep-alive>
					<component :is="currentTabComponent" class="tab"></component>
				</keep-alive>
			</div>
		</div>

	</div>
</template>

<style scoped>
	.text-warn{
		color: #f00;
	}

	.tab-button {
	  padding: 6px 10px;
	  border-top-left-radius: 3px;
	  border-top-right-radius: 3px;
	  border: 1px solid #ccc;
	  cursor: pointer;
	  background: #f0f0f0;
	  margin-bottom: -1px;
	  margin-right: -1px;
	}
	.tab-button:hover {
	  background: #e0e0e0;
	}
	.tab-button.active {
	  background: #e0e0e0;
	}
	.tab {
	  border: 1px solid #ccc;
	  padding: 10px;
	}
</style>

<script>
	import buttonCounter from '../components/button-counter.vue'
	import blogPost from '../components/blogPost.vue'
	import alertBox from '../components/alertBox.vue'
	import todoList from '../components/todo-list.vue'
	import baseLayout from '../components/base-layout.vue'

	export default {
		data () {
			return {
				posts: [
			      { id: 1, title: 'My journey with Vue', content: 'post content' },
			      { id: 2, title: 'Blogging with Vue', content: 'post content' },
			      { id: 3, title: 'Why Vue is so fun', content: 'post content' }
			    ],
			    postFontSize: 1,
			    todos: [
			    	{id: 1, text: '待办事项1', isCompleted: true},
			    	{id: 2, text: '待办事项2', isCompleted: true},
			    	{id: 3, text: '待办事项3', isCompleted: false},
			    	{id: 4, text: '待办事项4', isCompleted: true},
			    	{id: 5, text: '待办事项5', isCompleted: false}

			    ],
			    currentTab: 'button-counter',
			    tabs: ['button-counter', 'blog-post', 'alert-box']

			}
		},

		computed: {
			currentTabComponent: function () {
				return this.currentTab.toLowerCase()
			}
		},

		components: {
			buttonCounter,
			blogPost,
			'blog-post': blogPost,
			'alert-box': alertBox,
			'todo-list': todoList,
			'base-layout': baseLayout
		}

	}
</script>