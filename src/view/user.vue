<template>
	<div>
		<h4>User</h4>
		<p>{{$route.params.id}}</p>
		<router-link to="/user/profile">profile</router-link>
		<router-link to="/user/posts">posts</router-link>

		<button @click="gotoHello">jump to hello world</button>
		<button @click="gotoBasic">jump to basic</button>

		<router-view></router-view>
    <router-view name="posts"></router-view>
    <router-view name="profile"></router-view>
	</div>
</template>

<script>
export default {

  name: 'user',

  data () {
    return {

    }
  },
  methods: {
  	gotoHello: function () {
  		this.$router.push({name: 'hello'})
  	},
  	gotoBasic: function () {
  		this.$router.push({path: '/basic'})
  	}
  }
}
</script>

<style lang="css" scoped>
</style>