<template>
	<div>
		<button @click="show = !show">toggle</button>
		<transition name="fade">
			<p v-if="show">hello</p>
		</transition>
		<div id="list-demo" class="demo">
			<button @click="add">add</button>
			<button @click="remove">remove</button>
			<transition-group name="list" tag="p">
				<span v-for="item in items" :key="item" class="list-item">{{item}}</span>
			</transition-group :key="item" class="list-item"p{{item}}>
		</div>
	</div>
</template>

<script>
export default {
  name: 'transition-component',
  data () {
    return {
    	show: true,
    	items: [1,2,3,4,5,6,7,8,9],
    	nextNum: 10
    }
  },
  methods: {
  	randomIndex: function () {
  		return Math.floor(Math.random() * this.items.length)
  	},
  	add: function () {
  		// this.items.splice(this.randomIndex(), 0, this.nextNum++)
  		this.items.push(this.nextNum++)
  	},
  	remove: function () {
  		// this.items.splice(this.randomIndex(), 1)
  		this.items.pop()
  	}
  }
}
</script>

<style lang="css" scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}

	.list-item{
		display: inline-block;
		margin-right: 10px;
	}
	
	.list-enter-active, .list-leave-active{
		transition: all 1s;
	}

	.list-enter, .list-leave-to{
		opacity: 0;
		transform: translateX(30px);
	}

</style>