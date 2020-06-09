import $ from 'jquery';

import './css/index.css' 
import './less/index.less'
import './scss/index.scss'
import Vue from '../node_modules/vue/dist/vue.js'
import login from './components/login.vue'

$(function(){
	$('li:even').css('backgroundColor','yellow');
	$('li:odd').css('backgroundColor','aquamarine');
})

new Vue({
	data:{
		msg:"hello"
	},
	render: c => c(login)
	
}).$mount("#app")