import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    todos: [
      { id: 1, text: 'java', done: true },
      { id: 2, text: 'javascript', done: true },
      { id: 3, text: 'python', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementPayload (state, payload) {
      state.count += payload.amount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync ({commit}) {
      setTimeout(() => {
        commit('incrementPayload')
      }, 3000)
    }
  }
})

export default store
