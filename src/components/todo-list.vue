<template>
	<div>
		<ul>
			<li v-for="todo in todoList" :key="todo.id">
				<slot :todo="todo">{{todo.text}}</slot>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'todo-list',
  props: ['todos'],
  data () {
    return {
    	todoList: this.todos
    }
  }
}
</script>

<style lang="css" scoped>
</style>