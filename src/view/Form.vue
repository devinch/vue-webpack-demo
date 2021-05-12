<template>
	<div class="form">
		<h2>表单</h2>
		<form action="" v-on:submit.prevent="submitForm">
			<div class="form-item">
				<label for="username">username: </label>
				<input type="text" id="username" v-model="username">
				<span>{{username}}</span>
			</div>
			<div class="form-item">
				<label for="message">message: </label>
				<textarea name="message" id="message" cols="30" rows="10" v-model="textareaMessage"></textarea>
				<span>{{textareaMessage}}</span>
			</div>
			<div class="form-item">
				<input type="checkbox" v-model="checked"><span>{{checked}}</span>
				<input type="checkbox" v-model="toggle" true-value="yes" false-value="no"><span>{{toggle}}</span>
			</div>
			<div class="form-item">
				<input type="checkbox" v-model="checkedNames" value="jack">
				<label>jack</label>
				<input type="checkbox" v-model="checkedNames" value="devin">
				<label>devin</label>
				<input type="checkbox" v-model="checkedNames" value="george">
				<label>george</label>
				<span>{{checkedNames}}</span>
			</div>
			<div class="form-item">
				<input type="radio" name="gender" value="男" v-model="gender"><label>男</label>
				<input type="radio" name="gender" value="女" v-model="gender"><label>女</label>
				<span>{{gender}}</span>
			</div>
			<div class="form-item">
				<select name="" id="" v-model="selected">
					<option value="">请选择</option>
					<option value="1">A</option>
					<option value="2">B</option>
					<option value="3">C</option>
				</select>
				<span>{{selected}}</span>
			</div>
			<div class="form-item">
				<select name="" id="" v-model="selectedOpt" v-on:change="selectChanged($event)">
					<option v-for="option in options" v-bind:value="option.value">{{option.text}}</option>
				</select>
				<span>{{selectedOpt}}</span>
			</div>
			<div class="form-item">
				<button type="submit">提交</button>
				<button type="button" onclick="window.alert('1234')">click</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
	.form-item > label{
		vertical-align: top;
	}
</style>

<script>
	export default {
		data() {
			return {
				username: '',
				textareaMessage: '',
				checked: false,
				checkedNames: ['jack'],
				gender: '男',
				selected: '',
				selectedOpt: 'A',
				toggle: ''
			}
		},
		computed: {   
			options: function () {
				return [
					{text: 'one',value: 'A'},
					{text: 'two',value: 'B'},
					{text: 'three',value: 'C'}
				]
			}	
		},
		methods: {
			submitForm: function (event) {
				console.log('event: '+ event)
			},
			selectChanged: function (event) {
				console.log(event)
				console.log('change')
				// console.log(this.selectedOpt)
				
			}
		},
		watch: {
			selected: function (newValue, oldValue) {
				// console.log(newValue)
				// console.log(oldValue)
			}
		}
	}
</script>
