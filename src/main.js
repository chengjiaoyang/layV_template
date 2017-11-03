import Vue from 'vue'
import App from './App.vue'
import router from "./routes.config.js";

const app = new Vue({ 
	router: router,
	render: h => h(App),
	created() {
	  	layui.use(['element'], function () {
	  		const element = layui.element;
	  	});
	}
 }).$mount('#app'); 