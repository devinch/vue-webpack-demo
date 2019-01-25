<template>
	<div>
		<h4>count {{ count }}</h4>
		<h4>countAlias {{ countAlias }}</h4>
		<!-- <h4>countPlusLocalState {{ countPlusLocalState }}</h4> -->
		<ul>
			<li v-for="todo in doneTodos" v-bind:key="todo.id">{{todo.id}}.{{todo.text}}</li>
		</ul>
		<h4>{{ doneTodosCount }}</h4>
		<div><button @click="countPlus">count plus</button></div>
		<div><button @click="countPlusAction">count plus2</button></div>
		<div><button @click="countPlusAsync">count plus3</button></div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapMutations } from 'vuex'

	export default {
		name: 'vuexDemo',
		data() {
			return {
				localCount: 10
			}
		},
		/*computed: mapState({
			// count(){
			// 	return this.$store.state.count
			// }
			
			count: state => state.count,

			countAlias: 'count',

			countPlusLocalState (state) {
				return state.count + this.localCount
			}
		})*/

		/*computed: {
			count() { return this.$store.state.count },
			countAlias() { return this.$store.state.count },
			countPlusLocalState() { return this.$store.state.count + this.localCount },
			doneTodos() { return this.$store.getters.doneTodos },
			doneTodosCount(){ return this.$store.getters.doneTodosCount }
		}*/

		/*computed: {
			...mapState({
				count: 'count',
				countAlias: 'count'
			})
		}*/

		computed: {
			...mapState({
				count: 'count',
				countAlias: 'count'
			}),
			...mapGetters(['doneTodos', 'doneTodosCount'])
		},
		/*methods: {
			countPlus () {
			  this.$store.commit('increment')
			}
		}*/

		methods: {
			...mapMutations({
				countPlus: 'increment'
			}),
			countPlusAction () {
				this.$store.dispatch('increment')
			},
			countPlusAsync () {
				// this.$store.dispatch('incrementAsync',{amount: 10})
				this.$store.commit('incrementPayload', { amount: 10 })
			}
		}
	}
</script>

<style>
	
</style>